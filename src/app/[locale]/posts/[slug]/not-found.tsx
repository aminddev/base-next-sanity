import Link from 'next/link'

export default function PostNotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-black italic text-primary">Oops!</h1>
        <h2 className="text-3xl font-bold">This story hasn't been written yet.</h2>
        <p className="text-muted-foreground text-lg italic max-w-md mx-auto">
          "The post you are looking for might have been draft-ed away or moved to a secret archive."
        </p>
      </div>
      
      <div className="pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
        >
          Explore other stories
        </Link>
      </div>
    </div>
  )
}
