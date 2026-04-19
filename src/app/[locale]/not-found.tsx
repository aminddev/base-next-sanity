import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-10 p-12 glass rounded-3xl border border-primary/20 shadow-2xl">
        <div className="space-y-6">
          <div className="relative inline-block">
            <span className="text-9xl font-black text-primary/10">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
          </div>
          <h1 className="text-4xl font-black tracking-tight">Page Not Found</h1>
          <p className="text-muted-foreground text-lg italic">
            "The content you are looking for has wandered off into the digital void."
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
