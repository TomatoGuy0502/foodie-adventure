import { type ClientSchema, a, defineData } from '@aws-amplify/backend'

const schema = a.schema({
  User: a.model({
    email: a.email().required(),
    coupons: a.hasMany('UserCoupon', 'userEmail'),
  }).identifier(['email']).authorization(allow => [allow.authenticated()]),
  Coupon: a.model({
    name: a.string().required(),
    expiry_date: a.date().required(),
    description: a.string().required(),
    brand: a.string().required(),
    users: a.hasMany('UserCoupon', 'couponId'),
  }).authorization(allow => [allow.authenticated()]),
  UserCoupon: a.model({
    userEmail: a.email().required(),
    couponId: a.id().required(),
    user: a.belongsTo('User', 'userEmail'),
    coupon: a.belongsTo('Coupon', 'couponId'),
  }),
}).authorization(allow => [allow.authenticated()])

export type Schema = ClientSchema<typeof schema>
export const data = defineData({
  schema,
})

export type Coupon = Schema['Coupon']['type']
export type User = Schema['User']['type']
