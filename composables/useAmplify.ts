import { generateClient } from 'aws-amplify/data'
import type { Schema } from '~/amplify/data/resource'

const client = generateClient<Schema>({
  authMode: 'userPool',
})

export function useAmplify() {
  const getCoupon = async () => {
    const { data: coupons, errors } = await client.models.Coupon.list()
    if (errors)
      console.error(errors)
    // eslint-disable-next-line no-console
    console.log(coupons)
    return coupons
  }

  const getUserIdByEmail = async (email: string) => {
    const { data: users, errors } = await client.models.User.list({
      filter: {
        email: {
          eq: email,
        },
      },
    })
    if (errors)
      console.error(errors)
    // eslint-disable-next-line no-console
    console.log(users)
    return users[0]?.id || ''
  }

  const getUserCoupon = async (id: string) => {
    const { data: coupons, errors } = await client.models.UserCoupon.list({
      filter: {
        userId: {
          eq: id,
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
  const createCoupon = async ({
    name = '優惠券',
    expiry_date = '2024-06-17',
    description = '滿兩千折兩百',
    brand = '石二鍋',
  } = {
    name: '優惠券',
    expiry_date: '2024-06-17',
    description: '滿兩千折兩百',
    brand: '石二鍋',
  }) => {
    const { data: coupons, errors } = await client.models.Coupon.create({
      name,
      expiry_date,
      description,
      brand,
    })
    if (errors)
      console.error(errors)
    return coupons
  }

  const giveUserCoupon = async (userId: string, couponId: string) => {
    const { data, errors } = await client.models.UserCoupon.create({
      userId,
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

  const checkUserTodayCheckIn = async (userId: string) => {
    const date = (new Date()).toISOString().slice(0, 10)
    const { data, errors } = await client.models.CheckIn.list({
      filter: {
        userId: {
          eq: userId,
        },
        date: {
          eq: date,
        },
      },
    })
    if (errors)
      console.error(errors)
    return !!data.length
  }

  const getUserCheckIns = async (userId: string) => {
    const { data, errors } = await client.models.CheckIn.list({
      filter: {
        userId: {
          eq: userId,
        },
      },
    })
    if (errors)
      console.error(errors)
    return data
  }

  const getUserCheckInsOfThisWeek = async (userId: string) => {
    const mondayDate = getMondayOfCurrentWeek().toISOString().slice(0, 10)

    const { data, errors } = await client.models.CheckIn.list({
      filter: {
        userId: {
          eq: userId,
        },
        date: {
          between: [mondayDate, (new Date()).toISOString().slice(0, 10)],
        },
      },
    })
    if (errors)
      console.error(errors)
    return data
  }

  const userCheckIn = async (userId: string, date: string = (new Date()).toISOString().slice(0, 10)) => {
    await client.models.CheckIn.create({
      userId,
      date,
    })
  }

  return { getCoupon, getUserCoupon, createCoupon, giveUserCoupon, createUser, getUserIdByEmail, userCheckIn, checkUserTodayCheckIn, getUserCheckIns, getUserCheckInsOfThisWeek }
}
