<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<template>
  <div class="h-full flex flex-col gap-4 p-4 pb-24">
    <nuxt-link to="/auth" class="w-full rounded-full bg-accent p-2 px-4 text-center text-white shadow">
      管理登入狀態
    </nuxt-link>
  </div>
</template>
