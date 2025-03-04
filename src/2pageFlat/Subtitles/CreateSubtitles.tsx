import * as React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Input } from '../../6shared/ui/input';
import { TextArea } from '../../6shared/ui/textarea';
import { Button } from '../../6shared/ui/button';
import { fetchFilms } from '../../5entities/films';
import { useSelector } from 'react-redux';
import { selectFilmsData } from '../../5entities/films/model/selector/films';
import { UploadFileWidget } from '../../3witgets/UploadFile/UploadFileWidget';
import { createSubtitles, fetchSubtitles } from '../../5entities/subtitles';

export interface IAppProps {}

export function CreateSubtitles(props: IAppProps) {
  const dispatch = useAppDispatch();
  const { films } = useSelector(selectFilmsData);

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch
  } = useForm();

  console.log(watch('filmId'))
  function onSubmit(item: any) {
    dispatch(createSubtitles(item));
    dispatch(fetchSubtitles());
    // setTimeout(() => navigate('/films'),1000);
    navigate('/subtitles');
  }

  function getFilmId(e: any) {
    console.log(e.target.value);
  }

  React.useEffect(() => {
    dispatch(fetchFilms());
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

                  {/* <Input
                    type="number"
                    placeholder="Напишите сезон"
                    variant="secondary"
                    register={register}
                    name={'season'}
                  ></Input> */}
                </div>

                {/* <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Эпизод
                  </label>
                  <Input
                    type="number"
                    placeholder="Напишите эпизод"
                    variant="secondary"
                    register={register}
                    name={'episode'}
                  ></Input>
                </div> */}

                {/* <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Описание
                  </label>

                  <TextArea
                    rows={6}
                    placeholder="Напишите описание фильма"
                    register={register}
                    name={'description'}
                  ></TextArea>
                </div> */}

                {/* <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Фотография
                  </label>

                  <Input
                    placeholder="Добавьте фото фильма"
                    register={register}
                    name={'description'}
                    type="file"
                    variant="secondary"
                  ></Input>
                </div> */}

                {/* <div className="col-span-5 mb-5  mx-auto xl:col-span-2">
                                    <UploadFile
                                        label="Фото"
                                        labelNote="Желаемое разрешение 500x500 и не более 100кб"
                                        field="images"
                                    />
                                </div> */}

                {/* <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button> */}

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
