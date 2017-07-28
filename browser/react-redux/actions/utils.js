export const getNextLine = (line, scene) => {
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
