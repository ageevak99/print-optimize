import { useState } from 'react'

import logo from './assets/logo.jpg'
import heroImage from './assets/hero.png'
import telegramIcon from './assets/telegram-2.png'

import './App.css'

import Catalog from './Catalog'
import Warping from './Warping'
import UnderExtrusion from './UnderExtrusion'
import OverExtrusion from './OverExtrusion'
import TopLayerGaps from './TopLayerGaps'
import Stringing from './Stringing'
import Overheating from './Overheating'
import LayerShifting from './LayerShifting'
import About from './About'
import Delamination from './Delamination'
import WrongGeometry from './WrongGeometry'
import ElephantsFoot from './ElephantsFoot'
import Blobs from './Blobs'
import Waviness from './Waviness'
import Scratches from './Scratches'
import PoorInfill from './PoorInfill'
import MissingLayers from './MissingLayers'
import AxisMisalignment from './AxisMisalignment'
import InfillContourGaps from './InfillContourGaps'
import FilamentGrinding from './FilamentGrinding'
import TinyDetails from './TinyDetails'
import ZBanding from './ZBanding'
import InconsistentExtrusion from './InconsistentExtrusion'
import CurlingCorners from './CurlingCorners'
import ThinWallGaps from './ThinWallGaps'
import ModelStuckToBed from './ModelStuckToBed'
import DimensionalAccuracy from './DimensionalAccuracy'
import Sagging from './Sagging'
import NoExtrusionStart from './NoExtrusionStart'

const TELEGRAM_URL = 'https://t.me/PrintOptimize_agent'

// Все страницы сайта
const pages = {
  '/catalog': Catalog,
  '/warping': Warping,
  '/under-extrusion': UnderExtrusion,
  '/over-extrusion': OverExtrusion,
  '/top-layer-gaps': TopLayerGaps,
  '/stringing': Stringing,
  '/overheating': Overheating,
  '/layer-shifting': LayerShifting,
  '/about': About,
  '/delamination': Delamination,
  '/wrong-geometry': WrongGeometry,
  '/elephants-foot': ElephantsFoot,
  '/blobs': Blobs,
  '/waviness': Waviness,
  '/scratches': Scratches,
  '/poor-infill': PoorInfill,
  '/missing-layers': MissingLayers,
  '/axis-misalignment': AxisMisalignment,
  '/infill-contour-gaps': InfillContourGaps,
  '/filament-grinding': FilamentGrinding,
  '/tiny-details': TinyDetails,
  '/z-banding': ZBanding,
  '/inconsistent-extrusion': InconsistentExtrusion,
  '/curling-corners': CurlingCorners,
  '/thin-wall-gaps': ThinWallGaps,
  '/model-stuck-to-bed': ModelStuckToBed,
  '/dimensional-accuracy': DimensionalAccuracy,
  '/sagging': Sagging,
  '/no-extrusion-start': NoExtrusionStart
  
}

function App() {
  const [search, setSearch] = useState('')

  // Определяем текущую страницу
  const CurrentPage = pages[window.location.pathname]

  if (CurrentPage) {
    return <CurrentPage />
  }

  // Поиск по каталогу
  function handleSearch(event) {
    event.preventDefault()

    const query = search.trim()

    window.location.href = query
      ? `/catalog?search=${encodeURIComponent(query)}`
      : '/catalog'
  }

  // Главная страница
  return (
    <div className="site">
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="PrintOptimize" />
        </a>

        <nav className="navigation">
          <a href="/" className="active">Главная</a>
          <a href="/catalog">Каталог</a>
          <a href="/about">О проекте</a>
        </nav>

        <a
          href={TELEGRAM_URL}
          className="header-button"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegramIcon} alt="" />
          Найти по фото
        </a>
      </header>

      <main className="hero">
        <div className="hero-inner">
          <section className="hero-top">
            <div className="hero-text">
              <div className="eyebrow">
                СПРАВОЧНИК ДЛЯ 3-D ПЕЧАТИ
              </div>

              <h1>
                Разберись<br />
                в дефектах 3-D печати
              </h1>

              <p>
                Найди возможные причины и узнай,<br />
                как их устранить
              </p>
            </div>

            <div className="hero-visual">
              <img src={heroImage} alt="Детали 3D-печати" />
            </div>
          </section>

          <form className="home-search" onSubmit={handleSearch}>
            <span className="search-glass" />

            <input
              type="search"
              placeholder="Например, нити между деталями..."
              value={search}
              onChange={event => setSearch(event.target.value)}
              aria-label="Поиск дефектов"
            />

            <button type="submit" aria-label="Найти">
              <span className="button-glass" />
            </button>
          </form>

          <section className="telegram-card">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="telegram-icon"
              aria-label="Telegram"
            >
              <img src={telegramIcon} alt="" />
            </a>

            <div className="telegram-text">
  <strong>Не знаете, что это за дефект?</strong>
  <span>
    Отправьте фото в наш Telegram-бот —
    нейросеть определит возможные причины.
  </span>
</div>

            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="telegram-button"
            >
              Найти по фото
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
