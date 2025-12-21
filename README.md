# Психолог Яна Дубровская — сайт визитка

Веб‑сайт клинического психолога: статические страницы «Главная», «Образование», «Информированное согласие», «FAQ». Используются интерактивные эффекты (параллакс блобов), светлая/тёмная тема, статичный OG, а также якорная навигация с главной.

## Технологии
- **Next.js 16 (app router, React 19, Turbopack)** — SPA/PWA‑опыт с SSR/SSG.
- **Tailwind CSS 4** + кастомные шрифты (Inter, Lora).
- **Radix UI** (navigation menu, popover/accordion), **lucide-react** (иконки).
- **next-themes** (переключатель светлой/тёмной темы).

## Запуск и сборка
```bash
npm run dev      # локальная разработка (turbopack)
npm run build    # продакшен‑сборка
npm start        # запуск продакшен‑сборки
npm run lint     # ESLint (a11y включён)
```

## Переменные окружения
- `NEXT_PUBLIC_SITE_URL` — базовый URL сайта (например, `https://psych-site-dubrovskaya.vercel.app`). Нужен для корректных OG/каноникал ссылок и sitemap/robots.

## OG и статика
- Статичная OG‑картинка лежит в `public/opengraph-image.png`. Метаданные используют путь `https://<SITE_URL>/opengraph-image.png`.
- Другие статические файлы: `public/photoBig.png`, `public/photoSmall.png`, PDF согласия в `public/`.

## Структура
- `src/app` — маршруты (страницы `/`, `/main`, `/education`, `/consent`, `/faq`, `opengraph-image.js` для динамики, sitemap/robots).
- `src/components` — layout, секции, UI (Radix), shared компоненты (SectionContainer/PageSection, иконки).
- `src/hooks` — хук глобального параллакса.
- `src/lib/seo.js` — сборка метаданных (OG/Twitter, canonical).

## Особенности и доступность
- Хедер/футер содержат якорные ссылки на секции главной; активные состояния и `aria` настроены.
- Фокус видимый (`:focus-visible`), есть skip‑link к `#main`.
- Мобильное меню — Popover с фокус‑трапом и закрытием по Escape/клику вне.
- Декоративные SVG помечены `aria-hidden`/`focusable="false"`.

## Проверка качества
- ESLint с `next/core-web-vitals` + `eslint-plugin-jsx-a11y`.
- Следить за предупреждениями `next/image`: у `fill` картинок заданы `sizes` или разумные `width/height`.

## Деплой
- Vercel (рекомендуется). После деплоя обнови `NEXT_PUBLIC_SITE_URL` в настройках проекта, очисти OG‑кэш (Facebook/LinkedIn) при смене картинки.
