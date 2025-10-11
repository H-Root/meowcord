"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const CustomButton = ({ num }: { num: number }) => {
	const [number, setNumber] = useState(0);

	console.log(num);

	return (
		<div>
			<button onClick={() => setNumber((n) => n - 1)}>
				<Minus />
			</button>
			<span>{number}</span>
			<button onClick={() => setNumber((n) => n + 1)}>
				<Plus />
			</button>
		</div>
	);
};

export default CustomButton;
