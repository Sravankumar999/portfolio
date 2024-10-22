const Skills = () => {
	return (
		<>
			<div>
				<p className="text-center pt-4 text-4xl font-mono">SKILLS OVERVIEW</p>
				<br />
				<div className="flex justify-around w-2/3 ml-auto mr-auto">
					<div className="w-1/5 bg-slate-200 rounded-lg">
						<p className="pt-4 text-2xl text-center">Frontend</p>
                        <br/>
						<ul className="list-outside">
							<li>React</li>
							<li>HTML</li>
							<li>CSS</li>
						</ul>
					</div>
					<div className="w-1/5 bg-slate-200 rounded-lg">
						<p className="pt-4 text-2xl text-center">Backend</p>
                        <br />
						<ul>
							<li>Spring Boot</li>
							<li>Java</li>
							<li>Express.js</li>
						</ul>
					</div>
					<div className="w-1/5 bg-slate-200 rounded-lg h-80">
						<p className="pt-4 text-2xl text-center">Cloud</p>
                        <br />
						<ul>
							<li>AWS</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
