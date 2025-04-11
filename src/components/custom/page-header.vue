<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const handleBack = () => {
	router.back()
}
</script>

<template>
	<n-page-header :title="String(route.name)" @back="handleBack"/>
</template>