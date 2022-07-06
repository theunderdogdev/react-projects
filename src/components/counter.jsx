import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	};
	const decrementCount = () => {
		setCount(count - 1);
	};
	return (
		<>
			<p>{count}</p>
			<button onClick={incrementCount}>Increment</button>
			<button onClick={decrementCount}>Decrement</button>
		</>
	);
};

export default Counter;
