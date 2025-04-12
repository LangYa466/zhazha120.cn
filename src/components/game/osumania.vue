<script lang="ts" setup>
import osumania from '~/data/osumania'
</script>

<template>
	<n-card size="small" title="osu!mania">
		<n-flex vertical>
			<n-flex :size="0" class="lt-md:(!flex-col text-center)" justify="space-evenly">
				<span class="text-blue-300 fw-bold">叠 (Jack): {{ osumania.jack }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-yellow-300 fw-bold">技 (Tech): {{ osumania.tech }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-red-300 fw-bold">乱 (Speed): {{ osumania.speed }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-green-300 fw-bold">切 (Stream): {{ osumania.stream }}</span>

				<div class="lt-md:hidden">
					<n-divider class="!my-0" vertical/>
				</div>

				<span class="text-purple-300 fw-bold">面 (Long Note): {{ osumania.long_note }}</span>
			</n-flex>

			<n-divider class="!my-0"/>

			<n-image :img-props="{ class: 'size-full' }" :src="(`https://osu-sig.vercel.app/card?user=${osumania.id}&mode=mania&animation=true`)"/>
		</n-flex>

		<template #footer>
			<n-flex align="center" class="lt-md:!flex-col">
				<template v-for="button in osumania.buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>