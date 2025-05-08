<script lang="ts" setup>

definePageMeta({
	name: '兽设列表'
})

const furries = useAsyncData(async () => {
	return await queryCollection('furry').all()
})

const router = useRouter()

const handleClick = (code: string) => {
	router.push({
		name: '兽兽详情',
		params: {
			code
		}
	})
}
</script>

<template>
	<custom-sub-page>
		<custom-async-data-adapter :value="furries">
			<template #pending>
				<n-card size="small">
					<n-flex justify="center">
						<n-spin/>
					</n-flex>
				</n-card>
			</template>

			<template #success="{ data }">
				<n-flex size="small">
					<template v-for="furry in data">
						<n-card class="w-100 cursor-pointer" size="small" @click="handleClick(furry.code)">
							<template #cover>
								<n-image :src="loadAsset(`furry_${furry.image_hash}`).value" @click.stop/>
							</template>

							<div class="lt-sm:text-center">
								<furry-info :value="furry"/>
							</div>
						</n-card>
					</template>
				</n-flex>
			</template>
		</custom-async-data-adapter>
	</custom-sub-page>
</template>