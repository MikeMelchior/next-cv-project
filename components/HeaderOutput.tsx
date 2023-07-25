import { HeaderInputs } from "@/app/page";
import React from "react";

type Props = {
	generalInfo: HeaderInputs;
};

const HeaderOutput = ({ generalInfo }: Props) => {
	return (
		<div className="w-full flex flex-col gap-1 pb-6">
			<p className="text-3xl font-bold">{generalInfo.name}</p>
			<p className="text-base">{generalInfo.email}</p>
			<div className="text-sm flex gap-4 mx-auto">
				<p>{generalInfo.phone}</p>
				<p>{generalInfo.address}</p>
			</div>
		</div>
	);
};

export default HeaderOutput;
