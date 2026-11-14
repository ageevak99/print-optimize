
import { useMemo, useState } from 'react'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'
import noExtrusionImage from './assets/Нет экструдирования.png'
import bentEdgesImage from './assets/Загивающиеся или неровные .png'

import './Catalog.css'

// Автоматически подключаем изображения из src/assets
const importedImages = import.meta.glob(
  './assets/*.{png,jpg,jpeg,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

// Нормализация названий файлов
function normalizeName(name) {
  return name
    .split('/')
    .pop()
    .toLowerCase()
    .replace(/\.[^.]+$/, '')
    .replace(/[^а-яёa-z0-9]/gi, '')
}

// Карта изображений
const imageMap = Object.fromEntries(
  Object.entries(importedImages).map(([path, url]) => [
    normalizeName(path),
    url,
  ])
)

// Каталог дефектов
const defects = [
  {
    title: 'Коробление',
    image: 'Коробление.png',
    href: '/warping',
  },
  {
    title: 'Недостаточное экструдирование',
    image: 'Недостаточное экструдирование.png',
    href: '/under-extrusion',
  },
  {
    title: 'Избыточное экструдирование',
    image: 'Избыточное экструдирование.png',
    href: '/over-extrusion',
  },
  {
    title: 'Щели, дыры на верхнем слое',
    image: 'Щели, дыры на верхнем слое.png',
    href: '/top-layer-gaps',
  },
  {
    title: 'Нити между деталями',
    image: 'Нити между деталями.png',
    href: '/stringing',
  },
  {
    title: 'Перегрев пластика',
    image: 'Перегрев пластика.png',
    href: '/overheating',
  },
  {
    title: 'Смещение слоев',
    image: 'Смещение слоев.png',
    href: '/layer-shifting',
  },
  {
    title: 'Разделение и расщепление слоев',
    image: 'Разделение и расщепление слоев.png',
    href: '/delamination',
  },
  {
    title: 'Неправильная геометрия модели',
    image: 'Неправильная геометрия модели.png',
    href: '/wrong-geometry',
  },
  {
    title: 'Слоновья нога',
    image: 'Слоновья нога.png',
    href: '/elephants-foot',
  },
  {
    title: 'Волнистость или рябь',
    image: 'Волнистость или рябь.png',
    href: '/waviness',
  },
  {
    title: 'Наплывы, натёки, сопли и прыщи',
    image: 'Наплывы, натёки, сопли и прыщи.png',
    href: '/blobs',
  },
  {
    title: 'Царапины (следы сопла)',
    image: 'Царапины (следы сопла).png',
    href: '/scratches',
  },
  {
    title: 'Плохое наполнение',
    image: 'Плохое наполнение.png',
    href: '/poor-infill',
  },
  {
    title: 'Пропуск слоев',
    image: 'Пропуск слоев.png',
    href: '/missing-layers',
  },
  {
    title: 'Несоблюдение осей',
    image: 'Несоблюдение осей.png',
    href: '/axis-misalignment',
  },
  {
    title: 'Щели между наполнением и контуром',
    image: 'Щели.png',
    href: '/infill-contour-gaps',
  },
  {
    title: 'Филамент стачивается, пластик крошится',
    image: 'Филамент стачивается, пластик крошится.png',
    href: '/filament-grinding',
  },
  {
    title: 'Очень мелкие детали не пропечатываются',
    image: 'Очень мелкие детали не пропечатываются.png',
    href: '/tiny-details',
  },
  {
    title: 'Линии на боках распечатки',
    image: 'Линии на боках распечатки.png',
    href: '/z-banding',
  },
  {
    title: 'Неравномерное экструдирование',
    image: 'Неравномерное экструдирование.png',
    href: '/inconsistent-extrusion',
  },
  {
    title: 'Загибающиеся или неровные углы и края',
    image: 'Загивающиеся или неровные .png',
    href: '/curling-corners',
  },
  {
    title: 'Щели между тонкими стенками',
    image: 'Щели между тонкими стенками.png',
    href: '/thin-wall-gaps',
  },
  {
    title: 'Модель не снимается со стола',
    image: 'Модель не снимается со стола.png',
    href: '/model-stuck-to-bed',
  },
  {
    title: 'Неточность размеров',
    image: 'Неточность размеров.png',
    href: '/dimensional-accuracy',
  },
  {
    title: 'Провисание некоторых частей модели',
    image: 'Провисание некоторых частей модели.png',
    href: '/sagging',
  },
  {
    title: 'Нет экструзирования при начале печати',
    image: 'Нет экструдирования.png',
    href: '/no-extrusion-start',
  },
]

export default function Catalog() {
  const [search, setSearch] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('search') || ''
  })

  const filteredDefects = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return defects

    return defects.filter(defect =>
      defect.title.toLowerCase().includes(query)
    )
  }, [search])

  return (
    <div className="defects-page">
      <header className="defects-header">
        <a href="/" className="defects-logo">
          <img src={logo} alt="PrintOptimize" />
        </a>

        <nav className="defects-navigation">
          <a href="/">Главная</a>
          <a href="/catalog" className="current">Каталог</a>
          <a href="/about">О проекте</a>
        </nav>

        <a
          href="https://t.me/PrintOptimize_agent"
          className="defects-telegram"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegramIcon} alt="" />
          Найти по фото
        </a>
      </header>

      <main className="defects-main">
        <section className="defects-heading">
          <h1>Каталог дефектов</h1>
          <p>С какой проблемой вы столкнулись?</p>
        </section>

        <form
          className="defects-search"
          onSubmit={event => event.preventDefault()}
        >
          <span className="defects-search-glass" />

          <input
            type="search"
            placeholder="Поиск по дефектам, например, смещение слоев..."
            value={search}
            onChange={event => setSearch(event.target.value)}
            aria-label="Поиск по дефектам"
          />

          <button type="submit" aria-label="Найти">
            <span className="defects-button-glass" />
          </button>
        </form>

        <section className="defects-grid">
          {filteredDefects.map(defect => {
            const image =
              typeof defect.image === 'string'
                ? imageMap[normalizeName(defect.image)]
                : defect.image

            const Tile = defect.href ? 'a' : 'article'

            return (
              <Tile
                className="defect-tile"
                key={defect.title}
                {...(defect.href ? { href: defect.href } : {})}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <div className="defect-tile-image">
                  {image ? (
                    <img src={image} alt={defect.title} />
                  ) : (
                    <div className="defect-image-missing">
                      Изображение не найдено
                    </div>
                  )}
                </div>

                <div className="defect-tile-title">
                  {defect.title}
                </div>
              </Tile>
            )
          })}
        </section>

        {filteredDefects.length === 0 && (
          <div className="defects-empty">
            По запросу «{search}» ничего не найдено.
            Попробуйте другое название.
          </div>
        )}
      </main>
    </div>
  )
}