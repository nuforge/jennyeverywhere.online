import { reactive } from 'vue'

class SelectionManager {
  state

  constructor() {
    this.state = reactive({
      selectedIndices: new Set<number>(), // Use a Set for efficient lookups
      lastSelectedIndex: null as number | null, // Tracks the last index for shift+click
    })
  }

  // Add index to selection
  addToSelection(index: number) {
    this.state.selectedIndices.add(index)
  }

  // Remove index from selection
  removeFromSelection(index: number) {
    this.state.selectedIndices.delete(index)
  }

  // Toggle selection
  toggleSelection(index: number) {
    if (this.state.selectedIndices.has(index)) {
      this.removeFromSelection(index)
    } else {
      this.addToSelection(index)
    }
  }

  // Clear all selections
  clearSelection() {
    this.state.selectedIndices.clear()
  }

  // Handle range selection (shift+click)
  selectRange(start: number, end: number) {
    const [min, max] = [Math.min(start, end), Math.max(start, end)]
    for (let i = min; i <= max; i++) {
      this.addToSelection(i)
    }
  }

  // Handle hotkey logic
  handleHotkey(index: number, event: KeyboardEvent | MouseEvent) {
    if (event.shiftKey && this.state.lastSelectedIndex !== null) {
      this.selectRange(this.state.lastSelectedIndex, index)
    } else if (event.ctrlKey || event.metaKey) {
      this.toggleSelection(index)
    } else {
      this.clearSelection()
      this.addToSelection(index)
    }
    this.state.lastSelectedIndex = index
  }

  // Retrieve the selection as an array
  getSelection(): number[] {
    return Array.from(this.state.selectedIndices)
  }
}

export default SelectionManager
