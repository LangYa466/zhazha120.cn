<script lang="ts" setup>
definePageMeta({
	name: '首页'
})
</script>

<template>
	<div class="lt-md:pt-10">
		<n-flex :size="0" vertical>
			<index-pages-1/>
			<index-pages-2/>
		</n-flex>
	</div>
</template>