"use client";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
const page = () => {
  return (
    <div className="bg-slate-600">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer theme='dark' fileUrl="/AmanSinghResume.pdf" />;
      </Worker>
    </div>
  );
};

export default page;
