<script lang="ts" setup>
import { useDialog, useLoadingBar, useMessage, useModal, useNotification } from 'naive-ui'

const nuxt = useNuxtApp()

Object.entries({
	dialog: useDialog(),
	message: useMessage(),
	modal: useModal(),
	notification: useNotification(),
	loadingBar: useLoadingBar()
}).map(async ([name, api]) => {
	nuxt.provide(name, api)
})
</script>

<template/>