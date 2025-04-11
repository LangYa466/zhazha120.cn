export default useMemoize((name: string) => {
	return asyncComputed(async () => {
		return await import(`~/assets/${name}.webp?url`)
			.then(module => {
				return module.default
			})
	}, null)
})