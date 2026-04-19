import { PortableText as SanityPortableText, type PortableTextComponents } from 'next-sanity'
import SanityImage from './SanityImage'

const components: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="my-8">
          <SanityImage
            asset={value}
            alt={value.alt || 'Content image'}
            className="rounded-xl shadow-lg"
          />
        </div>
      )
    },
    code: ({ value }: any) => {
      return (
        <pre className="bg-slate-900 text-white p-4 rounded-lg my-6 overflow-x-auto">
          <code>{value.code}</code>
        </pre>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-10 mb-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-lg text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
}

export default function PortableText({ value }: { value: any }) {
  return <SanityPortableText value={value} components={components} />
}
