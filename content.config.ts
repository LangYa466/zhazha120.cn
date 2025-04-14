import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		accuracy_calculator_presets: defineCollection({
			type: 'data',
			source: {
				cwd: 'src/contents/tools/accuracy-calculator/presets',
				include: '*.json',
				exclude: ['_schema.json']
			},
			schema: z.object({
				name: z.string(),
				maps: z.array(
					z.object({
						title: z.string(),
						notes: z.number()
					})
				),
				require_accuracy: z.number()
			})
		}),
		furry: defineCollection({
			type: 'page',
			source: {
				cwd: 'src/contents/furry',
				include: '*.md'
			},
			schema: z.object({
				code: z.string(),
				name: z.string(),
				description: z.string(),
				image_hash: z.string(),
				animal: z.string()
			})
		})
	}
})