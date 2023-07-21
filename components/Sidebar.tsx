import Image from "next/image";
import paperPlane from "../public/paper-plane.png";
import githubIcon from "../public/github.png";

const Sidebar = () => {
	return (
		<div className="h-[600px] min-w-[300px] p-[48px] bg-slate-50 text-center rounded-lg flex flex-col">
			<Image src={paperPlane} alt="" className="w-[200px] mx-auto" />
			<h1 className="text-4xl">CV Generator</h1>
			<p className="mt-auto flex mx-auto">
				<a href="https://github.com/mikemelchior">
					mikemelchior
					<Image src={githubIcon} alt="" className="w-[20px] ml-4" />
				</a>
			</p>
		</div>
	);
};

export default Sidebar;
