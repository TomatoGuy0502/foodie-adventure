/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCoupon = /* GraphQL */ `query GetCoupon($id: ID!) {
  getCoupon(id: $id) {
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
` as GeneratedQuery<APITypes.GetCouponQueryVariables, APITypes.GetCouponQuery>;
export const getUser = /* GraphQL */ `query GetUser($email: AWSEmail!) {
  getUser(email: $email) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const getUserCoupon = /* GraphQL */ `query GetUserCoupon($id: ID!) {
  getUserCoupon(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserCouponQueryVariables,
  APITypes.GetUserCouponQuery
>;
export const listCoupons = /* GraphQL */ `query ListCoupons(
  $filter: ModelCouponFilterInput
  $limit: Int
  $nextToken: String
) {
  listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      brand
      createdAt
      description
      expiry_date
      id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCouponsQueryVariables,
  APITypes.ListCouponsQuery
>;
export const listUserCoupons = /* GraphQL */ `query ListUserCoupons(
  $filter: ModelUserCouponFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      couponId
      createdAt
      id
      updatedAt
      userEmail
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserCouponsQueryVariables,
  APITypes.ListUserCouponsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $email: AWSEmail
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      email
      profileOwner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
