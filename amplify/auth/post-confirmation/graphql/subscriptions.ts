/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCoupon = /* GraphQL */ `subscription OnCreateCoupon($filter: ModelSubscriptionCouponFilterInput) {
  onCreateCoupon(filter: $filter) {
    brand
    createdAt
    description
    expiry_date
    id
    name
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCouponSubscriptionVariables,
  APITypes.OnCreateCouponSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onCreateUser(filter: $filter, profileOwner: $profileOwner) {
    coupons {
      nextToken
      __typename
    }
    createdAt
    email
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onCreateUserCoupon = /* GraphQL */ `subscription OnCreateUserCoupon(
  $filter: ModelSubscriptionUserCouponFilterInput
) {
  onCreateUserCoupon(filter: $filter) {
    coupon {
      brand
      createdAt
      description
      expiry_date
      id
      name
      updatedAt
      __typename
    }
    couponId
    createdAt
    id
    updatedAt
    user {
      createdAt
      email
      profileOwner
      updatedAt
      __typename
    }
    userEmail
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserCouponSubscriptionVariables,
  APITypes.OnCreateUserCouponSubscription
>;
export const onDeleteCoupon = /* GraphQL */ `subscription OnDeleteCoupon($filter: ModelSubscriptionCouponFilterInput) {
  onDeleteCoupon(filter: $filter) {
    brand
    createdAt
    description
    expiry_date
    id
    name
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCouponSubscriptionVariables,
  APITypes.OnDeleteCouponSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onDeleteUser(filter: $filter, profileOwner: $profileOwner) {
    coupons {
      nextToken
      __typename
    }
    createdAt
    email
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onDeleteUserCoupon = /* GraphQL */ `subscription OnDeleteUserCoupon(
  $filter: ModelSubscriptionUserCouponFilterInput
) {
  onDeleteUserCoupon(filter: $filter) {
    coupon {
      brand
      createdAt
      description
      expiry_date
      id
      name
      updatedAt
      __typename
    }
    couponId
    createdAt
    id
    updatedAt
    user {
      createdAt
      email
      profileOwner
      updatedAt
      __typename
    }
    userEmail
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserCouponSubscriptionVariables,
  APITypes.OnDeleteUserCouponSubscription
>;
export const onUpdateCoupon = /* GraphQL */ `subscription OnUpdateCoupon($filter: ModelSubscriptionCouponFilterInput) {
  onUpdateCoupon(filter: $filter) {
    brand
    createdAt
    description
    expiry_date
    id
    name
    updatedAt
    users {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCouponSubscriptionVariables,
  APITypes.OnUpdateCouponSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onUpdateUser(filter: $filter, profileOwner: $profileOwner) {
    coupons {
      nextToken
      __typename
    }
    createdAt
    email
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onUpdateUserCoupon = /* GraphQL */ `subscription OnUpdateUserCoupon(
  $filter: ModelSubscriptionUserCouponFilterInput
) {
  onUpdateUserCoupon(filter: $filter) {
    coupon {
      brand
      createdAt
      description
      expiry_date
      id
      name
      updatedAt
      __typename
    }
    couponId
    createdAt
    id
    updatedAt
    user {
      createdAt
      email
      profileOwner
      updatedAt
      __typename
    }
    userEmail
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserCouponSubscriptionVariables,
  APITypes.OnUpdateUserCouponSubscription
>;
