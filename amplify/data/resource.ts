import { type ClientSchema, a, defineData } from '@aws-amplify/backend'
import { postConfirmation } from '../auth/post-confirmation/resource'

const schema = a.schema({
  User: a.model({
    email: a.email().required(),
    profileOwner: a.string(),
    coupons: a.hasMany('UserCoupon', 'userId'),
    checkIns: a.hasMany('CheckIn', 'userId'),
  }).authorization(allow => allow.ownerDefinedIn('profileOwner')),
  Coupon: a.model({
    name: a.string().required(),
    expiry_date: a.date().required(),
    description: a.string().required(),
    brand: a.string().required(),
    users: a.hasMany('UserCoupon', 'couponId'),
  }).authorization(allow => [allow.authenticated()]),
  UserCoupon: a.model({
    userId: a.id().required(),
    couponId: a.id().required(),
    user: a.belongsTo('User', 'userId'),
    coupon: a.belongsTo('Coupon', 'couponId'),
  }).authorization(allow => [allow.authenticated()]),
  CheckIn: a.model({
    userId: a.id().required(),
    date: a.date().required(),
    users: a.belongsTo('User', 'userId'),
  }).authorization(allow => [allow.authenticated()]),
}).authorization(allow => [allow.resource(postConfirmation)])

export type Schema = ClientSchema<typeof schema>
export const data = defineData({
  schema,
})

export type Coupon = Schema['Coupon']['type']
export type User = Schema['User']['type']
