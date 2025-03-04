import { useEffect, useState } from 'react';
import { FileUploadDto } from '../../6shared/types/types';
import { useUploadFileForm } from '../model/upload-file';
import { getFileType } from '../../6shared/libs/getFileType';
import { Image } from '../../6shared/ui/img';

interface UploadContainerProps {
  onSuccess?: (files: FileUploadDto[]) => void;
  onStartUpload?: () => void;
  onRemoveFile?: (file: FileUploadDto) => void;
  files?: FileUploadDto[];
  label: string;
  labelNote?: string;
  options?: {
    inputProps?: {
      multiple?: boolean;
      accept?: string;
    };
    containerProps?: Record<string, any>;
  };
}

export const UploadContainer = ({
  onSuccess,
  onStartUpload,
  files,
  options,
  onRemoveFile,
  label = 'Фото',
  labelNote = '',
}: UploadContainerProps) => {
  const [filesState, setFilesState] = useState<FileUploadDto[]>(files || []);

  const { onUpload, isPending } = useUploadFileForm();

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.files;
    // console.log(data,Array.from(data)[0])

    if (data) {
      onStartUpload?.();
      try {
        const result = await onUpload({ files: Array.from(data) });
        setFilesState(result);
        onSuccess?.(result);
        console.log(result);
        event.target.value = '';
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onRemove = async (file: FileUploadDto) => {
    onRemoveFile?.(file);
  };

  useEffect(() => {
    setFilesState(files || []);
  }, [files]);

  return (
    <div className="mb-5">
      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor="emailAddress"
      >
        {label}
        <br />
        {labelNote && (
          <span className="text-xs text-gray-500">({labelNote})</span>
        )}
      </label>
      <div
        id="FileUpload"
        className="relative block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
      >
        <input
          disabled={isPending}
          multiple={options?.inputProps?.multiple}
          onChange={handleUpload}
          type="file"
          accept={options?.inputProps?.accept || 'image/*'}
          className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
        />
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                fill="#3C50E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                fill="#3C50E0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                fill="#3C50E0"
              />
            </svg>
          </span>
          <p>
            {isPending ? (
              <span className="text-primary">Загружается...</span>
            ) : (
              <>
                <span className="text-primary">Нажмите для загрузки</span> или
                перетащите файл
              </>
            )}
          </p>
          {/*  <p className="mt-1.5">SVG, PNG, JPG</p> */}
          {/* <p>(максимум 800 X 800px)</p> */}
        </div>
      </div>
      {/* {true && (
                <p className="text-red-400">Обязательное поле</p>
            )} */}
      <div className="flex flex-wrap gap-4 align-top mt-4">
        {filesState.map((file) => (
          <div
            className="flex flex-col items-center justify-center space-y-3 max-w-40"
            key={file.id}
          >
            {(() => {
              const fileType = getFileType(file.path);
              switch (fileType) {
                case 'image':
                  return (
                    <Image
                      className="w-[60px]"
                      path={file.path}
                      filename={file.filename}
                    ></Image>
                  );

                default:
                  return (
                    <a
                      href={`${import.meta.env.VITE_IMAGE_URL}${file.path}`}
                      target="_blank"
                      className="flex items-center"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="ml-2">{file.filename}</span>
                    </a>
                  );
              }
            })()}
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => onRemove(file)}
            >
              {' '}
              удалить
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadContainer;
