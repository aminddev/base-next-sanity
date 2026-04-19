import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { client } from './client'

const imageBuilder = createImageUrlBuilder({
  projectId: client.config().projectId || '',
  dataset: client.config().dataset || '',
})

export const urlFor = (source: Image) => {
  return imageBuilder.image(source)
}
