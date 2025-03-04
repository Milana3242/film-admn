import * as React from 'react';
import { useAppDispatch } from '../../redux/store';
import { deleteFilms, fetchFilms } from '../../5entities/films';
import { deleteSubtitles } from '../../5entities/subtitles/model/services/deleteSubtitles';

export interface IDeleteFilmProps {
  id: number;
}

export function DeleteFilm({ id }: IDeleteFilmProps) {
  const dispatch = useAppDispatch();
  async function deleteFilm(id: any) {
    const answer = confirm('Вы уверены?');
    if (answer === false)  return;

   const payload= await dispatch(deleteFilms(id));
   console.log('sws',payload)
    dispatch(fetchFilms());
  }

  return (
    <div>
      <img
        onClick={() => deleteFilm(id)}
        className="w-[30px] cursor-pointer"
        src="https://avatars.mds.yandex.net/i?id=6bb64016c436044c219778f8716d174512168887-5420434-images-thumbs&n=13"
      ></img>
    </div>
  );
}
