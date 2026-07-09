# Бани на реке Медвенка

Сайт-визитка бань на дровах у реки Медвенка (Лапино, МО).
Vite + React + TypeScript + React Router. Три страницы: Главная, Хутор, Бани.

## Запуск

```bash
npm install
npm run dev      # дев-сервер
npm run build    # продакшн-сборка в dist/
npm run preview  # предпросмотр сборки
```

## Структура

```
src/
  main.tsx            точка входа
  App.tsx             роутер + провайдер брони + ScrollToTop
  styles.css          вся дизайн-система (огонь+вода, Forum/Manrope)
  booking.tsx         контекст бронирования (useBooking)
  hooks.ts            useScrollReveal — анимация появления
  data/baths.ts       данные бань (правьте цены/описания здесь)
  components/         Nav, Footer, BookingModal, BathCard, BathDetail,
                      Raccoon, Contact, Ph, RiverLine, Arrow
  pages/              Home, Hutor, Bani
```

## Что заменить под боевой запуск

- **Фото/видео.** Везде компонент `<Ph label="...">` — это плейсхолдеры.
  Меняйте на `<img>`/`<video>` со своими файлами (положите в `public/` или `src/assets`).
- **Бронирование.** Форма в `components/BookingModal.tsx` собирает имя/телефон/баню
  и показывает «Спасибо». Реальная отправка — в функции `submit()` (см. `// TODO`).
  Логично слать заявку в Telegram-бота через `fetch` на ваш бэкенд/Bot API.
- **Карта.** Сейчас OpenStreetMap по координатам Лапино (`components/Contact.tsx`).
  Можно заменить на встраивание Яндекс.Карт с точным адресом.
- **Цены и тексты бань** правятся в одном месте — `data/baths.ts`.

## Деплой

Статика из `dist/` — на любой хостинг (Vercel, Netlify, Cloudflare Pages, обычный nginx).
Для роутинга нужен SPA-fallback на `index.html` (на Vercel/Netlify — из коробки).
# tri-mishki
