import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth2 from './slices/authSlice2';
import films from '../5entities/films/model/slice/filmsSlice';
import subtitles from '../5entities/subtitles/model/slice/subtitlesSlice'
import subtitlesLine from '../5entities/subtitles/model/slice/subtitlesLineSlice'
import users from '../5entities/users/model/slice/usersSlice'
import auth from '../5entities/auth/model/slice/authSlice'
import lessons from '../5entities/lessons/model/slice/lessonsSlice'
import progress from '../5entities/progress/model/slice/progressSlice'
import words from '../5entities/words/model/slice/wordsSlice'
import lessonWords from '../5entities/lessons/model/slice/lessonWordsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Объединяем редюсеры
const rootReducer = combineReducers({
  auth2,
  films,
  subtitles,
  subtitlesLine,
  users,
  auth,
  lessons,
  progress,
  words,
  lessonWords
});

// Создаем обычный Redux Store
const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store