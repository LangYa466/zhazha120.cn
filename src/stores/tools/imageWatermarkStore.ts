import type { UploadFileInfo, WatermarkProps } from 'naive-ui'

export const useToolsImageWatermarkStore = defineStore('tools.image-watermark', {
	state: (): {
		readonly image: {
			readonly src: string

			readonly width: number
			readonly height: number
		} | null

		readonly watermark: WatermarkProps
	} => ({
		image: null,
		watermark: {
			content: '渣渣120',
			cross: true,
			debug: false,
			fontSize: 20,
			fontFamily: 'HarmonyOS Sans SC',
			fontStyle: 'normal',
			fontVariant: '',
			fontWeight: 900,
			fontColor: 'rgba(128, 128, 128, .3)',
			fullscreen: false,
			globalRotate: -15,
			lineHeight: 10,
			height: 22,
			image: '',
			imageHeight: 0,
			imageOpacity: 1,
			imageWidth: 0,
			rotate: 0,
			selectable: true,
			textAlign: 'center',
			width: 154,
			xGap: 2,
			xOffset: 0,
			yGap: 0,
			yOffset: 10,
			zIndex: 10
		}
	}),
	getters: {
		sizeStyles(store) {
			if (store.image === null) {
				return null
			}

			return {
				width: store.image.width + 'px',
				height: store.image.height + 'px'
			}
		}
	},
	actions: {
		async processUploadFile(uploadFile: UploadFileInfo) {
			if (uploadFile.file === undefined || uploadFile.file === null) {
				return
			}

			const src = URL.createObjectURL(uploadFile.file)

			const [width, height] = await new Promise<[number, number]>(resolve => {
				const image = document.createElement('img')

				image.addEventListener('load', () => {
					resolve([
						image.naturalWidth,
						image.naturalHeight
					])
				}, {
					once: true
				})

				image.src = src
			})

			this.$patch({
				image: {
					src,
					width,
					height
				}
			})
		}
	}
})