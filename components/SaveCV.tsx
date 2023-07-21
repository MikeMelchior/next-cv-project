import InputContainer from "./InputContainer";
import downloadIcon from "../public/download-icon.png";
import Image from "next/image";

type Props = {};

const SaveCV = (props: Props) => {
	return (
		<InputContainer openState={false}>
			<div className="flex w-full items-center p-[24px]">
				<h2 className="text-2xl">Save your CV:</h2>
				<button className="flex items-center gap-4 ml-auto py-[8px] px-[18px] bg-teal-400 border-2 border-teal-400 text-slate-900 rounded-full hover:border-slate-500">
					<Image src={downloadIcon} alt="" className="w-[30px]" />
					DOWNLOAD
				</button>
			</div>
		</InputContainer>
	);
};

export default SaveCV;
