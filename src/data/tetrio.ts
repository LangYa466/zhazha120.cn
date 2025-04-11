import { DownloadOutlined, ProfileOutlined } from '@vicons/antd'
import { NIcon } from 'naive-ui'

type Rank = 'z' | 'd' | 'd+' | 'c-' | 'c' | 'c+' | 'b-' | 'b' | 'b+' | 'a-' | 'a' | 'a+' | 's-' | 's' | 's+' | 'ss' | 'u' | 'x' | 'x+'

interface Button {
	readonly name: string
	readonly href: string
	readonly icon: () => VNode
	readonly is_external: boolean
}

interface Tetrio {
	readonly id: string;
	readonly rank_colors: Record<Rank, [number, number, number]>

	readonly timelines: {
		readonly sprint: {
			readonly time: number
			readonly archive_at: Date
		}[]

		readonly blitz: {
			readonly score: number
			readonly archive_at: Date
		}[]

		readonly season_1: {
			readonly rank: Rank
			readonly archive_at: Date
		}[]

		readonly season_2: {
			readonly rank: Rank
			readonly archive_at: Date
		}[]
	}

	readonly buttons: Button[]
}

const id = '5eb3a6530b29196c155074e8'

export default {
	id,
	rank_colors: {
		'x+': [167, 99, 234],
		x: [255, 69, 255],
		u: [255, 56, 19],
		ss: [219, 139, 31],
		's+': [216, 175, 14],
		s: [224, 167, 27],
		's-': [178, 151, 43],
		'a+': [31, 168, 52],
		a: [70, 173, 81],
		'a-': [59, 182, 135],
		'b+': [79, 153, 192],
		b: [79, 100, 201],
		'b-': [86, 80, 199],
		'c+': [85, 40, 131],
		c: [115, 62, 143],
		'c-': [121, 85, 140],
		'd+': [142, 96, 145],
		d: [144, 117, 145],
		z: [55, 84, 51]
	},
	timelines: {
		sprint: [
			{
				time: 58.620,
				archive_at: new Date(2022, 4, 30)
			},
			{
				time: 48.877,
				archive_at: new Date(2022, 7, 18)
			},
			{
				time: 42.653,
				archive_at: new Date(2022, 9, 21)
			},
			{
				time: 39.685,
				archive_at: new Date(2022, 11, 9)
			},
			{
				time: 34.503,
				archive_at: new Date(2022, 11, 28)
			},
			{
				time: 28.225,
				archive_at: new Date(2023, 2, 9)
			},
			{
				time: 24.593,
				archive_at: new Date(2023, 8, 23)
			},
			{
				time: 23.260,
				archive_at: new Date(2023, 9, 21)
			},
			{
				time: 22.857,
				archive_at: new Date(2024, 3, 6)
			},
			{
				time: 21.633,
				archive_at: new Date(2024, 6, 5)
			},
			{
				time: 21.483,
				archive_at: new Date(2024, 8, 5)
			},
			{
				time: 21.458,
				archive_at: new Date(2024, 11, 9)
			},
			{
				time: 21.067,
				archive_at: new Date(2025, 2, 8)
			},
			{
				time: 20.103,
				archive_at: new Date(2025, 2, 24)
			},
			{
				time: 19.793,
				archive_at: new Date(2025, 3, 12)
			}
		],
		blitz: [
			{
				score: 389548,
				archive_at: new Date(2024, 1, 7)
			}
		],
		season_1: [
			{
				rank: 'a+',
				archive_at: new Date(2022, 4, 30)
			},
			{
				rank: 's',
				archive_at: new Date(2022, 5, 22)
			},
			{
				rank: 's+',
				archive_at: new Date(2022, 7, 18)
			},
			{
				rank: 'ss',
				archive_at: new Date(2022, 8, 17)
			},
			{
				rank: 'u',
				archive_at: new Date(2022, 12, 11)
			},
			{
				rank: 'x',
				archive_at: new Date(2023, 11, 2)
			}
		],
		season_2: [
			{
				rank: 'a+',
				archive_at: new Date(2024, 8, 17)
			},
			{
				rank: 's-',
				archive_at: new Date(2024, 8, 17)
			},
			{
				rank: 's',
				archive_at: new Date(2024, 8, 17)
			},
			{
				rank: 's+',
				archive_at: new Date(2024, 8, 17)
			},
			{
				rank: 'ss',
				archive_at: new Date(2024, 8, 17)
			},
			{
				rank: 'u',
				archive_at: new Date(2024, 8, 18)
			},
			{
				rank: 'x',
				archive_at: new Date(2024, 9, 9)
			}
		]
	},
	buttons: [
		{
			name: '看我资料',
			href: `https://ch.tetr.io/u/${id}`,
			icon: () => h(NIcon, {
				component: ProfileOutlined
			}),
			is_external: true
		},
		{
			name: '下载我当前使用的皮肤',
			href: 'https://cdn.zhazha120.cn/download/tetrio_skin.tpse',
			icon: () => h(NIcon, {
				component: DownloadOutlined
			}),
			is_external: true
		},
		{
			name: '下载我当前使用的设置',
			href: 'https://cdn.zhazha120.cn/download/tetrio_config.ttc',
			icon: () => h(NIcon, {
				component: DownloadOutlined
			}),
			is_external: true
		},
		{
			name: '下载我当前使用的背景',
			href: 'https://cdn.zhazha120.cn/download/tetrio_background.webp',
			icon: () => h(NIcon, {
				component: DownloadOutlined
			}),
			is_external: true
		}
	]
} satisfies Tetrio