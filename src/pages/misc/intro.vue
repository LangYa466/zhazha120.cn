<script lang="ts" setup>
import { CalendarOutlined, DownloadOutlined, ManOutlined } from '@vicons/antd'
import { CurrentLocation, Man } from '@vicons/tabler'
import dom2image from 'dom-to-image'
import furry_be6367f330fbb49da59f46cfb063b7fbfba41732 from '~/assets/furry_be6367f330fbb49da59f46cfb063b7fbfba41732.webp'
import information from '~/data/information'

definePageMeta({
	name: '扩列条'
})

const container = useTemplateRef<HTMLDivElement>('container')

const scale = ref(3)

const download = async () => {
	if (container.value === null) {
		return
	}

	const url = await dom2image.toPng(container.value, {
		width: container.value.clientWidth * scale.value,
		height: container.value.clientHeight * scale.value,
		style: {
			transform: `scale(${scale.value})`,
			transformOrigin: 'top left'
		}
	})

	const a = document.createElement('a')

	a.download = 'intro.png'
	a.href = url
	a.click()
}
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<n-card size="small">
				<n-flex align="center" vertical>
					<n-form-item :show-feedback="false" label="缩放倍数" label-placement="left">
						<n-input-number v-model:value="scale" :step="1"/>
					</n-form-item>

					<div ref="container" class="bg-[#111] p-10">
						<n-flex vertical>
							<n-flex justify="center">
								<n-card class="w-fit" size="small">
									<n-flex align="center">
										<div class="size-20">
											<n-image :img-props="{ class: 'size-full' }" :src="information.avatar" class="rounded-full"/>
										</div>

										<n-flex :size="0" vertical>
											<n-flex align="center" size="small">
												<n-h2 class="!my-0 text-3xl fw-extrabold">
													<n-flex :size="0">
														<span>渣渣</span>
														<n-text :depth="3">120</n-text>
													</n-flex>
												</n-h2>

												<n-text class="inline-flex" type="info">
													<n-icon :component="ManOutlined" size="16"/>
												</n-text>
											</n-flex>

											<n-text class="text-xl fw-bold" type="success">QQ: 2331281251</n-text>
										</n-flex>
									</n-flex>
								</n-card>

								<n-card class="w-fit" size="small">
									<n-flex align="center" size="small">
										<n-icon :component="CurrentLocation" size="16"/>
										<span>江西省 赣州市 章贡区</span>
									</n-flex>

									<n-flex align="center" size="small">
										<n-icon :component="CalendarOutlined" size="16"/>

										<n-flex :size="0">
											<span>2006/5/7</span>

											<n-text :depth="3" class="scale-80">(属狗 金牛座)</n-text>
										</n-flex>
									</n-flex>

									<n-flex align="center" size="small">
										<n-icon :component="Man" size="16"/>

										<n-flex size="small">
											<n-text type="info">INTJ-A-H</n-text>
											<n-text type="warning">176cm 99kg</n-text>
										</n-flex>
									</n-flex>
								</n-card>
							</n-flex>

							<n-card class="w-fit mx-auto" size="small">
								<n-flex size="small">
									<span>学习很差 目前是</span>
									<n-text type="info">江西应用工程职业学院 (下埠校区) 24 级新生</n-text>
									<n-text type="warning">计算机应用技术专业</n-text>
								</n-flex>
							</n-card>

							<n-alert title="注意事项" type="warning">
								<n-flex justify="space-between">
									<span class="text-xl fw-bold">!!!</span>

									<span class="text-2xl fw-extrabold">
							不会涩涩 不约 不是同 不想恋爱 不找对象 不当对象 只想做自己
						</span>

									<span class="text-xl fw-bold">!!!</span>
								</n-flex>
							</n-alert>

							<n-flex>
								<n-card class="flex-1" size="small">
									<n-flex>
										<n-image :img-props="{ class: 'size-full' }" :src="furry_be6367f330fbb49da59f46cfb063b7fbfba41732" class="w-90"/>

										<n-flex :size="0" vertical>
											<span>是只福瑞</span>
											<n-text type="info">物种是狗 !</n-text>
											<n-text type="error">不可以戳 !!</n-text>
											<n-text :depth="3">暂时还没有名字</n-text>
										</n-flex>
									</n-flex>
								</n-card>

								<n-flex class="flex-1" vertical>
									<n-card size="small">
										<n-flex :size="0" vertical>
											<span class="text-xl">是全栈开发</span>

											<div class="h-1"/>

											<n-flex size="small">
												<span>有自己的个人网站: </span>
												<n-text type="success">https://zhazha120.cn</n-text>
											</n-flex>

											<div class="h-1"/>

											<n-text type="info">或许啥技术都会点 喜欢探索尝试新东西</n-text>
											<n-text type="info">喜欢开源 有良好的 git 提交消息规范</n-text>

											<div class="h-1"/>

											<n-text :depth="3">
												喜欢玩 <span class="fw-extrabold">现代俄罗斯方块</span> 和 <span class="fw-extrabold">4k</span>
											</n-text>
										</n-flex>
									</n-card>

									<n-alert type="error">
										不抽烟 不喝酒 不会打麻将
									</n-alert>

									<n-alert type="success">
										<template #icon>😋</template>

										爱喝奶茶 并尤其喜欢古茗 (?)
									</n-alert>

									<n-card size="small">
										可以面基 但仅限见面 可能比较社恐 遇到不知道聊什么的尴尬情况可能会一直看手机 希望不要嫌弃我...
									</n-card>
								</n-flex>
							</n-flex>
						</n-flex>
					</div>
				</n-flex>

				<template #action>
					<div class="text-center">
						<n-button @click="download">
							<template #icon>
								<n-icon :component="DownloadOutlined"/>
							</template>

							下载
						</n-button>
					</div>
				</template>
			</n-card>
		</n-flex>
	</div>
</template>