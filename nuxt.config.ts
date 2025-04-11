import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-04-08',
	ssr: false,
	srcDir: 'src',
	modules: [
		'@nuxt/scripts',
		'@teages/nuxt-legacy',
		'@nuxt/content',
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'nuxtjs-naive-ui'
	],
	scripts: {
		registry: {
			clarity: {
				id: 'oegssgxsei'
			}
		}
	},
	legacy: {
		vite: {
			targets: ['fully supports proxy'],
			modernPolyfills: true
		}
	},
	vite: {
		build: {
			target: ['esnext']
		},
		plugins: [
			AutoImport({
				imports: [
					{
						'naive-ui': [
							'useDialog',
							'useMessage',
							'useModal',
							'useNotification',
							'useLoadingBar'
						]
					}
				]
			}),
			Components({
				resolvers: [
					NaiveUiResolver()
				]
			})
		]
	}
})