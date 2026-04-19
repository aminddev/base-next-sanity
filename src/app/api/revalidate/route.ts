import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: { current: string }
      _id: string
    }>(req, process.env.SANITY_REVALIDATE_SECRET)

    if (!isValidSignature) {
      return new NextResponse('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new NextResponse('Bad Request', { status: 400 })
    }

    // 1. Revalidate by Type (Generic)
    revalidateTag(body._type)

    // 2. Revalidate by Specific Slug (Granular)
    if (body.slug?.current) {
      revalidateTag(`${body._type}:${body.slug.current}`)
    }

    // 3. Revalidate by Document ID (Safety)
    revalidateTag(body._id)

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      tags: [body._type, body.slug?.current, body._id].filter(Boolean)
    })
  } catch (err: any) {
    console.error(err)
    return new NextResponse(err.message, { status: 500 })
  }
}
