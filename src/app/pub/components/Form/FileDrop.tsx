"use client";

import React from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import IcFile from "@/assets/icons/ico_file.svg";

export interface FileProps {
  className: string;
}

export default function FileDrop({ className, ...props }: FileProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <div
      key={file.path}
      className="file-thumb"
      data-tooltip-id="tooltip"
      data-tooltip-content={file.name}
      data-tooltip-place="bottom"
    >
      {file.type.startsWith("image") ? (
        <Image
          src="/images/test/img_thumb.png"
          alt=""
          width={292}
          height={172}
        />
      ) : (
        <IcFile className="self-center" />
      )}
      <button type="button" className="file-thumb-btn"></button>
    </div>
  ));

  return (
    <div className={className ? className : ""}>
      <div {...getRootProps({ className: "file-drop" })}>
        <input {...getInputProps()} />
        <p>이곳에 이미지를 넣으시면 등록됩니다.</p>
      </div>
      {files.length > 0 && (
        <div className="flex items-center gap-[0.8125rem] pb-3 mt-3">
          {files}
        </div>
      )}
    </div>
  );
}
