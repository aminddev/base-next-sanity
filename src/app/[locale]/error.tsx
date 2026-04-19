'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-8 p-12 glass rounded-3xl border border-destructive/20 shadow-2xl">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h1 className="text-4xl font-black tracking-tight">Something went wrong</h1>
          <p className="text-muted-foreground text-lg italic">
            "Even the most beautiful code can have a bad day."
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={() => reset()}
            className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg active:scale-95"
          >
            Try again
          </button>
          <a
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Back to safety
          </a>
        </div>
      </div>
    </div>
  )
}
