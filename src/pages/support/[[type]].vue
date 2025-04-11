<script lang="ts" setup>
import support_qq from 'assets/support_0c09cbb09c10cb1626dd023e8df2a4ab3cda254c.webp?url'
import support_alipay from 'assets/support_601491a0dfddc1fa8383d1b491358be5d2c9c6a2.webp?url'
import support_alipay_red_packet from 'assets/support_bc4e1c58835d36a8267517e0c7f2e099ec32a435.webp?url'
import support_wechat from 'assets/support_e9b1159a310a4904f3a0bc799cf16124e88cc908.webp?url'

definePageMeta({
	name: '支持 & 赞助'
})

const route = useRoute()
const router = useRouter()

const currentSelected = computed({
	get: () => {
		if (route.params.type === '') {
			return
		}

		return route.params.type
	},
	set: (value: string) => {
		router.replace({
			params: {
				type: value
			}
		})
	}
})
</script>

<template>
	<div class="container mx-auto mt-5">
		<n-flex vertical>
			<custom-page-header/>

			<n-card size="small">
				<n-tabs v-model:value="currentSelected" animated type="segment">
					<n-tab-pane name="afdian" tab="爱发电">
						<n-flex vertical>
							<n-alert type="warning">需要注册账号, 介意的可以在上面切换其它支付方式</n-alert>

							<div class="relative cursor-pointer">
								<div class="absolute top-0 left-0 size-full bg-(black opacity-0) hover:bg-opacity-50" @click="showRedirectExternalWebsiteWarningModal('https://afdian.com/a/WOSHIZHAZHA120')"/>
								<iframe class="w-full h-screen border-none" src="https://afdian.com/a/WOSHIZHAZHA120"/>
							</div>
						</n-flex>
					</n-tab-pane>

					<n-tab-pane name="qq" tab="QQ">
						<div class="md:(w-100 mx-auto)">
							<n-image :img-props="{ class: 'size-full' }" :src="support_qq"/>
						</div>
					</n-tab-pane>

					<n-tab-pane name="wechat" tab="微信">
						<div class="md:(w-100 mx-auto)">
							<n-image :img-props="{ class: 'size-full' }" :src="support_wechat"/>
						</div>
					</n-tab-pane>

					<n-tab-pane name="alipay" tab="支付宝">
						<div class="md:(w-200 mx-auto)">
							<n-flex :wrap="false" align="center" class="lt-md:!flex-col">
								<n-image :img-props="{ class: 'size-full' }" :src="support_alipay_red_packet" class="rounded-2xl"/>
								<n-image :img-props="{ class: 'size-full' }" :src="support_alipay"/>
							</n-flex>
						</div>
					</n-tab-pane>
				</n-tabs>
			</n-card>
		</n-flex>
	</div>
</template>