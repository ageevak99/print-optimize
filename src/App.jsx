
import { useState } from 'react'
import logo from './assets/logo.jpg'
import heroImage from './assets/hero.png'
import telegramIcon from './assets/telegram-2.png'
import './App.css'

const TELEGRAM_URL = 'https://t.me/'

function App() {
  const [search, setSearch] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    const query = search.trim()
    window.location.href = query
      ? `/catalog?search=${encodeURIComponent(query)}`
      : '/catalog'
  }

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

        <a href={TELEGRAM_URL} className="header-button"
          target="_blank" rel="noreferrer">
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
            <a href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="telegram-icon"
              aria-label="Telegram">
              <img src={telegramIcon} alt="" />
            </a>

            <div className="telegram-text">
              <strong>Не знаете, что это за дефект?</strong>
              <span>
                Отправьте фото в наш Telegram-бот,<br />
                нейросеть определит возможные причины
              </span>
            </div>

            <a href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="telegram-button">
              Найти по фото
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
