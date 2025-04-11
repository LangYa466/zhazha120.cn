interface FriendsLink {
	readonly name: string
	readonly description: string | null
	readonly icon: string
	readonly href: string
}

export default [
	{
		name: 'Abnormal Cat',
		description: null,
		icon: await import('~/assets/friend_link_d83379b0778a782cb0eb539c0e097447497d64c8.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://abnormalcat.cn'
	},
	{
		name: '迷失的小K',
		description: '感受编程乐趣，畅游代码海洋',
		icon: await import('~/assets/friend_link_471179fb623a2216a1410a9c786664918f37507b.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://blog.kclub.tech'
	},
	{
		name: '应龙笔记',
		description: '应龙笔记是一个专注于知识分享的网站',
		icon: await import('~/assets/friend_link_f4bc6b30df6dc2ddaa10b2bdf550cf08d3e1caeb.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://www.silverdragon.cn?link=' + location.host
	},
	{
		name: '锐龙的小窝',
		description: '锐冰的个人博客',
		icon: await import('~/assets/friend_link_3ec965f37403360c599daadf32729c6ca420cca6.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://blog.sharpice.top'
	},
	{
		name: 'LangYa466',
		description: null,
		icon: await import('~/assets/friend_link_dc8a952c8cbb9fb4c42586c8413ce98018642566.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://furry.luxe'
	},
	{
		name: 'F_Qilin',
		description: null,
		icon: await import('~/assets/friend_link_23f2f198dcc6eb2e441fab70243c143f75849a40.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://blog.fqilin.top'
	},
	{
		name: '是只林风呐',
		description: '-来点奇奇怪怪的- < )',
		icon: await import('~/assets/friend_link_aa5e2fa25f201ade08faf33bc9b80a715cd13080.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://linfun.top'
	},
	{
		name: 'koto\'s site',
		description: 'koto 的灌水站',
		icon: await import('~/assets/friend_link_1e01d6a28623512f74017491d56f95905a44b2a7.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://koto.cc'
	},
	{
		name: '西西のBlog',
		description: '嘻嘻西西CC吸吸',
		icon: await import('~/assets/friend_link_4747b15a93e2acfc96d15aa2881174306ae95848.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://xxand.cc'
	},
	{
		name: 'Dracowyn',
		description: '愿飞龙常入你梦乡',
		icon: await import('~/assets/friend_link_4f161e1ead85000c161c21ba2829407842b6609b.webp?url')
			.then(module => {
				return module.default
			}),
		href: 'https://dracowyn.com'
	}
] satisfies FriendsLink[]