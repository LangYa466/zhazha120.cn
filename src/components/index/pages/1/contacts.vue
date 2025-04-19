<script lang="ts" setup>
import { SearchOutlined } from '@vicons/antd'
import information from '~/data/information'

const { define: ContactsDefine, reuse: Contacts } = createReusableTemplate()

const showModal = ref(false)
</script>

<template>
	<ContactsDefine>
		<n-flex align="center" class="lt-md:!flex-col w-full" justify="center">
			<template v-for="button in information.contacts">
				<div class="mobile-only">
					<custom-button v-bind="button"/>
				</div>

				<div class="desktop-only">
					<custom-button secondary size="small" v-bind="button"/>
				</div>
			</template>
		</n-flex>
	</ContactsDefine>

	<div class="mobile-only">
		<n-button @click="showModal = !showModal">
			<template #icon>
				<n-icon :component="SearchOutlined"/>
			</template>

			找到我
		</n-button>
	</div>

	<div class="desktop-only">
		<Contacts/>
	</div>

	<n-modal v-model:show="showModal" class="modal" preset="card" title="找到我">
		<div class="overflow-scroll">
			<Contacts/>
		</div>
	</n-modal>
</template>

<style lang="scss" scoped>
@use '~/styles/utils';
@use '~/styles/shared';
</style>