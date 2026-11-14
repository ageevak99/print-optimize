
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import wallMain from './assets/23_thin_wall_gaps_blue_main 1.png'
import wallCloseup from './assets/23_thin_wall_gaps_blue_wall_closeup 1.png'
import wallSide from './assets/23_thin_wall_gaps_blue_side_angle 1.png'
import wallTop from './assets/23_thin_wall_gaps_blue_top_view 1 (1).png'

const causes = [
  'Толщина стенки не соответствует диаметру сопла.',
  'Неправильно настроена ширина линии экструзии.',
  'Слайсер не распознаёт узкие промежутки как область для заполнения.',
]

const solutions = [
  'Проверить толщину стенки модели.',
  'Сопоставить толщину стенки с диаметром сопла.',
  'Проверить настройки Gap Fill (заполнение узких промежутков).',
  'При необходимости изменить ширину линии экструзии.',
  'Проверить предпросмотр модели перед печатью.',
]

function ThinWallGaps() {
  return (
    <div className="warping-page">
      <header className="warping-header">
        <a href="/" className="warping-logo">
          <img src={logo} alt="PrintOptimize" />
        </a>

        <nav className="warping-navigation">
          <a href="/">Главная</a>
          <a href="/catalog" className="active">Каталог</a>
          <a href="/about">О проекте</a>
        </nav>

        <a
          href="https://t.me/PrintOptimize_agent"
          className="warping-telegram"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegramIcon} alt="" />
          Найти по фото
        </a>
      </header>

      <main className="warping-main">
        <section className="warping-intro">
          <div className="warping-gallery">
            <img src={wallMain} alt="Общий вид модели с тонкими стенками" />
            <img src={wallCloseup} alt="Крупный план щелей между стенками" />
            <img src={wallSide} alt="Тонкие стенки модели сбоку" />
            <img src={wallTop} alt="Вид модели сверху" />
          </div>

          <div className="warping-heading">
            <h1>Щели между тонкими стенками</h1>

            <p>Зазоры в тонких стенках.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Вместо сплошной тонкой стенки видны две
              отдельные линии пластика, между которыми
              остаётся узкая щель. Стенка выглядит
              разделённой или неплотной.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Толщина стенки модели не соответствует возможностям
            экструзирования принтера. Слайсер не может правильно
            заполнить узкое пространство между линиями пластика.
          </p>
        </section>

        <section className="warping-section">
          <h2>Возможные причины:</h2>

          <ol>
            {causes.map((cause, index) => (
              <li key={index}>{cause}</li>
            ))}
          </ol>
        </section>

        <section className="warping-section">
          <h2>Как устранить:</h2>

          <ul className="warping-solutions">
            {solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </section>

        <a href="/catalog" className="warping-back">
          ← Вернуться в каталог
        </a>
      </main>
    </div>
  )
}

export default ThinWallGaps
