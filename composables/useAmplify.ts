import { generateClient } from 'aws-amplify/data'
import type { Schema } from '~/amplify/data/resource'

const client = generateClient<Schema>({
  authMode: 'userPool',
})

export function useAmplify() {
  const userStore = useUserStore()

  const getCoupon = async () => {
    const { data: coupons, errors } = await client.models.Coupon.list()
    if (errors)
      console.error(errors)
    // eslint-disable-next-line no-console
    console.log(coupons)
    return coupons
  }

  const getUserCoupon = async () => {
    const { data: coupons, errors } = await client.models.UserCoupon.list({
      filter: {
        userEmail: {
          eq: userStore.email,
        },
      },
    })
    if (errors)
      console.error(errors)
    // eslint-disable-next-line no-console
    console.log(coupons)
    return coupons
  }

  // 客戶端不會用到
  const createCoupon = async () => {
    const { data: coupons, errors } = await client.models.Coupon.create({
      name: '優惠券',
      expiry_date: '2024-06-17',
      description: '滿兩千折兩百',
      brand: '石二鍋',
    })
    if (errors)
      console.error(errors)
    return coupons
  }

  const giveUserCoupon = async (couponId: string) => {
    const { data, errors } = await client.models.UserCoupon.create({
      userEmail: userStore.email,
      couponId,
    })
    if (errors)
      console.error(errors)
    return data
  }

  const createUser = async (email: string) => {
    const { data, errors } = await client.models.User.create({
      email,
    })
    if (errors)
      console.error(errors)
    return data
  }

  return { getCoupon, getUserCoupon, createCoupon, giveUserCoupon, createUser }
}
