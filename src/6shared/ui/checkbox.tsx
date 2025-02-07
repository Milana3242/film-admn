import * as React from 'react';

export interface IButtonThemeProps {
  onChange: () => void;
}

export function Checkbox({ onChange }: IButtonThemeProps) {
  return (
    <>
      <input
        type="checkbox"
        onChange={onChange}
        className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
      />
    </>
  );
}
