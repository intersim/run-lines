export const getNextLine = (line, play) => {
	const nextLineIdx = Number(line.index) + 1
	const nextLine = play[nextLineIdx]

	if (!nextLine) return;
	else {
		nextLine.index = nextLineIdx
		return nextLine	
	}
}

export const getNextSpeakerLine = (line, play) => {
	let currentLine = line
	while (currentLine.speaker == getNextLine(currentLine, play).speaker) {
		currentLine = getNextLine(currentLine, play)
	}
	return getNextLine(currentLine, play)
}