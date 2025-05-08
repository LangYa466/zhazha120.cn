<script lang="ts" setup>
import osumania from '~/data/osumania'
import { isDesktop, isMobile } from '~/shared/responsive'
</script>

<template>
	<n-card size="small" title="osu!mania">
		<n-flex size="small" vertical>
			<n-flex :align="isMobile ? 'center' : undefined" :vertical="isMobile" justify="space-evenly">
				<span class="text-blue-300 fw-bold">叠 (Jack): {{ osumania.jack }}</span>

				<div v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-yellow-300 fw-bold">技 (Tech): {{ osumania.tech }}</span>

				<div v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-red-300 fw-bold">乱 (Speed): {{ osumania.speed }}</span>

				<div v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-green-300 fw-bold">切 (Stream): {{ osumania.stream }}</span>

				<div v-if="isDesktop">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-purple-300 fw-bold">面 (Long Note): {{ osumania.long_note }}</span>
			</n-flex>

			<n-divider class="!my-0"/>

			<n-image :img-props="{ class: 'size-full' }" :src="(`https://osu-sig.vercel.app/card?user=${osumania.id}&mode=mania&animation=true`)"/>
		</n-flex>

		<template #action>
			<n-flex justify="center" size="small" wrap>
				<template v-for="button in osumania.buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>

<style lang="scss" scoped>
@use '~/styles/utils';
</style>