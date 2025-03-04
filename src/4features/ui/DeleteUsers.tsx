import * as React from 'react';
import { useAppDispatch } from '../../redux/store';
import { deleteUsers, fetchUsers } from '../../5entities/users';
import { Users } from '../../5entities/users/model/types/users';
import { useNavigate } from 'react-router-dom';

export interface IDeleteSubProps {
  id: number;
  users: Users[];
}

export function DeleteUsers({ id, users }: IDeleteSubProps) {
  const dispatch = useAppDispatch();
  const navigate=useNavigate()
  async function deleteUser(id: any) {
    const answer = confirm('Вы уверены?');
    if (answer === false) return;

    const findIndex = users.findIndex((user) => user.id === id);
    if (users.length - 1 === findIndex) {
      await dispatch(deleteUsers(id));
      localStorage.clear();
      // navigate("/auth/signup")
      window.location.reload()
    }else{
     await dispatch(deleteUsers(id));
    }
    // console.log(users.length - 1 === findIndex ? true : false);
    setTimeout(() => {
      dispatch(fetchUsers());
    }, 1000);
  }

  return (
    <div>
      <img
        onClick={() => deleteUser(id)}
        className="w-[30px] cursor-pointer"
        src="https://avatars.mds.yandex.net/i?id=6bb64016c436044c219778f8716d174512168887-5420434-images-thumbs&n=13"
      ></img>
    </div>
  );
}
