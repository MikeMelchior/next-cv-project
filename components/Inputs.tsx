import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput";
import HeaderInput from "./HeaderInput";
import SaveCV from "./SaveCV";

type Props = {};

const Inputs = (props: Props) => {
	return (
		<section className="min-h-[600px] w-full  flex flex-col gap-[24px]">
			<SaveCV />
			<HeaderInput />
			<EducationInput />
			<ExperienceInput />
		</section>
	);
};

export default Inputs;
