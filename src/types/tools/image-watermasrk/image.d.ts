interface Image {
	readonly src: string

	readonly width: number
	readonly height: number

	readonly styles: {
		readonly width: string
		readonly height: string
	}
}

export default Image