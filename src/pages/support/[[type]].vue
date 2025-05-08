<script lang="ts" setup>
import { LinkOutlined } from '@vicons/antd'
import support_qq from 'assets/support_0c09cbb09c10cb1626dd023e8df2a4ab3cda254c.webp?url'
import support_alipay from 'assets/support_601491a0dfddc1fa8383d1b491358be5d2c9c6a2.webp?url'
import support_alipay_red_packet from 'assets/support_bc4e1c58835d36a8267517e0c7f2e099ec32a435.webp?url'
import support_wechat from 'assets/support_e9b1159a310a4904f3a0bc799cf16124e88cc908.webp?url'
import { isDesktop, isMobile } from '~/shared/responsive'

definePageMeta({
	name: '支持 & 赞助'
})

const route = useRoute()
const router = useRouter()

const currentSelected = computed({
	get: () => {
		const type = String(route.params.type)

		if (type === '') {
			return
		}

		return type
	},
	set: (value: string) => {
		router.push({
			params: {
				type: value
			},
			replace: true
		})
	}
})
</script>

<template>
	<custom-sub-page>
		<n-card size="small">
			<n-tabs v-model:value="currentSelected" animated type="segment">
				<n-tab-pane name="afdian" tab="爱发电">
					<n-flex vertical>
						<n-alert type="warning">需要注册账号, 介意的可以在上面切换其它支付方式</n-alert>

						<custom-overlay>
							<template #trigger>
								<iframe class="w-full h-screen border-none" src="https://afdian.com/a/WOSHIZHAZHA120"/>
							</template>

							<n-button :focusable="false" text type="primary">
								<template #icon>
									<n-icon :component="LinkOutlined"/>
								</template>

								点击跳转
							</n-button>
						</custom-overlay>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="qq" tab="QQ">
					<n-flex justify="center">
						<n-image :img-props="{ class: 'size-full md:h-100' }" :src="support_qq"/>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="wechat" tab="微信">
					<n-flex justify="center">
						<n-image :img-props="{ class: 'size-full md:h-100' }" :src="support_wechat"/>
					</n-flex>
				</n-tab-pane>

				<n-tab-pane name="alipay" tab="支付宝">
					<n-flex :justify="isDesktop ? 'space-evenly' : undefined" :vertical="isMobile" :wrap="false">
						<n-image :img-props="{ class: 'size-full md:h-100' }" :src="support_alipay_red_packet" class="rounded-3xl"/>
						<n-image :img-props="{ class: 'size-full md:h-100' }" :src="support_alipay"/>
					</n-flex>
				</n-tab-pane>
			</n-tabs>
		</n-card>
	</custom-sub-page>
</template>