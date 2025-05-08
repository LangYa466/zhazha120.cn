<script lang="ts" setup>
import { NCard } from 'naive-ui'
import { isMobile } from '~/shared/responsive'

definePageMeta({
	name: '兽设详情'
})

const route = useRoute()

const furry = useAsyncData(async () => {
	return await queryCollection('furry').where('code', '=', route.params.code).first()
})
</script>

<template>
	<custom-sub-page>
		<custom-async-data-adapter :value="furry">
			<template #success="{ data }">
				<n-card size="small">
					<template v-if="data !== null">
						<n-flex :align="isMobile ? 'center' : undefined" :vertical="isMobile" size="small">
							<n-image :img-props="{ class: 'h-100' }" :src="loadAsset(`furry_${data.image_hash}`).value"/>

							<div class="lt-sm:text-center">
								<furry-info :value="data"/>
							</div>
						</n-flex>
					</template>

					<template v-else>
						<n-result :description="(`或许是代号名为 ${route.params.code} 的兽兽不存在`)" size="small" status="404" title="找不到欸 xwx"/>
					</template>
				</n-card>

				<template v-if="data !== null">
					<ContentRenderer :value="data.body"/>
				</template>
			</template>
		</custom-async-data-adapter>
	</custom-sub-page>
</template>