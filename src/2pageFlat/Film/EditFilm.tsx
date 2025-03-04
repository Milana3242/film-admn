import * as React from 'react';
import { Button } from '../../6shared/ui/button';
import { Input } from '../../6shared/ui/input';
import { Loader } from '../../6shared/ui/loader';
import { TextArea } from '../../6shared/ui/textarea';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import { Film, fetchFilmById, fetchFilms, patchFilms } from '../../5entities/films';
import { useNavigate, useParams } from 'react-router-dom';

export interface IEditFilmProps {}

export function EditFilm({}: IEditFilmProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log('id', typeof id);
  //   console.log('editFilm', editFilm);
  //   let defaultValues = editFilm;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit(item: any) {
    console.log(item);
    dispatch(patchFilms({ id, item }));
    dispatch(fetchFilms());
    navigate('/films');
  }

  async function getEditFilm() {
    const data = await dispatch(fetchFilmById(Number(id)));
    if (data.payload && typeof data.payload !== 'string') {
      const edit = {
        title: data.payload.title,
        description: data.payload.description,
        season: data.payload.season,
        episode: data.payload.episode,
      };
      reset(edit);
    }
    setIsLoading(true);
  }

  React.useEffect(() => {
    console.log('eded', dispatch(fetchFilmById(Number(id))));
    getEditFilm();
  }, []);

  if (!isLoading) return <Loader />;

  return (
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
                    name={'title'}
                    register={register}
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



              <Button variant="secondary">Отправить форму</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
