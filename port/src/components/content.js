import picture from "../components/image.png";
import git from "../components/git.png";
import gmail from "../components/gmail.png";
import linkedin from "../components/linkedin.webp";
import Skills from "./skills";

const Content = () => {
	return (
		<>
			<div className="font-sans" style={{ "border-top-width": "12px" }}>
				<div className="bg-gradient-to-r from-blue-600 to-blue-700 pl-10 pt-10 pb-20">
					<div className="pl-10 pt-10 flex justify-between items-center">
						<div className="p-4 w-4/6">
							<p className="text-4xl text-orange-100 font-sans text-justify">ABOUT ME</p>
							<br />
							<p className="text-4xl text-orange-500 font-serif text-justify">Hey, I'm Sravan!</p>
							<br />
							<p className="text-3xl text-orange-200 font-serif indent-20 text-justify">
								Hi, This is Mamidala Sai Sravan Kumar, and this is my portfolio designed using React.js and deployed on Vercel. I am an experienced web
								developer and I have skills in front end tools like React.js, and I am expertized in backend tools like node.js as well as Spring boot.
							</p>
						</div>
						<div className="pr-20 pt-20">
							<img src={picture} className="h-auto w-96 pr-10 rounded-lg" alt="" />
							<p className="text-orange-100 text-center text-2xl pt-4">Full Stack Developer</p>
							<div className="flex justify-center">
								<a href="https://www.google.com">
									<img src={gmail} alt="" className="w-12 pr-2" />
								</a>
								<a href="https://www.google.com">
									<img src={linkedin} alt="" className="w-12 pr-2" />
								</a>
								<a href="https://www.google.com">
									<img src={git} alt="" className="w-12  pr-2" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<Skills />
			</div>
		</>
	);
};

export default Content;
