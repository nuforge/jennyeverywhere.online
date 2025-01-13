import { ref } from 'vue'
import Tag from '@/objects/nu/v1/NuTag'

interface DragState {
  activeTags: Tag[] // Tags currently being dragged
  dropTargetId: string | null // ID of the active drop zone
  isDragging: boolean // Dragging state
}

const dragState = ref<DragState>({
  activeTags: [],
  dropTargetId: null,
  isDragging: false,
})

export function useDragDrop() {
  function onDragStart(tags: Tag[]) {
    dragState.value.activeTags = tags
    dragState.value.isDragging = true
  }

  function onDragEnd() {
    dragState.value.activeTags = []
    dragState.value.dropTargetId = null
    dragState.value.isDragging = false
  }

  function onDrop(targetId: string, callback: (tags: Tag[]) => void) {
    if (dragState.value.isDragging && targetId) {
      dragState.value.dropTargetId = targetId
      callback(dragState.value.activeTags as Tag[])
    }
    onDragEnd()
  }

  return { dragState, onDragStart, onDragEnd, onDrop }
}
