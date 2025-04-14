interface Map {
	readonly title: string
	readonly notes: number
}

interface Preset {
	readonly name: string
	readonly maps: Map[]
	readonly require_accuracy: number
}

export default Preset