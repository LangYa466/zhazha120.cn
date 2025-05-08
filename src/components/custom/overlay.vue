<template>
	<div class="relative cursor-pointer">
		<div class="absolute top-0 left-0 size-full bg-black transition-(opacity duration-300) opacity-0 hover:opacity-80" @click="showRedirectExternalWebsiteWarningModal('https://afdian.com/a/WOSHIZHAZHA120')">
			<div class="absolute top-1/2 left-1/2 -translate-1/2">
				<slot/>
			</div>
		</div>

		<slot name="trigger"/>
	</div>
</template>