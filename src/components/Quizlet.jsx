import "./quizlet.css";
import { useState, useEffect } from "react";
import data from "./data";
const Quizlet = () => {
	const [qno, setQno] = useState(0);
	const [active, setActive] = useState(undefined);
	const [answer, setAnswer] = useState(undefined);
	const [options, setOptions] = useState([...data[qno].options]);
	const [score, setScore] = useState(0);
	const checkAnswer = () => {
		if (!answer) {
			return;
		}
		const selected = document.querySelector(".answer.active");
		if (answer === data[qno].correct_answer) {
			selected.classList.add("correct");
			setScore(score + 5);
		} else {
			selected.classList.add("wrong");
		}
		const el = document.getElementById("submit");
		el.disabled = true;
		setTimeout(() => {
			document.querySelectorAll(".answer").forEach((el) => {
				el.classList.remove("active", "wrong", "correct");
			});
		}, 3000);
		setTimeout(() => {
			setQno(qno + 1);
			el.disabled = false;
		}, 4500);
	};
	useEffect(() => {
		setAnswer(undefined);
		setActive(undefined);
		setOptions([...data[qno].options]);
	}, [qno]);

	return (
		<>
			<div id="main">
				<div className="quiz">
					<div className="question">
						<div
							dangerouslySetInnerHTML={{
								__html: data[qno].question,
							}}
						></div>
						<br />
						selected: {answer}
					</div>
					<div className="answers">
						{options.map((val, i) => {
							return (
								<button
									key={i}
									className={active === i ? "answer active" : "answer"}
									onClick={() => {
										setActive(i);
										setAnswer(val);
									}}
								>
									<span className="label">{i + 1}</span>
									<span
										className="text"
										dangerouslySetInnerHTML={{ __html: val }}
									></span>
								</button>
							);
						})}
					</div>
					<div className="controls">
						<button className="submit" id="submit" onClick={checkAnswer}>
							Submit
						</button>
						<div className="score">{score}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Quizlet;
