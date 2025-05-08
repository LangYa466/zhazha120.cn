// @unocss-include

export const isMobile = ref(false)
export const isDesktop = ref(false)

const check = () => {
	const div = document.createElement('div')

	div.classList.add('absolute', 'top-0', 'left-0', 'md:hidden')

	document.body.appendChild(div)

	isMobile.value = div.offsetParent !== null

	isDesktop.value = div.offsetParent === null

	div.remove()
}

window.addEventListener('resize', () => {
	check()
})

check()