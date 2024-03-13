import Link from "next/link";

export default async function Home() {
	return (
		<div className="max-w-7xl min-h-screen mx-auto">
			<div className="flex flex-col md:flex-row py-20">
				<div className="md:w-1/2 px-2 items-center justify-center flex">
					<div className=" h-96 md:m-0 mb-10 w-96 rounded-full inline-flex items-center justify-center bg-slate-200 text-gray-700 text-5xl font-bold">
						Krishna
					</div>
				</div>
				<div className="md:w-1/2 px-2">
					<div className="text-5xl font-bold">Hello</div>
					<div className="font-bold text-2xl mt-5">A Bit About Me</div>
					<p className="mt-6 text-lg">
						As a dynamic and creative professional with a passion for content creation and a solid foundation in
						programming, especially in Python, I bring a unique blend of technical skills and artistic vision to
						every project. With experience in editing and crafting engaging content across various platforms, I
						excel at transforming ideas into compelling narratives that resonate with audiences. My programming
						abilities in Python enable me to streamline content creation processes, automate tasks, and implement
						innovative solutions that enhance project outcomes. Known for my problem-solving skills and attention
						to detail, I am committed to leveraging my expertise to contribute to the success of forward-thinking
						teams.
					</p>
					<div className="mt-20">
						<Link href={'/resume'} className="h-32 w-32 rounded-full inline-flex items-center justify-center text-gray-700 text-lg m-1 font-bold bg-sky-300 duration-300 border-2 hover:bg-sky-400 border-sky-500">Resume</Link>
						<Link href={'/accomplishment/projects'} className="h-32 w-32 rounded-full inline-flex items-center justify-center text-gray-700 text-lg m-1 font-bold bg-red-300 duration-300 border-2 hover:bg-red-400 border-red-500">Projects</Link>
						<Link href={'/accomplishment/certificates'} className="h-32 w-32 rounded-full inline-flex items-center justify-center text-gray-700 text-lg m-1 font-bold bg-green-300 duration-300 border-2 hover:bg-green-400 border-green-500">Certificates</Link>
						<Link href={'/contact'} className="h-32 w-32 rounded-full inline-flex items-center justify-center text-gray-700 text-lg m-1 font-bold bg-yellow-300 duration-300 border-2 hover:bg-yellow-400 border-yellow-500">Contact</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
