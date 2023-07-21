import InputContainer from "./InputWidget";
import downloadIcon from "../public/download-icon.png";
import Image from "next/image";
import Button from "./Button";

type Props = {};

const SaveCV = (props: Props) => {
	return (
		<InputContainer openState={false}>
			<div className="flex w-full items-center p-[24px]">
				<h2 className="text-2xl">Save CV:</h2>
				<Button>
					<Image src={downloadIcon} alt="" className="w-[30px]" />
					<p>DOWNLOAD</p>
				</Button>
			</div>
		</InputContainer>
	);
};

export default SaveCV;
