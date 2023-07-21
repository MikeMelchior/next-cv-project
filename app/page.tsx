import Inputs from "@/components/Inputs";
import Outputs from "@/components/Outputs";
import Sidebar from "@/components/Sidebar";

export default function Home() {
	return (
		<main className="grid md:grid-cols-3 p-[48px] gap-[48px]">
			<Sidebar />
      		<Inputs />
      		<Outputs />
		</main>
	);
}
