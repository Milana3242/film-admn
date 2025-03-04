import { SerializedError } from "@reduxjs/toolkit";

export interface Subtitles {
  id: number;
  language: string;
  createdAt: string;
  updatedAt: string;
  filmId: number;
  fileId: number;
  subtitleLines: [];
}

export interface SubtitlesSliceState {
  subtitles: Subtitles[];
  status: Status;
  error: null|undefined|string|SerializedError;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface SubtitlesLine {
    id: number;
    language: string;
    createdAt: string;
    updatedAt: string;
    filmId: number;
    fileId: number;
  }

  export interface SubtitlesLineSliceState {
    lines: SubtitlesLine[];
    status: Status;
    error: null|undefined|string|SerializedError;
}