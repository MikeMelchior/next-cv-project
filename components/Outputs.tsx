import { EducationInputs, ExperienceInputs, HeaderInputs } from "@/app/page";
import { Quicksand } from "next/font/google";
import React from "react";
import HeaderOutput from "./HeaderOutput";
import EducationOutput from "./EducationOutput";
import ExperienceOutput from "./ExperienceOutput";


const quicksand = Quicksand({ subsets: ['latin']})

type Props = {
	generalInfo: HeaderInputs
	educationInfo: EducationInputs[]
	experienceInfo: ExperienceInputs[]
};

const Outputs = ( { generalInfo, educationInfo, experienceInfo }: Props) => {
	return (
		<div className={`document ${quicksand.className} h-[600px] min-h-[80vh] min-w-[300px] p-[48px] bg-slate-50 text-center rounded-lg flex flex-col`}>
			<HeaderOutput 
				generalInfo={generalInfo}
			/>
			<EducationOutput 
				educationInfo={educationInfo}
			/>
			<ExperienceOutput 
				experienceInfo={experienceInfo}
			/>
		</div>
	);
};

export default Outputs;
