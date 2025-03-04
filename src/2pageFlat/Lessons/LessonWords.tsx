import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button } from '../../6shared/ui/button';
import { useAppDispatch } from '../../redux/store';
import { fetchSubLines } from '../../5entities/subtitles/model/services/fetchSubLines';
import { useSelector } from 'react-redux';
import { selectSubLinesData } from '../../5entities/subtitles/model/selector/subtitles';
import Loader from '../../common/Loader';
import { selectLessonWordsData } from '../../5entities/lessons/model/selector/lessons';
import { fetchLessonWords } from '../../5entities/lessons';

export interface ISubtitlesLineProps {}

export function LessonWords(props: ISubtitlesLineProps) {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { words, status } = useSelector(selectLessonWordsData);

  React.useEffect(() => {
    dispatch(fetchLessonWords({ id }));
  }, []);


//   status === 'loading' ? (
//     <Loader />
//   ) : (
    return( <>
      <Breadcrumb pageName="LessonWords" />

      <div className="flex flex-col gap-10">
        <div className=" rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex flex-col">
            <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Original
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Language
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Id
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  id
                </h5>
              </div>

            </div>
          </div>
          {words.map((word: any, key: any) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === words.length - 1
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
                  {word.text}
                </p>
              </div>

              <div className="flex items-center justify-center  p-2.5 xl:p-5">
                <p className="text-sky-600  dark:text-white">
                  {word.language}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{word.original}</p>
              </div>
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{word.id}</p>
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
