import { SerializedError } from "@reduxjs/toolkit";

export interface Progress    {
  id: number,
  userId: number,
  wordId: number,
  subtitleLineId: number,
  level: number,
  nextReviewDate: string,
  reviewCount: number
}



  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }

  export interface ProgressSliceState {
    progress: Progress[];
    status: Status;
    error: null|undefined|string|SerializedError;
  }

