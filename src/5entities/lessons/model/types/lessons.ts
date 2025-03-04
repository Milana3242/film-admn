import { SerializedError } from '@reduxjs/toolkit';

export interface Lessons {
  id: number;
  createdAt: string;
  updatedAt: string;
  filmId: number;
  userId: number;
  startTime: number;
  endTime: number;
  targetSubtitleId: number;
  sourceSubtitleId: number;
  targetSubtitle: {};
  sourceSubtitle: {};
}
export interface LessonWords {
  id: number;
  original: string;
  language: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface LessonsSliceState {
  lessons: Lessons[];
  status: Status;
  error: null | undefined | string | SerializedError;
}
