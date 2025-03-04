import axios from 'axios';
import { FileUploadControllerUploadFilesBody, FileUploadDto } from '../../6shared/types/types';
import { useState } from 'react';

export function useUploadFileForm() {
  const [result, setResult] = useState<FileUploadDto[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onUpload = async (body: FileUploadControllerUploadFilesBody):Promise<FileUploadDto[]> => {
    setIsLoading(true);

      const formData = new FormData();
      if (body.files !== undefined) {
        body.files.forEach((value:any) => formData.append("files", value));
      }



      const {data}  = await axios.post<FileUploadDto[]>(
        'https://d5caef6911b3.vps.myjino.ru/upload',
        formData
      );

      console.log('sss');
      setIsLoading(false);

      setResult(data);

      if(typeof data !== 'object'){
        throw new Error('error')
      }


      return data

  };

  return {
    onUpload,
    isPending: isLoading,
    data: result,
  };
}
