<script lang="ts" setup>
definePageMeta({
	name: '兽设列表'
})

const furries = await queryCollection('furry').all()

const route = useRoute()
const router = useRouter()

const handleClick = (code: string) => {
	router.push({
		path: `${route.path}/${code}`
	})
}
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<n-card size="small">
				<n-flex align="center">
					<template v-for="furry in furries">
						<div class="transition-(transform duration-150) hover:scale-105 cursor-pointer" @click="handleClick(furry.code)">
							<n-flex vertical>
								<n-image :img-props="{ class: 'w-60' }" :src="loadAsset(`furry_${furry.image_hash}`).value"/>

								<n-flex :size="0" align="center" justify="center">
									<n-text>{{ furry.name }}</n-text>
									<n-divider vertical/>
									<n-text>{{ furry.animal }}</n-text>
								</n-flex>
							</n-flex>
						</div>
					</template>
				</n-flex>
			</n-card>
		</n-flex>
	</div>
</template>