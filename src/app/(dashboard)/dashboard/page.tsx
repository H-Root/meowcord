import CustomButton from "./custom-button";

export const dynamic = "force-dynamic";

const page = () => {
	const randomNumber = Math.random();

	return <CustomButton num={randomNumber} />;
};

export default page;
