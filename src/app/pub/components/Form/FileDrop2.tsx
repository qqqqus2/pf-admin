"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import IcImage from "@/assets/icons/ico_image.svg";

export interface FileProps {
    className: string;
    files: File[];
    onFileChange: (files: File[]) => void;
}

export default function FileDrop({ className = "", files = [], onFileChange, ...props }: FileProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            onFileChange([...files, ...acceptedFiles]);
        },
        [files, onFileChange]
    );

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const removeFile = (filename: string) => {
        onFileChange(files.filter((file) => file.name !== filename));
    };

    const fileElements = files.map((file) => (
        <div
            key={file.name}
            className="file-thumb "
            data-tooltip-id="tooltip"
            data-tooltip-content={file.name}
            data-tooltip-place="bottom"
        >
            {file.type.startsWith("image") ? (
                <Image src="/images/test/img_thumb.png" alt="" width={292} height={172} />
            ) : (
                <IcImage className="self-center" />
            )}
            <button type="button" className="file-thumb-btn" onClick={() => removeFile(file.name)}></button>
        </div>
    ));

    return (
        <div className={className || "inline-flex  items-start gap-[0.8125rem]"}>
            {files.length > 0 && (
                <div className="inline-flex flex-wrap items-center gap-[0.8125rem]">{fileElements}</div>
            )}
            <div {...getRootProps({ className: "file-drop thumb inline-flex" })}>
                <input {...getInputProps()} />
            </div>
        </div>
    );
}
