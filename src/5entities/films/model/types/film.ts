import { SerializedError } from "@reduxjs/toolkit";

export interface Film {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  season: number;
  episode: number;
  parentId: null;
  subtitles: [];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface FilmSliceState {
  films: Film[];
  status: Status;
  error: null|undefined|string|SerializedError;
}