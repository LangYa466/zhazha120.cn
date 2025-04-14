interface Organization {
	readonly type: 'github'

	readonly name: string
	readonly avatar_id: number
	readonly description: string | null
}

export default [
	{
		type: 'github',
		name: '26F-Studio',
		avatar_id: 72001477,
		description: '26F Studio'
	},
	{
		type: 'github',
		name: 'A-Minos',
		avatar_id: 168070538,
		description: 'A Minos'
	},
	{
		type: 'github',
		name: 'c794b7b0331e4cf3',
		avatar_id: 108103310,
		description: 'Z Team'
	},
	{
		type: 'github',
		name: 'Endless-Spike-Studio',
		avatar_id: 102524977,
		description: 'Endless Spike Studio'
	},
	{
		type: 'github',
		name: 'FurDevsCN',
		avatar_id: 103052241,
		description: null
	},
	{
		type: 'github',
		name: 'FurryChatWorld',
		avatar_id: 180642546,
		description: 'Furry Chat World'
	},
	{
		type: 'github',
		name: 'PawTeamClub',
		avatar_id: 156998119,
		description: 'Paw Team Club'
	}
] satisfies Organization[]