import { useState } from "react";
import "./notepad.css";
const Notepad = () => {
	const endTag = /(\[\/)([a-z0-9]+)(\])/g;
	const startTag = /(\[)([a-z0-9]+)(\])/g;
	const noScrpt = /(\[script\])(.*)(\[\/script\])/g
	const [text, setText] = useState("");
	const [paraText, setParaText] = useState(text);
	const getNotepadText = ({ target }) => {
		setText(target.value);
		const sampleText = target.value
			.replaceAll("\n", "<br>").replaceAll(noScrpt, "<h3 class='not-allowed'>$2</h3>").replaceAll(startTag, "<$2>").replaceAll(endTag, "</$2>")
			
			
		setParaText(sampleText);
	};

	return (
		<>
		<div className="titles">
		
		<h3>Customary NotePad</h3>
		<h3>Supports any html tag make sure you just enclose it in [] brackets like... [h1]Some thing[/h1]</h3>
		</div>
			<textarea
				value={text}
				onInput={getNotepadText}
				placeholder="Enter text..."
			></textarea>
			<p
				className="rendered"
				dangerouslySetInnerHTML={{ __html: paraText }}
			>
				
			</p>
		</>
	);
};

export default Notepad;
