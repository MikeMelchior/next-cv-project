import { Dispatch, SetStateAction } from "react";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import HeaderInput from "./HeaderInput";
import SaveCV from "./SaveCV";
import { HeaderInputs } from "@/app/page";

type Props = {
	setGeneralInfo: Dispatch<SetStateAction<HeaderInputs>> | ((prevState: HeaderInputs) => HeaderInputs)
};

const Inputs = ( { setGeneralInfo }: Props) => {
	return (
		<section className="min-h-[fit-content] max-w-[600px] w-full mx-auto flex flex-col gap-[24px] lg:col-start-2 lg:row-start-1 lg:row-end-3">
			<SaveCV />
			<HeaderInput 
				setGeneralInfo={setGeneralInfo}
			/>
			<EducationInput />
			<ExperienceInput />
		</section>
	);
};

export default Inputs;
