import { SerializedError } from "@reduxjs/toolkit";

export interface Users {
  id: 0,
  createdAt: string,
  updatedAt: string,
  name: string,
  email: string
}

export interface UsersSliceState {
  users: Users[];
  status: Status;
  error: null|undefined|string|SerializedError;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

