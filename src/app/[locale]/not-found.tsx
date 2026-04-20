import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function NotFound() {
  const t = useTranslations('NotFound')

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-8xl font-black text-muted/50 tracking-tighter">
          404
        </h1>
        <h2 className="text-3xl font-bold tracking-tight">
          {t('title')}
        </h2>
        <p className="text-xl text-muted-foreground">
          {t('description')}
        </p>
        <div className="pt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-foreground text-background px-8 py-3 text-sm font-semibold transition-all hover:bg-foreground/90 hover:scale-105 active:scale-95 shadow-lg"
          >
            {t('goHome')}
          </Link>
        </div>
      </div>
    </div>
  )
}
