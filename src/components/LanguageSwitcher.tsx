'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname, routing } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { clsx } from 'clsx'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function handleLocaleChange(newLocale: string) {
    // @ts-ignore
    router.replace({ pathname, params }, { locale: newLocale })
  }

  return (
    <div className="flex gap-1 p-1 bg-muted rounded-full border border-border w-fit mx-auto my-8">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={clsx(
            'px-4 py-1.5 rounded-full text-sm font-medium transition-all',
            locale === loc
              ? 'bg-background text-primary shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
