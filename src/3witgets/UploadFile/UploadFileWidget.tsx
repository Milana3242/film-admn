import { useEffect, useState } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import { FileUploadDto } from "../../6shared/types/types";
import UploadContainer from "../../4features/ui/UploadFile";

interface UploadFileWidgetProps {
    initialFiles?: string;
    errors: FieldErrors<any>;
    setValue: UseFormSetValue<any>;
    field: string;
    filePropertySave?:string
    label: string;
    labelNote?: string;
    options?: {
        inputProps?: {
            multiple?: boolean;
            accept?: string;
        };
    };
}

export const UploadFileWidget = ({
    initialFiles,
    setValue,
    field,
    filePropertySave='path',
    label = "Фото",
    labelNote,
    options,
    errors = {},
}: UploadFileWidgetProps) => {
    const [filePath, setFilePath] = useState<string>(initialFiles || "");

    useEffect(() => {
        if (initialFiles) {
            setFilePath(initialFiles);
        }
    }, [initialFiles]);

    const handleUpload = (files: FileUploadDto[]) => {
        setFilePath(files[0].path);
        setValue(field, files[0][filePropertySave]);
    };

    const handleRemove = () => {
        setFilePath("");
        setValue(field, "");

    };


    const files = filePath ? ([{ path: filePath }] as FileUploadDto[]) : [];
    console.log(filePath)
    console.log(files,initialFiles)

    return (
        <div>
            <UploadContainer
                options={options}
                label={label}
                labelNote={labelNote}
                files={files}
                onSuccess={handleUpload}
                onRemoveFile={handleRemove}
            />
            {/* {errors[field] && errors[field].type === "required" && (
                <p className="text-red-400 mt-1">Обязательное поле</p>
            )} */}
        </div>
    );
};
