import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IButtonAddProps {
  puth?: string;
  children: React.ReactNode;
  variant?: string;
}

const buttonStyles: Record<string, string> = {
  primary:
    'w-[150px] mb-5 flex justify-center rounded bg-gray-500 p-3 font-medium text-gray hover:bg-opacity-90',
  secondary:
    'flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90',
  third:
    'w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90',
};

export function Button({
  puth,
  children,
  variant = 'primary',
}: IButtonAddProps) {
  return puth ? (
    <Link to={puth} className={buttonStyles[variant]}>
      {children}
    </Link>
  ) : (
    <button className={buttonStyles[variant]}>{children}</button>
  );
}
