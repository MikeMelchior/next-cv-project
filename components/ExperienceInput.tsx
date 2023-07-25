"use client";
import React, {
	Dispatch,
	FormEvent,
	SetStateAction,
	useRef,
	useState,
} from "react";
import InputWidget from "./InputWidget";
import suitcase from "../public/suitcase.png";
import chevron from "../public/chevron.png";
import editButton from "../public/edit.png";
import Image from "next/image";
import InputWrapper from "./InputWrapper";
import Button from "./Button";
import DeleteButton from "./DeleteButton";
import { ExperienceInputs } from "@/app/page";
import { v4 as uuid } from "uuid";

type Props = {
	experienceInfo: ExperienceInputs[];
	setExperienceInfo:
		| Dispatch<SetStateAction<ExperienceInputs[]>>
		| ((prevState: ExperienceInputs[]) => ExperienceInputs[]);
};

const ExperienceInput = ({ experienceInfo, setExperienceInfo }: Props) => {
	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState<string>("");

	const jobRef = useRef<HTMLInputElement>(null);
	const companyRef = useRef<HTMLInputElement>(null);
	const startRef = useRef<HTMLInputElement>(null);
	const endRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);

	function handleSubmit(e: FormEvent): void {
		e.preventDefault();
		let prev = experienceInfo;

		if (editID.length > 0) {
			prev = prev.filter((exp) => exp.id !== editID);
			setEditID("");
			setIsEditing(false);
		}

		setExperienceInfo([
			...prev,
			{
				jobTitle: jobRef.current!.value,
				company: companyRef.current!.value,
				startDate: startRef.current!.value,
				endDate:
					endRef.current!.value !== ""
						? endRef.current!.value
						: "Current",
				description: descriptionRef.current!.value,
				id: uuid(),
			},
		]);
		jobRef.current!.value = "";
		companyRef.current!.value = "";
		startRef.current!.value = "";
		endRef.current!.value = "";
		descriptionRef.current!.value = "";
	}

	function handleDelete(): void {
		let temp = experienceInfo.filter((exp) => exp.id !== editID);
		setExperienceInfo(temp);
		setEditID("");
		setIsEditing(false);

		jobRef.current!.value = "";
		companyRef.current!.value = "";
		startRef.current!.value = "";
		endRef.current!.value = "";
		descriptionRef.current!.value = "";
	}

	function resetInputs(): void {
		jobRef.current!.value = "";
		companyRef.current!.value = "";
		startRef.current!.value = "";
		endRef.current!.value = "";
		descriptionRef.current!.value = "";
	}

	let inputStyles = "bg-slate-200 p-2 rounded-xl focus:outline-none";

	return (
		<InputWidget openState={open}>
			<div
				className={`flex items-center w-full p-[24px] ${
					open ? "border-b-2" : ""
				}`}
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Image
					src={suitcase}
					alt=""
					className="w-[30px] h-[30px] auto mr-4"
				/>
				<h2 className="text-2xl">Experience</h2>
				<Image
					src={chevron}
					alt=""
					className={`w-[30px] h-[30px] ml-auto ${
						open ? "rotate-180" : "rotate-0"
					}`}
				/>
			</div>
			<form
				onSubmit={handleSubmit}
				className={`${
					open 
					? "p-6 flex flex-col gap-6 border-t-2" 
					: "invisible h-0 p-0"}
				`}
			>
				<InputWrapper HTMLfor="job" labelText="Job Title">
					<input
						ref={jobRef}
						type="text"
						id="job"
						name="job"
						placeholder="Enter Job Title"
						className={inputStyles}
						required
					/>
				</InputWrapper>
				<InputWrapper HTMLfor="company" labelText="Company">
					<input
						ref={companyRef}
						type="text"
						id="company"
						name="company"
						placeholder="Company Name"
						className={inputStyles}
						required
					/>
				</InputWrapper>
				<div className="flex justify-between flex-wrap gap-6">
					<InputWrapper
						HTMLfor="startDate"
						labelText="Start Date"
						classes="md:w-2/5"
					>
						<input
							ref={startRef}
							type="date"
							id="start"
							name="start"
							className={inputStyles}
							required
						/>
					</InputWrapper>
					<InputWrapper
						HTMLfor="endDate"
						labelText="End Date"
						classes="md:w-2/5"
					>
						<input
							ref={endRef}
							type="date"
							id="endDate"
							name="endDate"
							className={inputStyles}
						/>
					</InputWrapper>
				</div>
				<InputWrapper
					HTMLfor="description"
					labelText="Description"
					classes="w-full"
				>
					<textarea
						ref={descriptionRef}
						name="description"
						id="description"
						placeholder="Description of job tasks"
						className={`${inputStyles} resize-none flex-1`}
						required
					/>
				</InputWrapper>
				<div className="flex flex-wrap gap-2">
					<Button onClick={resetInputs}>Reset</Button>
					{isEditing && (
						<DeleteButton onClick={handleDelete}>
							Delete
						</DeleteButton>
					)}
					<Button type="submit">Submit</Button>
				</div>
			</form>
			{experienceInfo.length > 0 && (
				<div className="border-t-2">
					{experienceInfo.map((exp) => {
						return (
							<div
								key={exp.id}
								className="flex justify-between p-6 text-sm"
							>
								<div>
									<p className="font-bold">{exp.jobTitle}</p>
									<p>{exp.company}</p>
									<p>{`${exp.startDate} - ${exp.endDate}`}</p>
								</div>
								<div className="self-center">
									<button
										className="border-2 flex gap-2 items-center rounded-xl py-[6px] px-[12px]"
										onClick={() => {
											setIsEditing(true);
											setEditID(exp.id);
											setOpen(true);
											jobRef.current!.value =
												exp.jobTitle;
											companyRef.current!.value =
												exp.company;
											startRef.current!.value =
												exp.startDate;
											endRef.current!.value = exp.endDate;
											descriptionRef.current!.value =
												exp.description;
										}}
									>
										<Image
											src={editButton}
											alt=""
											className="w-[24px]"
										/>
										Edit
									</button>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</InputWidget>
	);
};

export default ExperienceInput;
