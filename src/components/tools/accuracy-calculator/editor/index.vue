<template>
	<n-card size="small">
		<n-flex :size="0" vertical>
			<tools-accuracy-calculator-editor-name/>
			<tools-accuracy-calculator-editor-maps/>
			<tools-accuracy-calculator-editor-require-accuracy/>
		</n-flex>

		<template #action>
			<tools-accuracy-calculator-editor-export/>
		</template>
	</n-card>
</template>