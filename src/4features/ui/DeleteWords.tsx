import * as React from 'react';
import { useAppDispatch } from '../../redux/store';
import { deleteWords, fetchWords } from '../../5entities/words';

export interface IDeleteFilmProps {
  id: number;
}

export function DeleteWords({ id }: IDeleteFilmProps) {
  const dispatch = useAppDispatch();
  async function deleteWord(id: any) {
    const answer = confirm('Вы уверены?');
    if (answer === false)  return;

   const payload= await dispatch(deleteWords(id));
   console.log('sws',payload)
    dispatch(fetchWords());
  }

  return (
    <div>
      <img
        onClick={() => deleteWord(id)}
        className="w-[30px] cursor-pointer"
        src="https://avatars.mds.yandex.net/i?id=6bb64016c436044c219778f8716d174512168887-5420434-images-thumbs&n=13"
      ></img>
    </div>
  );
}
