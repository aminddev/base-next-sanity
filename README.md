# 🚀 Next.js 16 + Sanity v3 Production-Ready Boilerplate

A high-performance, multi-language, and SEO-optimized blog boilerplate built for the modern web. Engineered for massive scale, visual excellence, and a premium developer experience.

![Sanity Next.js Banner](https://raw.githubusercontent.com/sanity-io/next-sanity/main/assets/next-sanity-banner.png)

## ✨ Key Features

### 🎨 Visual & Frontend
- **Next.js 16 (App Router)**: Utilizing the latest React Server Components and streaming.
- **Tailwind CSS 4**: Optimized CSS-first styling with OKLCH color support.
- **Visual Editing (Stega)**: Real-time "Click-to-Edit" directly on the live site using Sanity Presentation Tool.
- **Premium Design**: Integrated Glassmorphism, Dark Mode defaults, and smooth micro-animations.

### 🌍 Internationalization (i18n)
- **Multi-language Support**: Pre-configured for English (EN) and Thai (TH).
- **Hybrid Strategy**: Document-level translation in Sanity for rich content and `next-intl` for UI localization.
- **Automatic Routing**: Locale-prefixed URLs with browser language detection.

### ⚡ Performance (Core Web Vitals)
- **Zero CLS**: Custom `SanityImage` component with metadata-driven aspect ratio management.
- **Next-Gen Images**: AVIF and WebP support with automated Sanity CDN resizing.
- **LCP Optimization**: Priority loading for hero assets and critical font pre-connection.
- **Vercel Speed Insights**: Built-in monitoring for real-world performance metrics.

### 🔍 Advanced SEO & Metadata
- **Dynamic Metadata**: Automatic SEO tags (Title, Description, OG) derived from CMS content.
- **JSON-LD**: Article structured data injected server-side for Rich search results.
- **Auto-generated Assets**: Dynamic `sitemap.xml` and `robots.txt` fetching from Sanity.

### 🛡️ Security & Caching
- **Granular Revalidation**: Tag-based cache purging (`post:${slug}`) for surgical precision.
- **Safety Net**: 1-hour stale-while-revalidate fallback for maximum uptime.
- **Webhook Validation**: Cryptographic signature checking for Sanity revalidation events.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **CMS**: [Sanity.io v3](https://www.sanity.io/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Type Safety**: [Sanity TypeGen](https://www.sanity.io/docs/sanity-typegen) + TypeScript
- **Monitoring**: [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/aminddev/base-next-sanity.git
cd base-next-sanity
npm install
```

### 2. Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_READ_TOKEN="your_read_token"
SANITY_REVALIDATE_SECRET="your_webhook_secret"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Run Development
```bash
npm run dev
```

### 4. Sanity Studio
Access the embedded Studio at `/studio` or run standalone:
```bash
npm run studio
```

---

## 🏗️ Project Structure

```text
src/
├── app/
│   ├── [locale]/      # Localization dynamic segment
│   ├── api/           # Revalidation & Draft Mode handlers
│   └── studio/        # Embedded Sanity Studio
├── components/        # Optimized UI components (SanityImage, PortableText)
├── i18n/              # next-intl configuration & routing
├── sanity/            # Sanity schemas, client, and queries
└── messages/          # Translation dictionaries (en.json, th.json)
```

---

## 🤝 Contribution
Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License
MIT License. Created with ❤️ by [Aminddev](https://github.com/aminddev).
