<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const coupons = [
  { id: 0, name: '100 元折價券', date: '2021-10-10', discount: '滿 1000 減 100', store: '王品' },
  { id: 1, name: '200 元折價券', date: '2021-10-10', discount: '滿 2000 減 200', store: '王品' },
  { id: 2, name: '300 元折價券', date: '2021-10-10', discount: '滿 3000 減 300', store: '石二鍋' },
  { id: 9, name: '100 元折價券', date: '2021-11-13', discount: '滿 1000 減 100', store: '石二鍋' },
  { id: 10, name: '200 元折價券', date: '2021-11-13', discount: '滿 2000 減 200', store: '王品' },
  { id: 11, name: '300 元折價券', date: '2021-11-13', discount: '滿 3000 減 300', store: '王品' },
  { id: 12, name: '100 元折價券', date: '2021-12-05', discount: '滿 1000 減 100', store: '王品' },
  { id: 13, name: '200 元折價券', date: '2021-12-05', discount: '滿 2000 減 200', store: '陶板屋' },
  { id: 14, name: '300 元折價券', date: '2021-12-05', discount: '滿 3000 減 300', store: '王品' },
]
</script>

<template>
  <div class="h-full flex flex-col gap-4 overflow-auto p-4 pb-20">
    <div class="flex gap-4">
      <button class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow">
        篩選品牌
        <div class="i-tabler-filter-star text-xl" />
      </button>
      <button class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow">
        排序
        <div class="i-tabler-sort-ascending text-xl" />
      </button>
    </div>
    <ul class="flex flex-col gap-2 overflow-auto pb-4">
      <li v-for="coupon in coupons" :key="coupon.id" class="flex gap-2 rounded bg-white p-2 shadow">
        <nuxt-img
          :src="`/brand-icons/${coupon.store}.png`" width="78" height="78"
          class="shrink-0 border-r border-neutral"
        />
        <div class="">
          <p class="font-bold">
            {{ coupon.name }}
          </p>
          <p class="text-sm text-neutral-600">
            使用期限: {{ coupon.date }}
          </p>
          <p class="text-sm text-neutral-600">
            {{ coupon.discount }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
