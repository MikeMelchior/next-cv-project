import Image from "next/image";
import paperPlane from "../public/paper-plane.png";
import githubIcon from "../public/github.png";

const Sidebar = () => {
	return (
		<div className="h-[600px] min-h-[80vh] min-w-[300px] max-w-[600px] w-full place-self-center p-6 md:p-12 bg-slate-50 text-center rounded-lg flex flex-col">
			<Image src={paperPlane} alt="" className="w-[200px] mx-auto" />
			<h1 className="text-4xl">CV Generator</h1>
			<a href="https://github.com/mikemelchior" className="mt-auto mx-auto">
				<p className="flex items-center gap-2">
					mikemelchior
					<Image src={githubIcon} alt="" className="w-[26px]" />
				</p>
			</a>
		</div>
	);
};

export default Sidebar;
