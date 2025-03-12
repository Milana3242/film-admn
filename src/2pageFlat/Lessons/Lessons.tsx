import * as React from 'react';
import Loader from '../../common/Loader';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useAppDispatch } from '../../redux/store';
import { fetchLessons } from '../../5entities/lessons';
import { useSelector } from 'react-redux';
import { selectLessonData } from '../../5entities/lessons/model/selector/lessons';
import { DeleteLesson } from '../../4features/ui/DeleteLessons';

export interface IAppProps {}

export function Lessons(props: IAppProps) {
  const dispatch = useAppDispatch();
  const { lessons, status } = useSelector(selectLessonData);

  const getLessons = async () => {
    dispatch(fetchLessons());
  };

  React.useEffect(() => {
    getLessons();
  }, []);

  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Breadcrumb pageName="Lessons" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
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
                <h5 className="text-sm font-medium uppercase xsm:text-base"></h5>
              </div>
            </div>
          </div>
          {lessons.map((lesson: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === lessons.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-[55px]"
                    src="https://yastatic.net/naydex/yandex-search/T1jw7T154/dad436MP5l/weIS7Pk_qtb8TWUQ1W08N302AYm-Mu6ioGjKaNUMBt6w8K5972cWQW07rLS44t_W4KNZR5Je88ZeTZCMbnziMIC6VaC8e7KIoAh8RN1uOTVga0KYomjq_7oqlmDED1jWuKGVE5hHMngXDNWWkp6cwPO6RRaeWfWNEwzUtQE"
                    alt="Brand"
                  />
                </div>
                <p className="hidden text-black dark:text-white  text-2xl sm:block">
                  {lesson.film.title}
                </p>
              </div>

              <div className="flex items-center justify-center text-2xl p-2.5 xl:p-5">
                <p className="text-black  dark:text-white">{lesson.language}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{lesson.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3"></p>
              </div>
              <div className="flex items-center justify-center   p-2.5 xl:p-5">
                <DeleteLesson id={lesson.id}></DeleteLesson>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
