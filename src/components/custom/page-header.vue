<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const handleBack = () => {
	if (window.history.length <= 1) {
		router.push('/')
		return
	}

	router.back()
}
</script>

<template>
	<n-page-header :title="String(route.name)" @back="handleBack"/>
</template>