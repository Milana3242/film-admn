import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button } from '../../6shared/ui/button';
import { useAppDispatch } from '../../redux/store';
import { fetchSubLines } from '../../5entities/subtitles/model/services/fetchSubLines';
import { useSelector } from 'react-redux';
import { selectSubLinesData } from '../../5entities/subtitles/model/selector/subtitles';
import Loader from '../../common/Loader';

export interface ISubtitlesLineProps {}

export function SubtitlesLine(props: ISubtitlesLineProps) {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { lines, status } = useSelector(selectSubLinesData);

  React.useEffect(() => {
    dispatch(fetchSubLines({ id }));
  }, []);

  return status === 'loading' ? (
    <Loader />
  ) : (
    <>
      <Breadcrumb pageName="SubtitlesLine" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Текст
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  startTime
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  endTime
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
          {lines.map((line: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === lines.length - 1
                  ? ''
                  : 'border-b border-stroke dark:border-strokedark'
              }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-[55px]"
                    src="https://avatars.mds.yandex.net/i?id=607611ea0cea550195ba96f240aed9a3dc57c84f-5887629-images-thumbs&n=13"
                    alt="Brand"
                  />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {line.text}
                </p>
              </div>

              <div className="flex items-center justify-center  p-2.5 xl:p-5">
                <p className="text-sky-600  dark:text-white">
                  {line.startTime}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{line.endTime}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{line.id}</p>
              </div>
              {/* <div className="flex items-center justify-center p-2.5 xl:p-5">
                <DeleteSubtitles id={sub.id}></DeleteSubtitles>


              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
