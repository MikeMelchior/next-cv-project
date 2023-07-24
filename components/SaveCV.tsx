' use client'

import React from "react";
import InputContainer from "./InputWidget";
import downloadIcon from "../public/download-icon.png";
import Image from "next/image";
import Button from "./Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";



type Props = {};

const SaveCV = (props: Props) => {

	function dlPDF(): void {
		let doc: HTMLElement | null = document.querySelector('.document')
		html2canvas(document.querySelector('.document')!).then(canvas => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF('portrait', 'pt');
			pdf.addImage(imgData, 'PNG', 0, -20, 600, 860);
			pdf.save('cv.pdf')
		})
	}

	return (
		<InputContainer openState={false}>
			<div className="flex w-full items-center justify-between p-[24px]">
				<h2 className="text-2xl">Save CV:</h2>
				<Button
				onClick={dlPDF}
					classes="flex-grow-0"
				>
					<Image src={downloadIcon} alt="" className="w-[30px]" />
					<p>DOWNLOAD</p>
				</Button>
			</div>
		</InputContainer>
	);
};

export default SaveCV;
