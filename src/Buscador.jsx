import React, { useState, useRef, useEffect } from "react";
import SpeechRecognition, {
	useSpeechRecognition
} from "react-speech-recognition";

function Buscador() {
	const { transcript, resetTranscript } = useSpeechRecognition();
	const [isListening, setIsListening] = useState(false);
	const microphoneRef = useRef(null);
	const [value, setValue] = useState("");

	const handleListing = () => {
		console.log(transcript);
		setIsListening(true);
		microphoneRef.current.classList.add("listening");
		SpeechRecognition.startListening({
			continuous: true
		});
	};
	const stopHandle = () => {
		setIsListening(false);
		microphoneRef.current.classList.remove("listening");
		SpeechRecognition.stopListening();
	};
	const handleReset = () => {
		stopHandle();
		resetTranscript();
	};

	useEffect(() => {
		console.log(transcript);
		setValue(transcript);
	}, [transcript]);

	return (
		<div className="microphone-wrapper">
			<div className="mircophone-container">
				<div
					className="microphone-icon-container"
					ref={microphoneRef}
					onClick={handleListing}
				>
					<i>MIC</i>
				</div>
				<div className="microphone-status">
					{isListening ? "Listening........." : "Click to start Listening"}
				</div>
				{isListening && (
					<button className="microphone-stop btn" onClick={stopHandle}>
						Stop
					</button>
				)}
			</div>
			{transcript && (
				<div className="microphone-result-container">
					<div className="microphone-result-text">{transcript}</div>

					<button className="microphone-reset btn" onClick={handleReset}>
						Reset
					</button>
				</div>
			)}
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			{/* <input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type="text"
			/> */}
		</div>
	);
}

export default Buscador;
