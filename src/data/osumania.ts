import { DownloadOutlined, ProfileOutlined } from '@vicons/antd'
import { NIcon } from 'naive-ui'

interface Button {
	readonly name: string
	readonly href: string
	readonly icon: () => VNode
	readonly is_external: boolean
}

interface OsuMania {
	readonly id: number

	readonly jack: string
	readonly tech: string
	readonly speed: string
	readonly stream: string

	readonly long_note: number

	readonly buttons: Button[]
}

const id = 16303789

export default {
	id,
	jack: 'β',
	tech: 'γ',
	speed: 'β',
	stream: 'β',
	long_note: 10,
	buttons: [
		{
			name: '看我资料',
			href: `https://osu.ppy.sh/users/${id}/mania`,
			icon: () => h(NIcon, {
				component: ProfileOutlined
			}),
			is_external: true
		},
		{
			name: '下载我当前使用的皮肤',
			href: 'https://cdn.zhazha120.cn/download/osu_skin.osk',
			icon: () => h(NIcon, {
				component: DownloadOutlined
			}),
			is_external: true
		}
	]
} satisfies OsuMania