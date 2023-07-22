import { Dispatch, SetStateAction } from "react";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import HeaderInput from "./HeaderInput";
import SaveCV from "./SaveCV";
import { EducationInputs, HeaderInputs } from "@/app/page";

type Props = {
	setGeneralInfo: Dispatch<SetStateAction<HeaderInputs>> | ((prevState: HeaderInputs) => HeaderInputs)
	educationInfo: EducationInputs[]
	setEducationInfo: Dispatch<SetStateAction<EducationInputs[]>> | ((prevState: EducationInputs[]) => EducationInputs[])
};

const Inputs = ( { setGeneralInfo, educationInfo, setEducationInfo }: Props) => {
	return (
		<section className="min-h-[fit-content] max-w-[600px] w-full mx-auto flex flex-col gap-8 lg:col-start-2 lg:row-start-1 lg:row-end-3">
			<SaveCV />
			<HeaderInput 
				setGeneralInfo={setGeneralInfo}
			/>
			<EducationInput 
				educationInfo={educationInfo}
				setEducationInfo={setEducationInfo}
			/>
			<ExperienceInput />
		</section>
	);
};

export default Inputs;
