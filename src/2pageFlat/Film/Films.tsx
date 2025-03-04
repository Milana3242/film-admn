import axios from 'axios';
import * as React from 'react';
// import { setFilms } from '../5entities/model/slice/filmsSlice';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import { Link } from 'react-router-dom';
import { Button } from '../../6shared/ui/button';
import { Loader } from '../../6shared/ui/loader';
import { fetchFilms } from '../../5entities/films';
import { useAppDispatch } from '../../redux/store';
import { FilmSliceState } from '../../5entities/films/model/types/film';
import { selectFilmsData } from '../../5entities/films/model/selector/films';
import { DeleteFilm } from '../../4features/ui/DeleteFilm';
// import { PatchFilm } from '../../4features/ui/EditFilm';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../6shared/ui/input';

export interface IAppProps {}

export function Films({}: IAppProps) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

   function editFilms(id: number) {
    navigate(`/edit-film/${id}`);
  }

  const getFilms = async () => {
    dispatch(fetchFilms());
  };

  React.useEffect(() => {
    getFilms();
  }, []);

  const { films, status } = useSelector(selectFilmsData);
  console.log(status);
  console.log(films);



  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Breadcrumb pageName="Films" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex justify-end">
            <Button puth="/create-film">Добавить</Button>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Название
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Сезон
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Серия
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  id
                </h5>
              </div>
              {/* <div className="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          Sales
        </h5>
      </div>
      <div className="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          Conversion
        </h5>
      </div> */}
            </div>
          </div>
          {films.map((film: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === films.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-[55px]"
                    src="https://yastatic.net/naydex/yandex-search/T1jw7T154/dad436MP5l/weIS7Pk_qtb8TWUQ1W08N302AYm-Mu6ioGjKO9ABAtvvq_wq7zYSEWk9-rXp5d6PsaNaQJRcocQMTcWLa3zpZdbgVqC4ebCJrAx6RN1uOTVga0KYomjq_7oqlmDED1jWuKGVE5hHMngXDNWWkp6cwPO6RRaeWfWNEwzUtQE"
                    alt="Brand"
                  />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {film.title}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{film.season}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{film.episode}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{film.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <DeleteFilm id={film.id}></DeleteFilm>

                <div>
                  <img
                    onClick={() => editFilms(film.id)}
                    className="w-[20px] ml-4 cursor-pointer"
                    src="https://avatars.mds.yandex.net/i?id=e315ad979a20ffe4b586d9ee247f734ed22549df-10933522-images-thumbs&n=13"
                  ></img>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
