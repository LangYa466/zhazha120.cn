<script lang="ts" setup>
import tetrio from '~/data/tetrio'

const generateOverlay = (layout: 'horizontal' | 'vertical') => {
	const query = Object.entries({
		username: tetrio.id,
		'display-name': true,
		'display-level': true,
		'display-role': true,
		'display-badge': true,
		'display-rank': true,
		'display-league': true,
		'display-sprint': true,
		'display-blitz': true,
		'display-standingsets': true,
		'display-standingsets-sprint': true,
		'display-standingsets-blitz': true,
		alignment: 'top',
		layout,
		league: ['apm', 'pps', 'vs', 'x_winrate', 'percentile'].join('+'),
		sprint: ['pieces', 'pps', 'ff', 'kpp', 'kps', 'quads'].join('+'),
		blitz: ['pps', 'ff', 'spp', 'pieces', 'pieces', 'quads', 'tspins', 'allclears'].join('+')
	}).map(option => {
		return option.join('=')
	}).join('&')

	return `https://tetr.fires.bz/overlay/user?${query}`
}

const router = useRouter()

const handleButtonClick = (button: typeof tetrio.buttons[0]) => {
	if (!button.is_external) {
		router.push({
			path: button.href
		})

		return
	}

	showRedirectExternalWebsiteWarningModal(button.href)
}
</script>

<template>
	<n-card size="small" title="tetr.io">
		<n-flex vertical>
			<n-flex class="lt-md:(!flex-col items-center)" justify="space-evenly">
				<n-flex align="center" size="small" vertical>
					<n-text class="fw-bold" type="info">40L</n-text>

					<n-divider class="!my-0"/>

					<n-timeline>
						<template v-for="record in tetrio.timelines.sprint">
							<n-timeline-item :time="record.archive_at.toLocaleDateString()" type="info">
								<template #header>
									<span class="fw-bold">{{ record.time }}</span>
								</template>
							</n-timeline-item>
						</template>
					</n-timeline>
				</n-flex>

				<n-flex align="center" size="small" vertical>
					<n-text class="fw-bold" type="warning">Blitz</n-text>

					<n-divider class="!my-0"/>

					<n-timeline>
						<template v-for="record in tetrio.timelines.blitz">
							<n-timeline-item :time="record.archive_at.toLocaleDateString()" type="warning">
								<template #header>
									<span class="fw-bold">{{ record.score }}</span>
								</template>
							</n-timeline-item>
						</template>
					</n-timeline>
				</n-flex>

				<n-flex align="center" size="small" vertical>
					<n-text class="fw-bold" type="error">第 1 赛季 段位</n-text>

					<n-divider class="!my-0"/>

					<n-timeline>
						<template v-for="record in tetrio.timelines.season_1">
							<n-timeline-item :time="record.archive_at.toLocaleDateString()" type="error">
								<template #header>
									<n-popover>
										<template #trigger>
											<n-image :img-props="{ class: 'w-6' }" :src="(`https://tetr.io/res/league-ranks/${record.rank}.png`)"/>
										</template>

										{{ record.rank.toUpperCase() }}
									</n-popover>
								</template>
							</n-timeline-item>
						</template>
					</n-timeline>
				</n-flex>

				<n-flex align="center" size="small" vertical>
					<n-text class="fw-bold" type="success">第 2 赛季 段位</n-text>

					<n-divider class="!my-0"/>

					<n-timeline>
						<template v-for="record in tetrio.timelines.season_2">
							<n-timeline-item :time="record.archive_at.toLocaleDateString()" type="success">
								<template #header>
									<n-popover>
										<template #trigger>
											<n-image :img-props="{ class: 'w-6' }" :src="(`https://tetr.io/res/league-ranks/${record.rank}.png`)"/>
										</template>

										{{ record.rank.toUpperCase() }}
									</n-popover>
								</template>
							</n-timeline-item>
						</template>
					</n-timeline>
				</n-flex>
			</n-flex>

			<iframe :src="generateOverlay('horizontal')" class="lt-md:hidden border-none w-full h-250 md:h-60"/>
			<iframe :src="generateOverlay('vertical')" class="md:hidden border-none w-full h-250 md:h-60"/>

			<n-divider class="!my-0">背景</n-divider>

			<n-image :img-props="{ class: 'size-full' }" src="https://cdn.zhazha120.cn/download/tetrio_background.webp"/>
		</n-flex>

		<template #footer>
			<n-flex align="center" class="lt-md:!flex-col">
				<template v-for="button in tetrio.buttons">
					<n-button @click="handleButtonClick(button)">
						<template #icon>
							<Component :is="button.icon()"/>
						</template>

						{{ button.name }}
					</n-button>
				</template>
			</n-flex>
		</template>
	</n-card>
</template>