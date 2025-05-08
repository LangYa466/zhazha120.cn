<script lang="ts" setup>
import geometrydash from '~/data/geometrydash'
import { isMobile } from '~/shared/responsive'
</script>

<template>
	<n-card size="small" title="几何冲刺 (Geometry Dash)">
		<n-flex :align="isMobile ? 'center' : undefined" :vertical="isMobile" size="small">
			<n-image :img-props="{ class: 'h-20' }" :src="geometrydash.cube"/>
			<span class="text-3xl fw-bold">{{ geometrydash.name }}</span>
		</n-flex>

		<template #action>
			<n-flex justify="center">
				<template v-for="button in geometrydash.buttons">
					<custom-button v-bind="button"/>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>