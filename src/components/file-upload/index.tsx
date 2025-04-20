import React, { DragEvent, InputHTMLAttributes, useEffect, useState } from "react";
import CloseX from "../svg/close-x";

export type FileUploaderVariant = "default" | "dropzone";

export interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: FileUploaderVariant;
  name: string;
  label?: string;
  onFilesSelected?: (files: File[]) => void;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  className?: string;
}

const FileUpload: React.FC<FileUploaderProps> = ({
  variant = "default",
  label = "",
  name,
  files,
  setFiles,
  onFilesSelected,
  className,
  ...rest
}) => {
  const [fileURLs, setFileURLs] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileOnChange = (e: FileList | null) => {
    if (!e) return;
    // make file array from e.target.files
    const fileArray = Array.from(e).map((file) => file);

    if (onFilesSelected) onFilesSelected(fileArray);
    if (e && e.length > 0) setFiles(fileArray);
  };

  const generateFileURLs = (files: File[] | null) => {
    // check if files is null
    if (!files) return;
    const urls = files.map((file) => URL.createObjectURL(file));
    setFileURLs(urls);
  };

  const deletePhoto = (index: number) => {
    if (!files) return;
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  // Handlers for dropzone variant
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      // handleFiles(e.dataTransfer.files);
      handleFileOnChange(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  useEffect(() => {
    generateFileURLs(files);
  }, [files]);

  return (
    <>
      {variant === "default" ? (
        <DefaultFileUpload
          className={className}
          files={files}
          handleFileOnChange={handleFileOnChange}
          name={name}
          {...rest}
        />
      ) : (
        <DropZoneFileUpload
          className={className}
          files={files}
          handleFileOnChange={handleFileOnChange}
          handleDragEnter={handleDragEnter}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDrop={handleDrop}
          isDragging={isDragging}
          name={name}
          label={label}
          {...rest}
        />
      )}

      <div className="my-4 flex flex-wrap gap-4">
        {fileURLs.map((url, index) => (
          <div key={index} className="image-fit zoom-in relative hidden h-16 w-16 cursor-pointer">
            <img className="h-16 w-16 rounded-md" alt="" src={url} />
            <button
              title="Remove this image?"
              className="bg-danger btn absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-error p-0 text-white"
              onClick={() => deletePhoto(index)}
            >
              <CloseX className="text-2xl text-light" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

type T_defaultFileUpload = {
  handleFileOnChange: (e: FileList | null) => void;
  files: File[];
  className?: string;
  name: string;
};

function DefaultFileUpload({
  className,
  files,
  handleFileOnChange,
  name,
  ...rest
}: T_defaultFileUpload) {
  return (
    <div className="flex flex-col">
      <input
        type="file"
        value={""}
        name={name}
        id={name}
        onChange={(e) => handleFileOnChange(e.target.files)}
        className={`block w-full rounded-md border-2 border-dark/20 bg-white px-3 py-2 text-base text-textcolor -outline-offset-1 outline-primary ring-primary/25 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-2 sm:text-sm/6 ${className}`}
        {...rest}
      />

      {files && files.length > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          {files.length} file{files.length > 1 ? "s" : ""} selected.
        </div>
      )}
    </div>
  );
}

type T_dropZoneFileUpload = {
  handleFileOnChange: (e: FileList | null) => void;
  handleDragEnter: (e: DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: DragEvent<HTMLDivElement>) => void;
  handleDragLeave: (e: DragEvent<HTMLDivElement>) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  isDragging: boolean;
  className?: string;
  label?: string;
  files: File[];
  name: string;
};

function DropZoneFileUpload({
  files,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileOnChange,
  isDragging,
  label,
  className,
  name,
  ...rest
}: T_dropZoneFileUpload) {
  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`!relative rounded-md border-2 border-dashed border-textcolor/30 p-8 text-center transition-all duration-200 ${
        isDragging && "!border-primary bg-primary/5"
      }`}
    >
      <input
        type="file"
        value={""}
        name={name}
        id={name}
        className={`!absolute !inset-0 cursor-pointer !opacity-0 ${className}`}
        onChange={(e) => handleFileOnChange(e.target.files)}
        {...rest}
      />
      <label htmlFor="">
        <p className="mb-4 text-sm text-textcolor/70">{label}</p>
        <p className="text-sm text-gray-500">
          Drag &amp; drop files here, or click to select files.
        </p>
        {files && files.length > 0 && (
          <div className="mt-2 text-sm text-gray-600">
            {files.length} file{files.length > 1 ? "s" : ""} selected.
          </div>
        )}
      </label>
    </div>
  );
}

export default FileUpload;
