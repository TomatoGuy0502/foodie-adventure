/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Coupon = {
  __typename: "Coupon",
  brand: string,
  createdAt: string,
  description: string,
  expiry_date: string,
  id: string,
  name: string,
  updatedAt: string,
  users?: ModelUserCouponConnection | null,
};

export type ModelUserCouponConnection = {
  __typename: "ModelUserCouponConnection",
  items:  Array<UserCoupon | null >,
  nextToken?: string | null,
};

export type UserCoupon = {
  __typename: "UserCoupon",
  coupon?: Coupon | null,
  couponId: string,
  createdAt: string,
  id: string,
  updatedAt: string,
  user?: User | null,
  userEmail: string,
};

export type User = {
  __typename: "User",
  coupons?: ModelUserCouponConnection | null,
  createdAt: string,
  email: string,
  profileOwner?: string | null,
  updatedAt: string,
};

export type ModelCouponFilterInput = {
  and?: Array< ModelCouponFilterInput | null > | null,
  brand?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelCouponFilterInput | null,
  or?: Array< ModelCouponFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelCouponConnection = {
  __typename: "ModelCouponConnection",
  items:  Array<Coupon | null >,
  nextToken?: string | null,
};

export type ModelUserCouponFilterInput = {
  and?: Array< ModelUserCouponFilterInput | null > | null,
  couponId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserCouponFilterInput | null,
  or?: Array< ModelUserCouponFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCouponConditionInput = {
  and?: Array< ModelCouponConditionInput | null > | null,
  brand?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  expiry_date?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCouponConditionInput | null,
  or?: Array< ModelCouponConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCouponInput = {
  brand: string,
  description: string,
  expiry_date: string,
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  email: string,
  profileOwner?: string | null,
};

export type ModelUserCouponConditionInput = {
  and?: Array< ModelUserCouponConditionInput | null > | null,
  couponId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelUserCouponConditionInput | null,
  or?: Array< ModelUserCouponConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userEmail?: ModelStringInput | null,
};

export type CreateUserCouponInput = {
  couponId: string,
  id?: string | null,
  userEmail: string,
};

export type DeleteCouponInput = {
  id: string,
};

export type DeleteUserInput = {
  email: string,
};

export type DeleteUserCouponInput = {
  id: string,
};

export type UpdateCouponInput = {
  brand?: string | null,
  description?: string | null,
  expiry_date?: string | null,
  id: string,
  name?: string | null,
};

export type UpdateUserInput = {
  email: string,
  profileOwner?: string | null,
};

export type UpdateUserCouponInput = {
  couponId?: string | null,
  id: string,
  userEmail?: string | null,
};

export type ModelSubscriptionCouponFilterInput = {
  and?: Array< ModelSubscriptionCouponFilterInput | null > | null,
  brand?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  expiry_date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCouponFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserCouponFilterInput = {
  and?: Array< ModelSubscriptionUserCouponFilterInput | null > | null,
  couponId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserCouponFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userEmail?: ModelSubscriptionStringInput | null,
};

export type GetCouponQueryVariables = {
  id: string,
};

export type GetCouponQuery = {
  getCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  email: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserCouponQueryVariables = {
  id: string,
};

export type GetUserCouponQuery = {
  getUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};

export type ListCouponsQueryVariables = {
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCouponsQuery = {
  listCoupons?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserCouponsQueryVariables = {
  filter?: ModelUserCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCouponsQuery = {
  listUserCoupons?:  {
    __typename: "ModelUserCouponConnection",
    items:  Array< {
      __typename: "UserCoupon",
      couponId: string,
      createdAt: string,
      id: string,
      updatedAt: string,
      userEmail: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  email?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCouponMutationVariables = {
  condition?: ModelCouponConditionInput | null,
  input: CreateCouponInput,
};

export type CreateCouponMutation = {
  createCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserCouponMutationVariables = {
  condition?: ModelUserCouponConditionInput | null,
  input: CreateUserCouponInput,
};

export type CreateUserCouponMutation = {
  createUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};

export type DeleteCouponMutationVariables = {
  condition?: ModelCouponConditionInput | null,
  input: DeleteCouponInput,
};

export type DeleteCouponMutation = {
  deleteCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserCouponMutationVariables = {
  condition?: ModelUserCouponConditionInput | null,
  input: DeleteUserCouponInput,
};

export type DeleteUserCouponMutation = {
  deleteUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};

export type UpdateCouponMutationVariables = {
  condition?: ModelCouponConditionInput | null,
  input: UpdateCouponInput,
};

export type UpdateCouponMutation = {
  updateCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserCouponMutationVariables = {
  condition?: ModelUserCouponConditionInput | null,
  input: UpdateUserCouponInput,
};

export type UpdateUserCouponMutation = {
  updateUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};

export type OnCreateCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnCreateCouponSubscription = {
  onCreateCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserCouponSubscriptionVariables = {
  filter?: ModelSubscriptionUserCouponFilterInput | null,
};

export type OnCreateUserCouponSubscription = {
  onCreateUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};

export type OnDeleteCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnDeleteCouponSubscription = {
  onDeleteCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserCouponSubscriptionVariables = {
  filter?: ModelSubscriptionUserCouponFilterInput | null,
};

export type OnDeleteUserCouponSubscription = {
  onDeleteUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};

export type OnUpdateCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnUpdateCouponSubscription = {
  onUpdateCoupon?:  {
    __typename: "Coupon",
    brand: string,
    createdAt: string,
    description: string,
    expiry_date: string,
    id: string,
    name: string,
    updatedAt: string,
    users?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    coupons?:  {
      __typename: "ModelUserCouponConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    email: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserCouponSubscriptionVariables = {
  filter?: ModelSubscriptionUserCouponFilterInput | null,
};

export type OnUpdateUserCouponSubscription = {
  onUpdateUserCoupon?:  {
    __typename: "UserCoupon",
    coupon?:  {
      __typename: "Coupon",
      brand: string,
      createdAt: string,
      description: string,
      expiry_date: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    couponId: string,
    createdAt: string,
    id: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null,
    userEmail: string,
  } | null,
};
