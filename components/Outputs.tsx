import { HeaderInputs } from "@/app/page";
import React from "react";
import HeaderOutput from "./HeaderOutput";

type Props = {
	generalInfo: HeaderInputs
};

const Outputs = ( { generalInfo }: Props) => {
	return (
		<div className="h-[600px] min-h-[80vh] min-w-[300px] p-[48px] bg-slate-50 text-center rounded-lg flex flex-col">
			<HeaderOutput 
				generalInfo={generalInfo}
			/>
		</div>
	);
};

export default Outputs;
