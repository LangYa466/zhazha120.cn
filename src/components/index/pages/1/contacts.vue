<script lang="ts" setup>
import { MoreOutlined, SearchOutlined } from '@vicons/antd'
import information from '~/data/information'
import { isMobile } from '~/shared/isMobile'

const { define: ContactsDefine, reuse: Contacts } = createReusableTemplate<{
	readonly contacts: typeof information.contacts
}>()
</script>

<template>
	<ContactsDefine v-slot="{ contacts }">
		<template v-for="button in contacts">
			<custom-button secondary v-bind="button"/>
		</template>
	</ContactsDefine>

	<n-flex :wrap="false" inline justify="center" size="small">
		<template v-if="isMobile">
			<custom-modal preset="card" title="找到我">
				<template #trigger="{ toggle }">
					<n-button @click="toggle">
						<template #icon>
							<n-icon :component="SearchOutlined"/>
						</template>

						找到我
					</n-button>
				</template>

				<n-flex inline justify="center" size="small">
					<Contacts :contacts="information.contacts"/>
				</n-flex>
			</custom-modal>
		</template>

		<template v-else>
			<Contacts :contacts="information.contacts.filter(contact => !contact.hide)"/>

			<custom-modal preset="card" title="更多">
				<template #trigger="{ toggle }">
					<n-button secondary @click="toggle">
						<template #icon>
							<n-icon :component="MoreOutlined"/>
						</template>

						更多
					</n-button>
				</template>

				<n-flex inline justify="center" size="small">
					<Contacts :contacts="information.contacts.filter(contact => contact.hide)"/>
				</n-flex>
			</custom-modal>
		</template>
	</n-flex>
</template>