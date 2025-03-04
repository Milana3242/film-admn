import * as React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button } from '../../6shared/ui/button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../5entities/users';
import { selectUsersData } from '../../5entities/users/model/selector/users';
import { DeleteUsers } from '../../4features/ui/DeleteUsers';
import Loader from '../../common/Loader';

export interface IUsersProps {}

export function Users(props: IUsersProps) {
  const dispatch = useAppDispatch();
  const {users,status}=useSelector(selectUsersData)
  console.log(users)



  // const  users  = useSelector(selectUsersData);

React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

   return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Имя
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Почта
                </h5>
              </div>

              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  id
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base"></h5>
              </div>
            </div>
          </div>
          {users.map((user: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === users.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <Link to={`/subtitles/${user.id}`}>
                    {' '}
                    <img
                      className="w-[55px]"
                      src="https://yastatic.net/naydex/yandex-search/T1jw7T154/dad436MP5l/weIS7Pk_qtb8TWUQ1W08N302AYm-Mu6ioGjKPtIBAYi98_l97T4TRmg9qunu5d2G4aMIFcIOqMwMGMXabHvmZoPmXqC9dbKDrgd9RN1uOTVga0KYomjq_7oqlmDED1jWuKGVE5hHMngXDNWWkp6cwPO6RRaeWfWNEwzUtQE"
                      alt="Brand"
                    />
                  </Link>
                </div>
                <p className="hidden text-black text-2xl dark:text-white sm:block">
                  {user.name}
                </p>
              </div>

              <div className="flex items-center justify-center text-1xl p-2.5 xl:p-5">
                <p className="text-meta-3  dark:text-white">{user.email}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{user.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3"></p>
              </div>
              <div className="flex items-center justify-center  p-2.5 xl:p-5">
                <DeleteUsers users={users } id={user.id}></DeleteUsers>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
