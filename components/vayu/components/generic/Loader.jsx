const Loader = () => {
	let circleCommonClasses = "h-2.5 w-2.5 bg-[#A98F7A] rounded-full";

	return (
		<div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center min-h-full space-x-1 bg-gray-800 bg-opacity-10">
			<div className={`${circleCommonClasses} animate-bounce`}></div>
			<div className={`${circleCommonClasses} animate-bounce-200`}></div>
			<div className={`${circleCommonClasses} animate-bounce-400`}></div>
		</div>
	);
};

export default Loader;
