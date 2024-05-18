<script setup lang="ts">
const props = defineProps({
  finishedDays: {
    type: Array,
    default: () => [true, false, false, true, true, true, false],
  },
})
const date = new Date()
const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const dayOfTheWeek = (date.getDay() + 6) % 7
const continueInterval = Array(6)
for (let i = 0; i < 6; i++)
  continueInterval[i] = props.finishedDays[i + 1] && props.finishedDays[i]
</script>

<template>
  <div class="flex flex-col gap-2 rounded-lg bg-white/80 p-3 px-4 shadow">
    <ol class="flex justify-between text-sm font-mono">
      <li
        v-for="(dayName, i) of dayNames" :key="dayName"
        class="text-secondary-600" :class="[dayOfTheWeek === i && 'underline font-bold']"
      >
        {{ dayName }}
      </li>
    </ol>
    <div class="relative">
      <div class="absolute inset-x-0 top-1 h-4 flex rounded-full bg-neutral-300">
        <div
          v-for="i in 6" :key="i"
          class="flex-1" :class="[continueInterval[i - 1] ? 'bg-secondary-300' : '']"
        />
      </div>
      <ul class="relative flex justify-between">
        <li
          v-for="i in 7" :key="i"
          class="h-6 w-6 rounded-full"
          :class="[props.finishedDays[i - 1] ? 'bg-secondary-400' : 'bg-neutral-400']"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>
