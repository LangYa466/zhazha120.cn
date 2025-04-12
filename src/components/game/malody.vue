<script lang="ts" setup>
import malody from '~/data/malody'

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
		<n-flex vertical>
			<n-flex :size="0" class="lt-md:(!flex-col text-center)" justify="space-evenly">
				<span class="text-blue-300 fw-bold">叠 (Jack): {{ malody.jack }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-yellow-300 fw-bold">技 (Tech): {{ malody.tech }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-red-300 fw-bold">乱 (Speed): {{ malody.speed }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-green-300 fw-bold">切 (Stream): {{ malody.stream }}</span>
			</n-flex>

			<n-divider class="!my-0"/>

			<div class="mx-auto">
				<n-radio-group v-model:value="passed_dan_order">
					<n-radio-button value="dan">按段位顺序</n-radio-button>
					<n-radio-button value="time">按通过时间</n-radio-button>
				</n-radio-group>
			</div>

			<n-flex justify="center">
				<template v-for="passed_dan in passed_dans">
					<n-card :title="passed_dan.name" class="w-fit" size="small">
						<iframe :src="(`https://player.bilibili.com/player.html?bvid=${passed_dan.bilibili_video_id}&autoplay=0`)" class="border-none lt-md:w-full md:h-60 aspect-ratio-video"/>

						<template #footer>
							<div class="text-right">
								<n-text :depth="3">{{ passed_dan.complete_at.toLocaleDateString() }}</n-text>
							</div>
						</template>
					</n-card>
				</template>
			</n-flex>
		</n-flex>

		<template #footer>
			<n-flex align="center" class="lt-md:!flex-col">
				<template v-for="button in malody.buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>