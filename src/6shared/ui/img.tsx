import * as React from 'react';

export interface IAppProps {
    path:any,
    filename:string,
    className?:string
}

export function Image({path,filename,className}: IAppProps) {
  return (
    <>
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${path}`}
        alt={filename}
        className={className}
      />
    </>
  );
}
