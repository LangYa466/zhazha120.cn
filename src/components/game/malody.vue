<script lang="ts" setup>
import malody from '~/data/malody'
import { isDesktop, isMobile } from '~/shared/responsive'

const passed_dan_order = ref('dan')

const passed_dans = computed(() => {
	if (passed_dan_order.value === 'time') {
		return malody.passed_dans.toSorted((a, b) => {
			return a.complete_at.valueOf() - b.complete_at.valueOf()
		})
	}

	return malody.passed_dans
})
</script>

<template>
	<n-card size="small" title="马老弟 (Malody)">
		<n-flex size="small" vertical>
			<n-flex :align="isMobile ? 'center' : undefined" :vertical="isMobile" justify="space-evenly">
				<span class="text-blue-300 fw-bold">叠 (Jack): {{ malody.jack }}</span>

				<template v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</template>

				<span class="text-yellow-300 fw-bold">技 (Tech): {{ malody.tech }}</span>

				<template v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</template>

				<span class="text-red-300 fw-bold">乱 (Speed): {{ malody.speed }}</span>

				<template v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</template>

				<span class="text-green-300 fw-bold">切 (Stream): {{ malody.stream }}</span>
			</n-flex>

			<n-divider class="!my-0"/>

			<n-flex justify="center">
				<n-radio-group v-model:value="passed_dan_order">
					<n-radio-button value="dan">按段位顺序</n-radio-button>
					<n-radio-button value="time">按通过时间</n-radio-button>
				</n-radio-group>
			</n-flex>

			<n-flex justify="center" size="small" wrap>
				<template v-for="passed_dan in passed_dans">
					<n-card :title="passed_dan.name" class="w-fit" size="small">
						<iframe :src="(`https://player.bilibili.com/player.html?bvid=${passed_dan.bilibili_video_id}&autoplay=0`)" class="border-none aspect-ratio-video w-full md:h-60"/>

						<template #action>
							<n-flex justify="end">
								<n-text :depth="3">{{ passed_dan.complete_at.toLocaleDateString() }}</n-text>
							</n-flex>
						</template>
					</n-card>
				</template>
			</n-flex>
		</n-flex>

		<template #action>
			<n-flex justify="center" size="small" wrap>
				<template v-for="button in malody.buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>