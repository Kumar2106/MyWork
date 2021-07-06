/** @format */

import React from "react";
import { Document, pdfjs, Page } from "react-pdf/dist/esm/entry.webpack";

function Resume() {
	pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	return (
		<div className="resume">
			<Document file="Res.pdf">
				<Page pageNumber={1} />
			</Document>
		</div>
	);
}

export default Resume;
