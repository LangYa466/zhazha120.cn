import { DownloadOutlined, ProfileOutlined } from '@vicons/antd'
import { NIcon } from 'naive-ui'
import type Button from '~/types/button'

interface Malody {
	readonly id: number

	readonly jack: string
	readonly tech: string
	readonly speed: string
	readonly stream: string

	readonly passed_dans: {
		readonly name: string
		readonly complete_at: Date
		readonly bilibili_video_id: string | null
	}[]

	readonly buttons: Button[]
}

const id = 239697

export default {
	id,
	jack: ['Extra', 6].join(' '),
	tech: ['Extra', 6].join(' '),
	speed: ['Extra', 5].join(' '),
	stream: ['Extra', 6].join(' '),
	passed_dans: [
		{
			name: 'Regular 0',
			complete_at: new Date(2023, 11, 24),
			bilibili_video_id: 'BV1ub4y1T77n'
		},
		{
			name: 'Regular 1',
			complete_at: new Date(2023, 11, 24),
			bilibili_video_id: 'BV1nc411r7xQ'
		},
		{
			name: 'Regular 2',
			complete_at: new Date(2023, 11, 24),
			bilibili_video_id: 'BV1Nc411z7pE'
		},
		{
			name: 'Regular 3',
			complete_at: new Date(2023, 11, 24),
			bilibili_video_id: 'BV1rb4y1u74j'
		},
		{
			name: 'Regular 4',
			complete_at: new Date(2023, 1, 9),
			bilibili_video_id: 'BV18v4y1v7ov'
		},
		{
			name: 'Regular 5',
			complete_at: new Date(2023, 1, 11),
			bilibili_video_id: 'BV1uv4y1i78V'
		},
		{
			name: 'Regular 6',
			complete_at: new Date(2023, 1, 22),
			bilibili_video_id: 'BV1eM411t7Px'
		},
		{
			name: 'Regular 7',
			complete_at: new Date(2023, 2, 14),
			bilibili_video_id: 'BV1qv4y1s7xu'
		},
		{
			name: 'Regular 8',
			complete_at: new Date(2023, 3, 26),
			bilibili_video_id: 'BV18k4y147CV'
		},
		{
			name: 'Regular 9',
			complete_at: new Date(2023, 5, 5),
			bilibili_video_id: 'BV1Bs4y137wb'
		},
		{
			name: 'Regular 10',
			complete_at: new Date(2023, 5, 10),
			bilibili_video_id: 'BV1Hs4y1u7SU'
		},
		{
			name: 'Regular 10 | 后光',
			complete_at: new Date(2024, 4, 30),
			bilibili_video_id: 'BV18C411J71V'
		},
		{
			name: 'Extra 1',
			complete_at: new Date(2023, 11, 12),
			bilibili_video_id: 'BV1Hs4y1u7SU'
		},
		{
			name: 'Extra 1 | 后光',
			complete_at: new Date(2024, 9, 29),
			bilibili_video_id: 'BV1NsxyedEpD'
		},
		{
			name: 'Extra 2',
			complete_at: new Date(2023, 11, 17),
			bilibili_video_id: 'BV1Dw411H7Gr'
		},
		{
			name: 'Extra 2 | 后光',
			complete_at: new Date(2025, 2, 14),
			bilibili_video_id: 'BV1mdACeNEVf'
		},
		{
			name: 'Extra 3',
			complete_at: new Date(2023, 12, 3),
			bilibili_video_id: 'BV1Lu4y1V7kW'
		},
		{
			name: 'Extra 3 | 后光',
			complete_at: new Date(2025, 2, 14),
			bilibili_video_id: 'BV12dACeNExr'
		},
		{
			name: 'Extra 4',
			complete_at: new Date(2024, 9, 4),
			bilibili_video_id: 'BV12opceAEZN'
		},
		{
			name: 'Extra 5',
			complete_at: new Date(2024, 10, 28),
			bilibili_video_id: 'BV1Cg1jYgE1x'
		}
	],
	buttons: [
		{
			name: '看我资料',
			href: `https://m.mugzone.net/accounts/user/${id}`,
			icon: () => h(NIcon, {
				component: ProfileOutlined
			}),
			is_external: true
		},
		{
			name: '下载我当前使用的皮肤',
			href: 'https://cdn.zhazha120.cn/download/malody_skin.msz',
			icon: () => h(NIcon, {
				component: DownloadOutlined
			}),
			is_external: true
		}
	]
} satisfies Malody