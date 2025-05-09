<script lang="ts" setup>

import { CalendarOutlined } from '@vicons/antd'
import { Bone, CurrentLocation, Man, Puzzle, Ruler, ZodiacTaurus } from '@vicons/tabler'
import { isDesktop, isMobile } from '~/shared/responsive'

definePageMeta({
	name: '扩列条'
})
</script>

<template>
	<custom-sub-page>
		<n-card size="small">
			<n-flex size="small" vertical>
				<div class="lt-md:text-center">
					<n-flex :justify="isMobile ? 'center' : undefined" align="center" size="small">
						<span class="text-4xl fw-bold whitespace-normal">👋 你好 我是</span>

						<n-flex :size="0" vertical>
							<span class="text-3xl fw-extrabold">渣渣120</span>
							<n-text :depth="3" class="text-sm">简称 渣渣</n-text>
						</n-flex>
					</n-flex>
				</div>

				<n-divider class="!my-0"/>

				<n-alert :show-icon="false" type="warning">
					<div class="text-2xl fw-bold lt-md:text-center">
						<n-flex :justify="isDesktop ? 'space-between' : undefined" :vertical="isMobile" :wrap="false">
							<n-text type="warning">!!!!!!</n-text>

							<n-flex align="center" justify="center" size="small">
								<n-tag type="error">不涩涩</n-tag>
								<n-tag type="error">不约</n-tag>
								<n-tag type="error">不是同</n-tag>
								<n-tag type="error">不想谈恋爱</n-tag>
								<n-tag type="error">不找对象</n-tag>
								<n-tag type="error">不当对象</n-tag>
								<n-tag type="success">只想做自己 👊</n-tag>
							</n-flex>

							<n-text type="warning">!!!!!!</n-text>
						</n-flex>
					</div>
				</n-alert>

				<div class="h-5"/>

				<n-flex :vertical="isMobile" size="small" wrap>
					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="CurrentLocation"/>

							<span class="ml-1">江西省 赣州市 章贡区</span>
						</n-flex>
					</n-tag>

					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="Man"/>

							<span class="ml-1">男</span>
						</n-flex>
					</n-tag>

					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="CalendarOutlined"/>

							<span class="ml-1">2006/5/7</span>
						</n-flex>
					</n-tag>

					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="Bone"/>

							<span class="ml-1">属狗</span>
						</n-flex>
					</n-tag>

					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="ZodiacTaurus"/>

							<span class="ml-1">金牛座</span>
						</n-flex>
					</n-tag>

					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="Ruler"/>

							<span class="ml-1">176cm 94kg</span>
						</n-flex>
					</n-tag>

					<n-tag class="md:w-fit">
						<n-flex :size="0" align="center">
							<n-icon :component="Puzzle"/>

							<span class="ml-1">INTJ-A-H</span>
						</n-flex>
					</n-tag>
				</n-flex>

				<div class="h-5"/>

				<n-flex :size="0" vertical>
					<n-text type="success">全栈开发 是只福瑞</n-text>

					<n-flex :size="0">
						<n-text type="error">学习很差</n-text>
						<span class="mx-1">目前在</span>
						<n-text type="info">目前在江西应用工程职业学院 (下埠校区)</n-text>
						<span class="mx-1">就读</span>
						<span class="mr-1">专业是</span>
						<n-text type="success">计算机应用技术</n-text>
					</n-flex>

					<n-text :depth="3" delete>也许是一名不合格的全栈开发者</n-text>

					<n-text type="info">或许啥技术都会点 喜欢探索尝试新东西</n-text>
					<n-text type="success">喜欢开源 有良好的 git 提交消息规范</n-text>
				</n-flex>

				<n-flex :size="0" align="center">
					<span>也可以在</span>

					<div class="mx-1">
						<router-link v-slot="{ href }" :to="{ name: '首页' }">
							<n-a :href="href" type="primary">首页</n-a>
						</router-link>
					</div>

					<span>中了解到我的其它信息, 包括</span>

					<div class="ml-1">
						<n-flex align="center" size="small">
							<n-tag type="info">社交账号</n-tag>

							<n-tag type="info">
								<router-link v-slot="{ href }" :to="{ name: '游戏' }">
									<n-a :href="href">玩的游戏</n-a>
								</router-link>
							</n-tag>

							<n-tag type="info">
								<router-link v-slot="{ href }" :to="{ name: '兽设列表' }">
									<n-a :href="href">我的兽设</n-a>
								</router-link>
							</n-tag>

							<n-tag type="info">加入的组织</n-tag>
							<n-tag type="info">做过的项目</n-tag>

							<span>和</span>

							<n-tag type="info">好朋友们</n-tag>
						</n-flex>
					</div>
				</n-flex>

				<n-divider class="!my-0"/>

				<div class="leading-tight">
					<n-text type="error">🙅‍ 不抽烟 不酗酒 不会打麻将</n-text>
					<br>
					<n-text type="success">😋 爱喝奶茶 并尤其喜欢古茗 (?)</n-text>
				</div>

				<n-divider class="!my-0"/>

				<div class="leading-tight">
					<n-text type="error">在现实中大多数场景下不合群</n-text>
					<br>
					<n-text type="info">被动型发言, 没有雷点, 想和所有人交朋友, 不怕烦 !</n-text>
					<br>
					<n-text type="warning">内耗型, 如非必要不会麻烦别人</n-text>
					<br>
					<n-text type="success">欢迎找我聊天 !</n-text>
					<br><br>
					<n-text type="error">只有一点 如非必要请麻烦尽量文字交流 或者你说话我打字 不是很敢在网络上对陌生人说话 QAQ</n-text>
				</div>
			</n-flex>
		</n-card>
	</custom-sub-page>
</template>