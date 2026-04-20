'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}

// Ensure the studio is only rendered on the client
export const dynamic = 'force-static'
