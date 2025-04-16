import { NButton, NFlex } from 'naive-ui'
import '~/styles/shared.scss'

// @unocss-include

export default (link: string) => {
	const nuxt = useNuxtApp()

	const modal = nuxt.$modal as ReturnType<typeof useModal>

	modal.create({
		preset: 'card',
		class: 'modal',
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