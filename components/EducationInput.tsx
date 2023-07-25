"use client";
import React, {
	Dispatch,
	FormEvent,
	SetStateAction,
	useRef,
	useState,
} from "react";
import InputWidget from "./InputWidget";
import chevron from "../public/chevron.png";
import gradCap from "../public/grad-cap.png";
import editButton from "../public/edit.png";
import Image from "next/image";
import InputWrapper from "./InputWrapper";
import Button from "./Button";
import { EducationInputs } from "@/app/page";
import { v4 as uuid } from "uuid";
import DeleteButton from "./DeleteButton";

type Props = {
	educationInfo: EducationInputs[];
	setEducationInfo:
		| Dispatch<SetStateAction<EducationInputs[]>>
		| ((prevState: EducationInputs[]) => EducationInputs[]);
};

const EducationInput = ({ educationInfo, setEducationInfo }: Props) => {
	const [open, setOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState<string>("");

	const degreeRef = useRef<HTMLInputElement>(null);
	const schoolRef = useRef<HTMLInputElement>(null);
	const cityRef = useRef<HTMLInputElement>(null);
	const countryRef = useRef<HTMLInputElement>(null);
	const startRef = useRef<HTMLInputElement>(null);
	const endRef = useRef<HTMLInputElement>(null);

	function handleSubmit(e: FormEvent): void {
		e.preventDefault();
		let prev = educationInfo;

		if (editID.length > 0) {
			prev = educationInfo.filter((edu) => edu.id !== editID);
			setEditID("");
			setIsEditing(false);
		}

		setEducationInfo([
			...prev,
			{
				degree: degreeRef.current!.value,
				school: schoolRef.current!.value,
				city: cityRef.current!.value,
				country: countryRef.current!.value,
				startDate: startRef.current!.value,
				endDate:
					endRef.current!.value !== ""
						? endRef.current!.value
						: "Current",
				id: uuid(),
			},
		]);
		degreeRef.current!.value = "";
		schoolRef.current!.value = "";
		cityRef.current!.value = "";
		startRef.current!.value = "";
		endRef.current!.value = "";
		countryRef.current!.value = "";

		setOpen(false);
	}

	function handleDelete(): void {
		let temp = educationInfo.filter((edu) => edu.id !== editID);
		setEducationInfo(temp);
		setIsEditing(false);
		setOpen(false);

		degreeRef.current!.value = "";
		schoolRef.current!.value = "";
		cityRef.current!.value = "";
		startRef.current!.value = "";
		endRef.current!.value = "";
		countryRef.current!.value = "";
	}

	function resetInputs(): void {
		degreeRef.current!.value = "";
		schoolRef.current!.value = "";
		cityRef.current!.value = "";
		startRef.current!.value = "";
		endRef.current!.value = "";
		countryRef.current!.value = "";
	}

	let inputStyles = "bg-slate-200 p-2 rounded-xl focus:outline-none";

	return (
		<InputWidget openState={open}>
			<div
				className="flex items-center w-full p-[24px]"
				onClick={() => {
					setOpen(!open);
				}}
			>
				<Image
					src={gradCap}
					alt=""
					className="w-[30px] h-[30px] auto mr-4"
				/>
				<h2 className="text-2xl">Education</h2>
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
				className={`p-6 flex flex-col gap-6  ${
					open ? "border-t-2" : "invisible h-0 p-0"
				}`}
			>
				<InputWrapper HTMLfor="degree" labelText="Degree">
					<input
						ref={degreeRef}
						id="degree"
						name="degree"
						placeholder="Enter Degree/Field of Study"
						className={inputStyles}
						required
					/>
				</InputWrapper>
				<InputWrapper HTMLfor="school" labelText="School">
					<input
						ref={schoolRef}
						id="school"
						name="school"
						placeholder="Institution Name"
						className={inputStyles}
						required
					/>
				</InputWrapper>
				<InputWrapper HTMLfor="city" labelText="City">
					<input
						ref={cityRef}
						id="city"
						name="city"
						placeholder="Enter City"
						className={inputStyles}
						required
					/>
				</InputWrapper>
				<InputWrapper HTMLfor="country" labelText="Country">
					<input
						ref={countryRef}
						name="country"
						id="country"
						placeholder="Enter Country"
						className={inputStyles}
						required
					/>
				</InputWrapper>
				<div className="flex justify-between flex-wrap gap-6">
					<InputWrapper HTMLfor="startDate" labelText="Start Date" classes="md:w-2/5">
						<input
							ref={startRef}
							type="date"
							id="start"
							name="start"
							className={inputStyles}
							required
						/>
					</InputWrapper>
					<InputWrapper HTMLfor="endDate" labelText="End Date" classes="md:w-2/5">
						<input
							ref={endRef}
							type="date"
							id="endDate"
							name="endDate"
							className={inputStyles}
						/>
					</InputWrapper>
				</div>
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
			{educationInfo.length > 0 && (
				<div className="border-t-2">
					{educationInfo.map((edu) => {
						return (
							<div
								key={edu.id}
								className="flex justify-between p-6 text-sm"
							>
								<div>
									<p className="font-bold">{edu.degree}</p>
									<p>{edu.school}</p>
									<p>{`${edu.city}, ${edu.country}`}</p>
									<p>{`${edu.startDate} - ${edu.endDate}`}</p>
								</div>
								<div className="self-center">
									<button
										className="border-2 flex gap-2 items-center rounded-xl py-[6px] px-[12px]"
										onClick={() => {
											setIsEditing(true);
											setEditID(edu.id);
											setOpen(true);
											degreeRef.current!.value =
												edu.degree;
											schoolRef.current!.value =
												edu.school;
											cityRef.current!.value = edu.city;
											countryRef.current!.value =
												edu.country;
											startRef.current!.value =
												edu.startDate;
											endRef.current!.value = edu.endDate;
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

export default EducationInput;
