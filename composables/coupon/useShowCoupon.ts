import type { Coupon } from '~/amplify/data/resource'

export function useShowCoupon() {
  const isShowing = ref(false)
  const showingCoupon = ref<Coupon | null>(null)
  function openCoupon(code: Coupon) {
    showingCoupon.value = code
    isShowing.value = true
  }

  return {
    isShowing,
    showingCoupon,
    openCoupon
  }
}