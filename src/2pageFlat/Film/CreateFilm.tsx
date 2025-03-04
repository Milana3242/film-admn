import * as React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import { Button } from '../../6shared/ui/button';
import { TextArea } from '../../6shared/ui/textarea';
import { Input } from '../../6shared/ui/input';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { createFilms, fetchFilms, patchFilms } from '../../5entities/films';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  UploadFileWidget } from '../../3witgets/UploadFile/UploadFileWidget';

// import { UploadFile } from '../../3witgets/UploadFile/upload-file';

export interface IAppProps {}

export function CreateFilm({}: IAppProps) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  function onSubmit(item: any) {
    dispatch(createFilms(item));
    dispatch(fetchFilms());
    // setTimeout(() => navigate('/films'),1000);
    navigate('/films');
  }



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
                      Название фильма
                    </label>
                    <Input
                      type="text"
                      placeholder="Напишите название фильма"
                      variant="secondary"
                      register={register}
                      name={'title'}
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Сезон
                  </label>
                  <Input
                    type="number"
                    placeholder="Напишите сезон"
                    variant="secondary"
                    register={register}
                    name={'season'}
                  ></Input>
                </div>

                <div className="mb-4.5">
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
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Описание
                  </label>

                  <TextArea
                    rows={6}
                    placeholder="Напишите описание фильма"
                    register={register}
                    name={'description'}
                  ></TextArea>
                </div>

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
                  field="image"
                  setValue={setValue}
                  errors={errors}
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
