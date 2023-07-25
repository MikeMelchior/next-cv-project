import { Dispatch, SetStateAction } from "react";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import HeaderInput from "./HeaderInput";
import SaveCV from "./SaveCV";
import { EducationInputs, ExperienceInputs, HeaderInputs } from "@/app/page";

type Props = {
	setGeneralInfo: Dispatch<SetStateAction<HeaderInputs>> | ((prevState: HeaderInputs) => HeaderInputs)
	educationInfo: EducationInputs[]
	setEducationInfo: Dispatch<SetStateAction<EducationInputs[]>> | ((prevState: EducationInputs[]) => EducationInputs[])
	experienceInfo: ExperienceInputs[]
	setExperienceInfo: Dispatch<SetStateAction<ExperienceInputs[]>> | ((prevState: ExperienceInputs[]) => ExperienceInputs[])
};

const Inputs = ( { setGeneralInfo, educationInfo, setEducationInfo, experienceInfo, setExperienceInfo }: Props) => {
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
			<ExperienceInput 
				experienceInfo={experienceInfo}
				setExperienceInfo={setExperienceInfo}
			/>
		</section>
	);
};

export default Inputs;
