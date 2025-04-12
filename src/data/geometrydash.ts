import { ProfileOutlined } from '@vicons/antd'
import { NIcon } from 'naive-ui'
import cube from '~/assets/geometrydash_269adde5f9b3065260b080b862df23bbf0fe3ed2.webp?url'
import type Button from '~/types/button'

interface GeometryDash {
	readonly id: number

	readonly cube: string
	readonly name: string

	readonly buttons: Button[]
}

const id = 1889402

export default {
	id,
	cube,
	name: 'WOSHIZHAZHA120',
	buttons: [
		{
			name: '看我资料',
			href: `https://gdbrowser.com/u/${id}`,
			icon: () => h(NIcon, {
				component: ProfileOutlined
			}),
			is_external: true
		}
	]
} satisfies GeometryDash