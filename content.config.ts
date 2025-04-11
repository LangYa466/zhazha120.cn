import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
	collections: {
		furry: defineCollection({
			type: 'page',
			source: {
				cwd: 'src/contents',
				include: 'furry/*.md'
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