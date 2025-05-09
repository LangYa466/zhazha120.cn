<script lang="ts" setup>
import { DeleteOutlined, PlusOutlined } from '@vicons/antd'
import { useToolsAccuracyCalculatorStore } from '~/stores/tools/accuracyCalculatorStore'

const toolsAccuracyCalculatorStore = useToolsAccuracyCalculatorStore()

const createMap = () => {
	toolsAccuracyCalculatorStore.editor.maps.push({
		title: `第 ${toolsAccuracyCalculatorStore.editor.maps.length + 1} 首歌`,
		notes: 1
	})
}

const deleteMap = (index: number) => {
	toolsAccuracyCalculatorStore.editor.maps.splice(index, 1)
}
</script>

<template>
	<n-divider>单曲</n-divider>

	<n-flex vertical>
		<template v-for="(map, index) in toolsAccuracyCalculatorStore.editor.maps">
			<n-card size="small">
				<n-flex :wrap="false" class="lt-md:!flex-col">
					<n-form-item :show-feedback="false" class="w-full" label="标题" label-placement="left">
						<n-input v-model:value="map.title" placeholder="请输入标题"/>
					</n-form-item>

					<n-form-item :show-feedback="false" label="物量" label-placement="left">
						<n-input-number v-model:value="map.notes" :min="1" :step="1" class="w-full" placeholder="请输入物量"/>
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

		<n-flex class="lt-md:w-full" justify="center">
			<n-button class="lt-md:flex-1" @click="createMap">
				<template #icon>
					<n-icon :component="PlusOutlined"/>
				</template>

				新建
			</n-button>
		</n-flex>
	</n-flex>
</template>