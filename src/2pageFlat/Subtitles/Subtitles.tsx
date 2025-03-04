import * as React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button } from '../../6shared/ui/button';
import { useSelector } from 'react-redux';
import { selectSubData } from '../../5entities/subtitles/model/selector/subtitles';
import { useAppDispatch } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSubtitles } from '../../5entities/subtitles';
import { DeleteSubtitles } from '../../4features/ui/DeleteSubtitles';
import Loader from '../../common/Loader';

export interface ISubtitlesProps {
}

export function Subtitles (props: ISubtitlesProps) {

    const dispatch=useAppDispatch()
    const navigate=useNavigate()

    React.useEffect(()=>{
        dispatch(fetchSubtitles())
    },[])

   const {subtitles,status}= useSelector(selectSubData)
   console.log(subtitles)

 function editSubtitles(id: number) {
    navigate(`/edit-sub/${id}`);
  }

  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Breadcrumb pageName="Subtitles" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex justify-end">
            <Button puth="/create-sub">Добавить</Button>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Название фильма
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Язык
                </h5>
              </div>

              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  id
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">

                </h5>
              </div>


            </div>
          </div>
          {subtitles.map((sub: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === subtitles.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                    <Link to={`/subtitles/${sub.id}`}>  <img
                    className="w-[55px]"
                    src="https://yastatic.net/naydex/yandex-search/T1jw7T154/dad436MP5l/weIS7Pk_qtb8TWUQ1W08N302AYm-Mu6ioGjKaNUMBt6w8K5972cWQW07rLS44t_W4KNZR5Je88ZeTZCMbnziMIC6VaC8e7KIoAh8RN1uOTVga0KYomjq_7oqlmDED1jWuKGVE5hHMngXDNWWkp6cwPO6RRaeWfWNEwzUtQE"
                    alt="Brand"
                  /></Link>

                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {sub.film.title}
                </p>
              </div>

              <div className="flex items-center justify-center text-2xl p-2.5 xl:p-5">
                <p className="text-black  dark:text-white">{sub.language}</p>
              </div>


              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{sub.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3"></p>
              </div>
              <div className="flex items-center justify-center  p-2.5 xl:p-5">
                <DeleteSubtitles id={sub.id}></DeleteSubtitles>

                <div>
                  <img
                    onClick={() => editSubtitles(sub.id)}
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
