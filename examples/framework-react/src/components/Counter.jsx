import { useState } from 'react';
import './Counter.css';

export default function Counter(props) {
	const [count, setCount] = useState(props.count);
	
	const add = () => setCount(prevCount => prevCount + 1);
	const subtract = () => setCount(prevCount => prevCount - 1);

	return (
		<>
			<div className="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div className="counter-message">{props.children}</div>
		</>
	);
}
