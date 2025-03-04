import { RootState } from "../../../../redux/store";

export const selectSubData = (state: RootState) => state.subtitles;
export const selectSubLinesData = (state: RootState) => state.subtitlesLine;