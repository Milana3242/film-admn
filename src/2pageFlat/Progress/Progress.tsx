import * as React from 'react';
import Loader from '../../common/Loader';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useAppDispatch } from '../../redux/store';
import { fetchLessons } from '../../5entities/lessons';
import { useSelector } from 'react-redux';
import { selectLessonData } from '../../5entities/lessons/model/selector/lessons';
import { DeleteLesson } from '../../4features/ui/DeleteLessons';
import { selectProgressData } from '../../5entities/progress/model/selector/progress';
import { fetchProgress } from '../../5entities/progress';

export interface IAppProps {}

export function Progress(props: IAppProps) {
  const dispatch = useAppDispatch();
  const { progress, status } = useSelector(selectProgressData);

  const getProgress= async () => {
    dispatch(fetchProgress());
  };

  React.useEffect(() => {
    getProgress();
  }, []);

  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Breadcrumb pageName="Progress" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Название
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">

                </h5>
              </div>

              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  id
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">WordId</h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">SubLineId</h5>
              </div>
            </div>
          </div>
          {progress.map((progres: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === progress.length - 1
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
                <p className="hidden text-black dark:text-white sm:block">
                  {progres.title}
                </p>
              </div>

              <div className="flex items-center justify-center text-2xl p-2.5 xl:p-5">
                <p className="text-black  dark:text-white">{progres.language}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{progres.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{progres.word.id}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{progres.subtitleLine.id}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}
