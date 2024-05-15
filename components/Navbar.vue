<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav class="absolute inset-x-0 bottom-0 w-full flex items-center justify-between rounded-t-3xl bg-white px-6 pb-2 pt-3 shadow-[0_-4px_6px_-1px_rgb(0_0_0_/_0.1),_0_-2px_4px_-2px_rgb(0_0_0_/_0.1)]">
    <nuxt-link to="/" class="gap-1/2 flex flex-1 flex-col items-center py-2" :class="{ 'text-primary': route.path === '/' }">
      <div class="i-tabler-home text-xl" />
      <p class="text-sm">
        營地
      </p>
    </nuxt-link>
    <nuxt-link to="/adventure" class="gap-1/2 flex flex-1 flex-col items-center py-2" :class="{ 'text-primary': route.path === '/adventure' }">
      <div class="i-tabler-map-route text-xl" />
      <p class="text-sm">
        冒險
      </p>
    </nuxt-link>
    <nuxt-link to="/coupon" class="gap-1/2 flex flex-1 flex-col items-center py-2" :class="{ 'text-primary': route.path === '/coupon' }">
      <div class="i-tabler-ticket text-xl" />
      <p class="text-sm">
        戰利品
      </p>
    </nuxt-link>
    <nuxt-link to="/user" class="gap-1/2 flex flex-1 flex-col items-center py-2" :class="{ 'text-primary': route.path === '/user' }">
      <div class="i-tabler-menu-2 text-xl" />
      <p class="text-sm">
        更多
      </p>
    </nuxt-link>
  </nav>
</template>

<style scoped>

</style>
