<script lang="ts" setup>
import { DeleteOutlined } from '@vicons/antd'
import type Preset from '~/types/tools/accuracy-calculator/preset'

const data = defineModel<Preset>('value', {
	required: true
})

const createMap = () => {
	data.value.maps.push({
		title: `第 ${data.value.maps.length + 1} 首歌`,
		notes: 1
	})
}

const deleteMap = (index: number) => {
	data.value.maps.splice(index, 1)
}
</script>

<template>
	<template v-if="data.maps !== undefined">
		<n-divider>单曲</n-divider>

		<n-flex vertical>
			<n-flex justify="center">
				<template v-for="(map, index) in data.maps">
					<n-card size="small">
						<n-flex :wrap="false" class="lt-md:!flex-col">
							<n-form-item :show-feedback="false" class="w-full" label="标题" label-placement="left">
								<n-input v-model:value="map.title" placeholder="请输入标题"/>
							</n-form-item>

							<n-form-item :show-feedback="false" label="物量" label-placement="left">
								<n-input-number v-model:value="map.notes" :min="1" :step="1" placeholder="请输入物量"/>
							</n-form-item>

							<n-popconfirm @positive-click="deleteMap(index)">
								<template #trigger>
									<n-button type="error">
										<template #icon>
											<n-icon :component="DeleteOutlined"/>
										</template>

										删除
									</n-button>
								</template>

								确认删除吗
							</n-popconfirm>
						</n-flex>
					</n-card>
				</template>
			</n-flex>

			<n-flex class="lt-md:w-full" justify="center">
				<n-button class="lt-md:flex-1" @click="createMap">新建</n-button>
			</n-flex>
		</n-flex>
	</template>
</template>