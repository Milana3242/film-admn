import * as React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface IInputProps {
  type:string,
  placeholder:string,
  variant?:string,
  leftSlot?:React.ReactNode,
  register?:UseFormRegister<FieldValues>,
  name?:string
}

const variantClasses:Record<string,string>={
primary:"w-full bg-transparent pl-5 pr-4 text-black focus:outline-none dark:text-white xl:w-125",
secondary:"w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
}

export  function Input({type,placeholder,variant='primary',leftSlot,register,name}: IInputProps) {



  return (
    <>
    {leftSlot}
      <input

        type={type}
        placeholder={placeholder}
        className={variantClasses[variant]}
        {...register&&name?register(name):null}
      />
    </>
  );
}
