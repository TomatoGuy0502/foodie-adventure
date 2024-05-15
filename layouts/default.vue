<script setup lang="ts">
const isOnline = useOnline()
</script>

<template>
  <main class="h-full">
    <template v-if="isOnline">
      <slot />
    </template>
    <p v-else class="grid h-full place-items-center text-center text-xl text-neutral-600 font-bold">
      沒有網路連線
    </p>
    <Navbar />
  </main>
</template>
