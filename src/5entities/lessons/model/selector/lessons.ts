import { RootState } from "../../../../redux/store";

export const selectLessonData = (state: RootState) => state.lessons;
export const selectLessonWordsData = (state: RootState) => state.lessonWords;
