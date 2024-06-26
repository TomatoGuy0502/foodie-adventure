<script setup lang="ts">
import { brands } from '~/constants'
import { useShowCoupon } from '~/composables/coupon/useShowCoupon'
import { useSortedCoupon } from '~/composables/coupon/useSortedCoupon'

definePageMeta({
  middleware: 'auth',
})

const { locale } = useI18n()

const { coupons, sortRule, filterBrands, sortedCoupons, clearFilter } = useSortedCoupon()
const { isShowing, showingCoupon, openCoupon } = useShowCoupon()
const { getCoupon } = useAmplify()
onMounted(async () => {
  coupons.value = await getCoupon()
})
</script>

<template>
  <div class="h-full flex flex-col gap-4 overflow-auto p-4 pb-20">
    <div class="flex gap-4">
      <Drawer>
        <template #button="{ openModal }">
          <button
            class="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow"
            @click="openModal"
          >
            {{ $t('couponPage.filter_brand') }}
            <div class="i-tabler-filter-star text-xl" />
          </button>
        </template>
        <template #title>
          <div class="flex items-center justify-between">
            <h3 class="font-bold" :class="[locale === 'ja' ? '' : 'text-xl']">
              {{ $t('couponPage.filter_brand') }}
            </h3>
            <button
              class="flex items-center text-neutral-600"
              :class="[locale === 'ja' ? 'text-sm' : 'text-xl']" @click="clearFilter"
            >
              {{ $t('couponPage.clear_filter') }} {{ filterBrands.size ? `(${filterBrands.size})` : '' }}<div class="i-tabler-filter-cancel" />
            </button>
          </div>
        </template>
        <template #body>
          <ul class="max-h-100 flex flex-col gap-2 overflow-y-auto text-lg text-neutral-900 font-medium">
            <label v-for="brand in brands" :key="brand" :for="brand" class="flex items-center gap-2">
              <input
                :id="brand" v-model="filterBrands"
                type="checkbox" :value="brand" class="peer invisible h-0 w-0"
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
            class="flex items-center justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow"
            :class="[locale === 'ja' ? '' : 'flex-1']"
            @click="openModal"
          >
            {{ $t('couponPage.sort_brand') }}
            <div class="i-tabler-sort-ascending text-xl" />
          </button>
        </template>
        <template #title>
          <h3 class="text-xl font-bold">
            {{ $t('couponPage.select_sort_method') }}
          </h3>
        </template>
        <template #body>
          <div class="flex flex-col gap-2">
            <label for="brand" class="cursor-pointer rounded p-4 text-center text-neutral-900 transition" :class="{ 'bg-success': sortRule === 'brand' }">
              <input id="brand" v-model="sortRule" class="hidden" type="radio" value="brand">
              {{ $t('couponPage.sort_by_brand') }}
            </label>
            <label for="expiry_date" class="cursor-pointer rounded p-4 text-center text-neutral-900 transition" :class="{ 'bg-success': sortRule === 'expiry_date' }">
              <input id="expiry_date" v-model="sortRule" class="hidden" type="radio" value="expiry_date">
              {{ $t('couponPage.sort_by_expiry_date') }}
            </label>
          </div>
        </template>
      </Drawer>
    </div>
    <CouponModal v-model:isOpen="isShowing" :coupon="showingCoupon" />
    <ul v-if="sortedCoupons.length" class="flex flex-col gap-3 overflow-auto pb-4">
      <li
        v-for="coupon in sortedCoupons" :key="coupon.id"
        class="flex gap-4 rounded-xl bg-white p-3 px-4 shadow"
        @click="openCoupon(coupon)"
      >
        <nuxt-img
          :src="`/brand-icons/${coupon.brand}.png`" width="78" height="78"
          class="shrink-0 border-r border-neutral"
        />
        <div class="flex flex-col">
          <p class="font-bold">
            {{ coupon.name }}
          </p>
          <p class="mt-auto text-sm text-neutral-600">
            {{ $t('couponPage.expiry_date') }}: {{ coupon.expiry_date }}
          </p>
          <p class="text-sm text-neutral-600">
            {{ coupon.description }}
          </p>
        </div>
      </li>
    </ul>
    <p v-else-if="filterBrands.size" class="grid h-full place-items-center text-center text-xl text-neutral-600 font-bold">
      {{ $t('couponPage.no_brand_coupon_message') }}
    </p>
    <p v-else class="grid h-full place-items-center text-center text-xl text-neutral-600 font-bold">
      {{ $t('couponPage.no_coupon_message') }}
    </p>
  </div>
</template>
