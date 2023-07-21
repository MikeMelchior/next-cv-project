'use client'
import Inputs from "@/components/Inputs";
import Outputs from "@/components/Outputs";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export interface HeaderInputs{
	name: string
	email: string
	phone: string
	address: string
}

export interface EducationInputs{

}

export interface ExperienceInputs{
	company: string
	jobTitle: string
	startDate: string
	endDate: string
	description: string
	id: string
}

const initialHeaderState = { name: '', email: '', phone: '', address: '' }

export default function Home() {

	const [generalInfo, setGeneralInfo] = useState<HeaderInputs>(initialHeaderState)

	return (
		<main className="grid lg:grid-cols-2 xl:grid-cols-3 p-[48px] gap-[48px]">
			<Sidebar />
      		<Inputs 
				setGeneralInfo={setGeneralInfo}
			/>
      		<Outputs 
				generalInfo={generalInfo}
			/>
		</main>
	);
}
