<script setup lang="ts">
import { brands } from '~/constants'
import type { Brand } from '~/constants'

definePageMeta({
  middleware: 'auth',
})

interface Coupon {
  id: number
  name: string
  date: string
  discount: string
  brand: Brand
}

const coupons = ref<Coupon[]>([
  { id: 0, name: '100 元折價券', date: '2021-10-10', discount: '滿 1000 減 100', brand: '王品' },
  { id: 1, name: '200 元折價券', date: '2021-10-10', discount: '滿 2000 減 200', brand: '王品' },
  { id: 2, name: '300 元折價券', date: '2021-10-10', discount: '滿 3000 減 300', brand: '石二鍋' },
  { id: 9, name: '100 元折價券', date: '2021-11-13', discount: '滿 1000 減 100', brand: '石二鍋' },
  { id: 10, name: '200 元折價券', date: '2021-11-13', discount: '滿 2000 減 200', brand: '王品' },
  { id: 11, name: '300 元折價券', date: '2021-11-13', discount: '滿 3000 減 300', brand: '王品' },
  { id: 12, name: '100 元折價券', date: '2021-12-05', discount: '滿 1000 減 100', brand: '王品' },
  { id: 13, name: '200 元折價券', date: '2021-12-05', discount: '滿 2000 減 200', brand: '陶板屋' },
  { id: 14, name: '300 元折價券', date: '2021-12-05', discount: '滿 3000 減 300', brand: '王品' },
])

const filterBrands = ref<Set<Brand>>(new Set())
function clearFilter() {
  filterBrands.value.clear()
}

type SortRule = 'brand' | 'date'
const sortRule = ref<SortRule>('brand')

const filteredCoupons = computed(() => {
  if (filterBrands.value.size === 0)
    return coupons.value
  return coupons.value.filter(coupon => filterBrands.value.has(coupon.brand))
})
const sortedCoupons = computed(() => {
  if (sortRule.value === 'date') {
    return filteredCoupons.value.toSorted((a, b) => {
      if (a.date === b.date)
        return a.brand > b.brand ? 1 : -1
      return a.date > b.date ? 1 : -1
    })
  }
  else {
    return filteredCoupons.value.toSorted((a, b) => {
      if (a.brand === b.brand)
        return a.date > b.date ? 1 : -1
      return a.brand > b.brand ? 1 : -1
    })
  }
})
</script>

<template>
  <div class="h-full flex flex-col gap-4 overflow-auto p-4 pb-20">
    <div class="flex gap-4">
      <Drawer>
        <template #button="{ openModal }">
          <button
            class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow"
            @click="openModal"
          >
            篩選品牌
            <div class="i-tabler-filter-star text-xl" />
          </button>
        </template>
        <template #title>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">
              篩選品牌
            </h3>
            <button class="flex items-center text-neutral-600" @click="clearFilter">
              清除篩選{{ filterBrands.size ? `(${filterBrands.size})` : '' }}<div class="i-tabler-filter-cancel" />
            </button>
          </div>
        </template>
        <template #body>
          <ul class="max-h-100 flex flex-col gap-2 overflow-y-auto text-lg text-neutral-900 font-medium">
            <label v-for="brand in brands" :key="brand" :for="brand" class="flex items-center gap-2">
              <input
                :id="brand" v-model="filterBrands"
                type="checkbox" :value="brand" class="invisible w-0 h-0 peer"
              >
              <div class="mr-4 h-6 w-6 border rounded peer-checked:bg-primary">
                <div
                  class="i-tabler-check text-white"
                  :class="[filterBrands.has(brand) ? 'opacity-100' : 'opacity-0']"
                />
              </div>
              <nuxt-img
                :src="`/brand-icons/${brand}.png`" width="40" height="40"
                class="shrink-0"
              />
              {{ brand }}
            </label>
          </ul>
        </template>
      </Drawer>
      <Drawer>
        <template #button="{ openModal }">
          <button
            class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow"
            @click="openModal"
          >
            排序
            <div class="i-tabler-sort-ascending text-xl" />
          </button>
        </template>
        <template #title>
          <h3 class="text-xl font-bold">
            選擇排序方式
          </h3>
        </template>
        <template #body>
          <div class="flex flex-col gap-2">
            <label for="brand" class="rounded p-4 text-center text-neutral-900 transition cursor-pointer" :class="{ 'bg-success': sortRule === 'brand' }">
              <input id="brand" v-model="sortRule" class="hidden" type="radio" value="brand">
              依品牌排序
            </label>
            <label for="date" class="rounded p-4 text-center text-neutral-900 transition cursor-pointer" :class="{ 'bg-success': sortRule === 'date' }">
              <input id="date" v-model="sortRule" class="hidden" type="radio" value="date">
              依到期日排序
            </label>
          </div>
        </template>
      </Drawer>
    </div>
    <ul v-if="sortedCoupons.length" class="flex flex-col gap-2 overflow-auto pb-4">
      <li v-for="coupon in sortedCoupons" :key="coupon.id" class="flex gap-2 rounded bg-white p-2 shadow">
        <nuxt-img
          :src="`/brand-icons/${coupon.brand}.png`" width="78" height="78"
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
    <p v-else-if="filterBrands.size" class="grid h-full place-items-center text-center text-xl text-neutral-600 font-bold">
      沒有任何此品牌的優惠券喔
    </p>
    <p v-else class="grid h-full place-items-center text-center text-xl text-neutral-600 font-bold">
      你沒有任何的優惠券喔
    </p>
  </div>
</template>
