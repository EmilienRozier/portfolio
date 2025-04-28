import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            source: 'projects/*.md',
            type: 'page',
            schema: z.object({
                title: z.string(),
                desc: z.string(),
                tags: z.array(z.string()),
                date: z.date()
            })
        })
    }
})
