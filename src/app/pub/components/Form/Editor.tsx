"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function FormEditor({ ...props }) {
  const [value, setValue] = useState("");
  const toolbarOptions = [
    [{ font: [] }, { header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }, { align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["code-block", "link", "image"],
  ];

  return (
    <ReactQuill
      theme="snow"
      className="form-editor"
      modules={{ toolbar: toolbarOptions }}
      value={value}
      onChange={setValue}
      {...props}
    />
  );
}
