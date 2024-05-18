/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCoupon = /* GraphQL */ `mutation CreateCoupon(
  $condition: ModelCouponConditionInput
  $input: CreateCouponInput!
) {
  createCoupon(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCouponMutationVariables,
  APITypes.CreateCouponMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const createUserCoupon = /* GraphQL */ `mutation CreateUserCoupon(
  $condition: ModelUserCouponConditionInput
  $input: CreateUserCouponInput!
) {
  createUserCoupon(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserCouponMutationVariables,
  APITypes.CreateUserCouponMutation
>;
export const deleteCoupon = /* GraphQL */ `mutation DeleteCoupon(
  $condition: ModelCouponConditionInput
  $input: DeleteCouponInput!
) {
  deleteCoupon(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCouponMutationVariables,
  APITypes.DeleteCouponMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const deleteUserCoupon = /* GraphQL */ `mutation DeleteUserCoupon(
  $condition: ModelUserCouponConditionInput
  $input: DeleteUserCouponInput!
) {
  deleteUserCoupon(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserCouponMutationVariables,
  APITypes.DeleteUserCouponMutation
>;
export const updateCoupon = /* GraphQL */ `mutation UpdateCoupon(
  $condition: ModelCouponConditionInput
  $input: UpdateCouponInput!
) {
  updateCoupon(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCouponMutationVariables,
  APITypes.UpdateCouponMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const updateUserCoupon = /* GraphQL */ `mutation UpdateUserCoupon(
  $condition: ModelUserCouponConditionInput
  $input: UpdateUserCouponInput!
) {
  updateUserCoupon(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserCouponMutationVariables,
  APITypes.UpdateUserCouponMutation
>;
