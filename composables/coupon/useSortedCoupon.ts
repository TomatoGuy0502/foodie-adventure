import type { Brand } from '~/constants'
import type { Coupon } from '~/amplify/data/resource'

export type SortRule = 'brand' | 'expiry_date'

export function useSortedCoupon() {
  const coupons = ref<Coupon[]>([])
  const sortRule = ref<SortRule>('brand')
  const filterBrands = ref<Set<Brand>>(new Set())

  function clearFilter() {
    filterBrands.value.clear()
  }

  const filteredCoupons = computed(() => {
    if (filterBrands.value.size === 0)
      return coupons.value
    return coupons.value.filter(coupon => filterBrands.value.has(coupon.brand as Brand))
  })
  const sortedCoupons = computed(() => {
    if (sortRule.value === 'expiry_date') {
      return filteredCoupons.value.toSorted((a, b) => {
        if (a.expiry_date === b.expiry_date)
          return a.brand > b.brand ? 1 : -1
        return a.expiry_date > b.expiry_date ? 1 : -1
      })
    }
    else {
      return filteredCoupons.value.toSorted((a, b) => {
        if (a.brand === b.brand)
          return a.expiry_date > b.expiry_date ? 1 : -1
        return a.brand > b.brand ? 1 : -1
      })
    }
  })

  return { coupons, sortRule, filterBrands, sortedCoupons, clearFilter }
}