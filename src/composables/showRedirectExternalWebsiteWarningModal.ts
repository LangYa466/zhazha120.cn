import { NButton, NFlex } from 'naive-ui'

// @unocss-include

export default (link: string) => {
	const nuxt = useNuxtApp()

	const modal = nuxt.$modal as ReturnType<typeof useModal>

	modal.create({
		preset: 'card',
		class: 'lt-md:w-4/5 md:w-1/2',
		title: '即将访问外部网站',
		content: () => h(NFlex, {
			align: 'center',
			vertical: true
		}, () => [
			h(NButton, {
				type: 'primary',
				text: true,
				class: 'text-wrap',
				onClick: () => {
					open(link)
				}
			}, () => link),
			h('span', null, {
				default: () => '↑ 戳这里继续跳转 ↑'
			})
		])
	})
}