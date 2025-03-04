// export interface FileUploadDto {
//     id: 0;
//     filename: string;
//     path: string;
//     mimetype: string;
//     size: number;
//     createdAt: string;
//     updatedAt: string;
//   }


  export type FileUploadControllerUploadFilesBody = {
    files?: Blob[];
};

export interface FileUploadDto {
    createdAt: string;
    filename: string;
    id: number;
    mimetype: string;
    path: string;
    size: number;
    updatedAt: string;
}