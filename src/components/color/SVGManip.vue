<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle :fill="adjustedPart1" cx="30" cy="50" r="20" />
      <rect :fill="colors.part2" x="50" y="40" width="20" height="20" />
      <polygon :fill="colors.part3" points="70,10 90,50 70,90" />
    </svg>
    <div>
      <label>
        Part 1 Color:
        <input type="color" v-model="adjustedPart1" />
      </label>
      <label>
        Part 2 Color:
        <input type="color" v-model="colors.part2" />
      </label>
      <label>
        Part 3 Color:
        <input type="color" v-model="colors.part3" />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const colors = ref({
  part1: "#FF0000",
  part2: "#00FF00",
  part3: "#0000FF",
});
const part1BaseColor = ref("#FF0000");
const brightness = ref(100);

const adjustedPart1 = computed(() => {
  const base = hexToRgb(part1BaseColor.value);
  if (!base) return part1BaseColor.value;

  const factor = brightness.value / 100;
  const r = Math.min(255, base.r * factor);
  const g = Math.min(255, base.g * factor);
  const b = Math.min(255, base.b * factor);

  return `rgb(${r}, ${g}, ${b})`;
});

function hexToRgb(hex: string) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return match
    ? {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16),
    }
    : null;
}
</script>

<style>
/* Optional styling for your interface */
</style>
