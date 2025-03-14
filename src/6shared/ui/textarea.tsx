import * as React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Film } from '../../5entities/films';

export interface IAppProps {
    rows:number,
    placeholder:string,
    register?:UseFormRegister<any>
    name?:string


}

export function TextArea({rows,placeholder,register,name}: IAppProps) {
  return (
    <>
      <textarea
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        {...register&&name?register(name):null}
      ></textarea>
    </>
  );
}
