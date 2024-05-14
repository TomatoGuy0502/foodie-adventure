<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="relative h-full p-4 pb-24">
    <div class="absolute inset-x-4 top-4 flex gap-4">
      <button class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow">
        <div class="i-tabler-shirt text-xl" />
        <p class="font-bold">裝扮</p>
      </button>
      <button class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow">
        <div class="i-tabler-message-circle text-xl" />
        <p class="font-bold">聊天</p>
      </button>
    </div>
  </div>
</template>
