import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaCode, FaUsers, FaShieldAlt } from "react-icons/fa";

export default function AboutUsSection() {
	return (
		<section className="relative overflow-hidden py-16 px-4 md:px-8 lg:px-16">
			{/* Grid pattern */}
			<div className="absolute inset-0 overflow-hidden z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1400 600"
					className="min-h-full min-w-full opacity-30"
				>
					<defs>
						<pattern
							id="grid"
							width="24"
							height="24"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 24 0 L 0 0 0 24"
								fill="none"
								stroke="hsl(var(--muted))"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="1400" height="600" fill="url(#grid)" />
				</svg>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="relative z-10 max-w-5xl mx-auto w-full"
			>
				<h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
					Meet the Vortex Innovators
				</h1>
				
				<p className="text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
					Passionate developers exploring Web3 possibilities and enriching the Fantom ecosystem since 2021.
				</p>

				<div className="grid md:grid-cols-2 gap-12">
					{[
						{
							name: "Bumble",
							role: "Full Stack & Smart Contract Developer",
							description: "Specializing in blockchain technology, AI integration, and smart contract security.",
							image: "https://raw.githubusercontent.com/viniciuscoassis/vortexFoundation/main/public/bumblepfp.png",
							icons: [
								<FaCode key="code" className="text-gray-400 text-xl" />,
								<FaShieldAlt key="shield" className="text-gray-400 text-xl ml-2" />
							],
						},
						{
							name: "Tuco",
							role: "Project Manager & Community Lead",
							description: "Fostering connections and cultivating a vibrant community around our shared vision.",
							image: "https://raw.githubusercontent.com/viniciuscoassis/vortexFoundation/main/public/tucopfp.png",
							icons: [<FaUsers key="users" className="text-gray-400 text-xl" />],
						},
					].map((member, index) => (
						<motion.div
							key={member.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
							className="bg-card/50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center shadow-lg"
						>
							<Avatar className="w-32 h-32 mb-6 ring-4 ring-accent ring-opacity-50">
								<AvatarImage src={member.image} alt={member.name} />
								<AvatarFallback>{member.name[0]}</AvatarFallback>
							</Avatar>
							<h2 className="text-3xl font-bold text-foreground mb-2">{member.name}</h2>
							<p className="font-semibold text-gray-400 mb-4">{member.role}</p>
							<div className="flex mb-4">
								{member.icons}
							</div>
							<p className="text-muted-foreground text-center text-lg leading-relaxed">{member.description}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}