import { SerializedError } from "@reduxjs/toolkit";

export interface Words    {
  original: string,
  language: string
}



  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }

  export interface WordsSliceState {
    words: Words[];
    status: Status;
    error: null|undefined|string|SerializedError;
  }

