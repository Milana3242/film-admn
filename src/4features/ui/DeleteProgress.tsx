import * as React from 'react';
import { useAppDispatch } from '../../redux/store';
import { deleteFilms, fetchFilms } from '../../5entities/films';
import { deleteSubtitles } from '../../5entities/subtitles/model/services/deleteSubtitles';
import { deleteProgress, fetchProgress } from '../../5entities/progress';

export interface IDeleteFilmProps {
  id: number;
}

export function DeleteFProgress({ id }: IDeleteFilmProps) {
  const dispatch = useAppDispatch();
  async function deleteProgres(id: any) {
    const answer = confirm('Вы уверены?');
    if (answer === false)  return;

   const payload= await dispatch(deleteProgress(id));
   console.log('sws',payload)
    dispatch(fetchProgress());
  }

  return (
    <div>
      <img
        onClick={() => deleteProgres(id)}
        className="w-[30px] cursor-pointer"
        src="https://avatars.mds.yandex.net/i?id=6bb64016c436044c219778f8716d174512168887-5420434-images-thumbs&n=13"
      ></img>
    </div>
  );
}
