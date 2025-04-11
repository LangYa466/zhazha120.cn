interface Project {
	readonly type: 'github'

	readonly description: string
	readonly repository: string
}

export default [
	{
		type: 'github',
		description: 'Paw Team 官网',
		repository: ['PawTeamClub', 'website'].join('/')
	},
	{
		type: 'github',
		description: '与互的个人网站',
		repository: ['WOSHIZHAZHA120', 'pages.yuhu'].join('/')
	},
	{
		type: 'github',
		description: 'Abnormal Cat 的个人网站',
		repository: ['Abnormal-Cat', 'abnormalcat.cn'].join('/')
	},
	{
		type: 'github',
		description: 'Techmino 在线词典',
		repository: ['26F-Studio', 'techmino-online-dict'].join('/')
	},
	{
		type: 'github',
		description: '俄罗斯方块查询 Bot 模板 老',
		repository: ['A-Minos', 'tetris-stats-templates'].join('/')
	},
	{
		type: 'github',
		description: '俄罗斯方块查询 Bot 模板 新',
		repository: ['A-Minos', 'tetris-stats-templates-new'].join('/')
	},
	{
		type: 'github',
		description: 'Endless Services 前端',
		repository: ['Endless-Spike-Studio', 'Endless-Services-Frontend'].join('/')
	},
	{
		type: 'github',
		description: 'Endless Services 运行时',
		repository: ['Endless-Spike-Studio', 'Endless-Services-Runtime'].join('/')
	},
	{
		type: 'github',
		description: 'Endless Services 后端',
		repository: ['Endless-Spike-Studio', 'Endless-Services-Backend'].join('/')
	},
	{
		type: 'github',
		description: 'Endless Services 连接器',
		repository: ['Endless-Spike-Studio', 'Endless-Services-Connector'].join('/')
	}
] satisfies Project[]