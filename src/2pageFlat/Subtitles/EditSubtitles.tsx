import * as React from 'react';
import { UploadFileWidget } from '../../3witgets/UploadFile/UploadFileWidget';
import { Button } from '../../6shared/ui/button';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectFilmsData } from '../../5entities/films/model/selector/films';
import { useForm } from 'react-hook-form';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { fetchSubtitles, fetchSubtitlesById, patchSubtitles } from '../../5entities/subtitles';

export interface IAppProps {
}

export function App (props: IAppProps) {


    const dispatch = useAppDispatch();
    const { films } = useSelector(selectFilmsData);
    const {id}=useParams()

    const navigate = useNavigate();
    const {
      register,
      formState: { errors },
      handleSubmit,
      setValue,
      reset
    } = useForm();

    async function getEditSubtitles() {
        const data = await dispatch(fetchSubtitlesById(Number(id)));
        if (data.payload && typeof data.payload !== 'string') {
          const edit = {
            language: data.payload.language,
            filmId: data.payload.filmId,
            fileId: data.payload.fileId,
          };
          reset(edit);
        }
      }

    function onSubmit(item: any) {
      dispatch(patchSubtitles({id,item}));
      dispatch(fetchSubtitles());
      // setTimeout(() => navigate('/films'),1000);
      navigate('/subtitles');
    }



    React.useEffect(() => {
        getEditSubtitles()
      dispatch(fetchSubtitles());
    }, []);

  return (
    <>
      <Breadcrumb pageName="Form Layout" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full ">
                    <label className="mb-2.5 block text-black dark:text-white">
                       Язык субтитров
                      <br></br>
                      <select
                        className="w-full p-4 rounded border-[1.5px] border-stroke mt-3 bg-slate-200"
                        {...register('language')}
                      >
                        <option value="Русский">Русский</option>
                        <option value="Английский">Английский</option>
                      </select>
                    </label>

                    {/* <Input
                      type="text"
                      placeholder="Напишите название фильма"
                      variant="secondary"
                      register={register}
                      name={'title'}
                    /> */}
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Выберите фильм
                    <br></br>
                    <select
                      className="w-full p-4 rounded border-[1.5px] border-stroke mt-3 bg-slate-200"
                      {...register('filmId')}
                    >
                      {films.map((item) => {
                        return <option value={item.id}>{item.title}</option>;
                      })}
                    </select>
                  </label>


                </div>







                <UploadFileWidget
                  label="Превью"
                  labelNote="Желаемое разрешение 500x500 и не более 100кб"
                  field="fileId"
                  setValue={setValue}
                  errors={errors}
                  filePropertySave={'id'}
                  options={{inputProps:{accept:'*/*'}}}
                />

                <Button variant="secondary">Отправить форму</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
