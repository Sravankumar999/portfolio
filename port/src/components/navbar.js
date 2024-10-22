const Navbar = () => {
	return (
		<>
			<div className="flex justify-between h-12 items-center bg-gradient-to-r from-indigo-500 to-blue-500 fixed w-full">
				<div className="w-2/3 p-4 text-amber-300 text-xl font-bold">Portfolio</div>
				<div className="w-1/6 flex justify-around ">
                    <div className="text-amber-300 hover:text-amber-500">Home</div>
				    <div className="text-amber-300 hover:text-amber-500">About </div>
				    <div className="text-amber-300 hover:text-amber-500">Contact</div>
                </div>
			</div>
		</>
	);
};

export default Navbar;
