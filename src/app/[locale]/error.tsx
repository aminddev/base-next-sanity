'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('Error')

  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-md">
        <h2 className="text-4xl font-extrabold tracking-tight text-destructive">
          {t('title')}
        </h2>
        <p className="text-xl text-muted-foreground">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            {t('tryAgain')}
          </button>
          <Link
            href="/"
            className="rounded-full border border-input bg-background px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95 shadow-sm"
          >
            {t('goHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
