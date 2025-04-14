import { sumBy } from 'remeda'

interface Input {
	readonly notes: number
	readonly accuracy: number | null
}

export const calculateAccuracy = (inputs: Input[]) => {
	const validInputs: Input[] = []

	for (const input of inputs) {
		if (input.notes > 0 && input.accuracy !== null) {
			validInputs.push(input)
		}
	}

	return validInputs.map((input, index) => {
		const currentInput = validInputs[index]
		const currentNotes = currentInput.notes

		const currentAccuracy = currentInput.accuracy!
		const passedNotes = sumBy(validInputs.slice(0, index + 1), input => input.notes)

		if (index === 0) {
			return currentAccuracy
		}

		const lastAccuracy = validInputs[index - 1].accuracy!
		const lastNotes = sumBy(validInputs.slice(0, index), input => input.notes)

		return (currentAccuracy * passedNotes - lastAccuracy * lastNotes) / currentNotes
	})
}