<script lang="ts" setup>
import { NCard } from 'naive-ui'

definePageMeta({
	name: '兽兽详情'
})

const route = useRoute()
const furry = await queryCollection('furry').where('code', '=', route.params.code).first()
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<n-card size="small">
				<template v-if="furry !== null">
					<n-flex>
						<n-image :img-props="{ class: 'h-100' }" :src="loadAsset(`furry_${furry.image_hash}`).value"/>

						<n-flex :size="0" vertical>
							<div class="fw-bold">
								<n-flex :size="0">
									<n-text>{{ furry.name }}</n-text>
									<n-divider vertical/>
									<n-text>{{ furry.animal }}</n-text>
								</n-flex>
							</div>

							<span>{{ furry.description }}</span>
						</n-flex>
					</n-flex>
				</template>

				<template v-else>
					<n-result :description="(`或许是代号名为 ${route.params.code} 的兽兽不存在`)" status="404" title="找不到欸"/>
				</template>
			</n-card>

			<template v-if="furry !== null">
				<ContentRenderer :value="furry.body"/>
			</template>
		</n-flex>
	</div>
</template>