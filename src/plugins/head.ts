import information from '~/data/information'

export default defineNuxtPlugin(() => {
	useHead({
		title: information.name
	})

	const router = useRouter()

	router.afterEach(() => {
		useHead({
			titleTemplate: () => {
				const route = useRoute()

				if (route.name === undefined) {
					return information.name
				}

				return [information.name, route.name].join(' | ')
			}
		})
	})

	useFavicon(information.avatar)
})