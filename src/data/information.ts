import { CalculatorOutlined, FileImageOutlined, GithubOutlined, HeartOutlined, MailOutlined, QqOutlined, UsergroupAddOutlined } from '@vicons/antd'
import { BrandSteam, DeviceGamepad, Paw } from '@vicons/tabler'
import type { TagProps } from 'naive-ui'
import { NIcon } from 'naive-ui'
import avatar from '~/assets/avatar_216d1f4160660919189af01a92dff5f6396a643d.webp?url'
import type Button from '~/types/button'

// @unocss-include

interface Tag {
	readonly type: TagProps['type']
	readonly content: string
}

interface Record {
	readonly province_abbr: string
	readonly icp_code: number
	readonly safety_code: number | null
}

interface ContactButton extends Button {
	readonly hide: boolean
}

interface Information {
	readonly name: string
	readonly avatar: string
	readonly description: string

	readonly tags: Tag[]
	readonly contacts: ContactButton[]
	readonly explores: Button[]
	readonly tools: Button[]

	readonly codetime_id: number | null

	readonly record: Record | null
}

export default {
	name: '渣渣120',
	avatar: avatar,
	description: ['也许是一名不合格的全栈开发者', '喜欢自动化和新技术'].join('\n'),
	tags: [
		{
			type: 'success',
			content: '前端'
		},
		{
			type: 'success',
			content: '后端'
		},
		{
			type: 'success',
			content: '运维'
		},
		{
			type: 'error',
			content: '福瑞'
		}
	],
	contacts: [
		{
			name: 'QQ',
			href: 'https://wpa.qq.com/msgrd?v=3&uin=2331281251',
			icon: () => h(NIcon, {
				component: QqOutlined
			}),
			is_external: true,
			hide: false
		},
		{
			name: '邮箱',
			href: 'mailto:contact@zhazha120.cn',
			icon: () => h(NIcon, {
				component: MailOutlined
			}),
			is_external: true,
			hide: false
		},
		{
			name: '网易云音乐',
			href: 'https://music.163.com/#/user/home?id=634000521',
			icon: () => h('div', {
				class: 'i-tabler:brand-netease-music scale-90'
			}),
			is_external: true,
			hide: true
		},
		{
			name: 'Steam',
			href: 'https://steamcommunity.com/u/WOSHIZHAZHA120',
			icon: () => h(NIcon, {
				component: BrandSteam
			}),
			is_external: true,
			hide: true
		},
		{
			name: '哔哩哔哩',
			href: 'https://space.bilibili.com/24267334',
			icon: () => h('div', {
				class: 'i-simple-icons:bilibili scale-90'
			}),
			is_external: true,
			hide: false
		},
		{
			name: 'Github',
			href: 'https://github.com/WOSHIZHAZHA120',
			icon: () => h(NIcon, {
				component: GithubOutlined
			}),
			is_external: true,
			hide: false
		}
	],
	explores: [
		{
			name: '个人群',
			href: 'https://qm.qq.com/cgi-bin/qm/qr?k=J0VLGhPqQMYw8j6u4v5_-o4o-gnwA6MW&authKey=G7bGP4NM1k0MO/kH+xKVlEjk9gbR2AOXCxMRDjtrqQSDxwQvAxGdseQ1uyhj9nNb',
			icon: () => h(NIcon, {
				component: UsergroupAddOutlined
			}),
			is_external: true
		},
		{
			name: '赞助 & 支持',
			href: '/support',
			icon: () => h(NIcon, {
				component: HeartOutlined
			}),
			is_external: false
		},
		{
			name: '游戏',
			href: '/game',
			icon: () => h(NIcon, {
				component: DeviceGamepad
			}),
			is_external: false
		},
		{
			name: '兽设',
			href: '/furry',
			icon: () => h(NIcon, {
				component: Paw
			}),
			is_external: false
		}
	],
	tools: [
		{
			name: '定轨音游段位单曲准度计算器',
			href: '/tools/accuracy-calculator',
			icon: () => h(NIcon, {
				component: CalculatorOutlined
			}),
			is_external: false
		},
		{
			name: '图片水印工具',
			href: '/tools/image-watermark',
			icon: () => h(NIcon, {
				component: FileImageOutlined
			}),
			is_external: false
		}
	],
	codetime_id: 2270,
	record: {
		province_abbr: '赣',
		icp_code: 2022005275,
		safety_code: 36070202001088
	}
} satisfies Information