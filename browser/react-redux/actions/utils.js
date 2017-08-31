export const getNextLine = (line, scene) => {

	// Line index properties are currently added in the Scene component, when the array of a scene's lines is mapped over.

	if (line.index === undefined) throw new Error('Lines should have an index property.');

	const nextLineIdx = Number(line.index) + 1
	const nextLine = scene[nextLineIdx]

	if (!nextLine) return;
	else {
		nextLine.index = nextLineIdx
		return nextLine
	}
}

export const getNextSpeakerLine = (line, scene) => {
	let currentLine = line
	while (currentLine.speaker == getNextLine(currentLine, scene).speaker) {
		currentLine = getNextLine(currentLine, scene)
	}
	return getNextLine(currentLine, scene)
}

// Speech Recognition support detection
export const detectSpeechRecognitionSupport = () => {
	return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}
