import * as React from 'react';
import { useAppDispatch } from '../../redux/store';
import { deleteFilms, } from '../../5entities/films';
import { deleteSubtitles, fetchSubtitles } from '../../5entities/subtitles';

export interface IDeleteSubProps {
  id: number;
}

export function DeleteSubtitles({ id }: IDeleteSubProps) {
  const dispatch = useAppDispatch();
  async function deleteSub(id: any) {
    const answer = confirm('Вы уверены?');
    if (answer === false)  return;

   const payload= await dispatch(deleteSubtitles(id));
   console.log('sws',payload)
    dispatch(fetchSubtitles());
  }

  return (
    <div>
      <img
        onClick={() => deleteSub(id)}
        className="w-[30px] cursor-pointer"
        src="https://avatars.mds.yandex.net/i?id=6bb64016c436044c219778f8716d174512168887-5420434-images-thumbs&n=13"
      ></img>
    </div>
  );
}
