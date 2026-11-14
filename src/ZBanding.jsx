
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import bandingMain from './assets/20_z_banding_main 1.png'
import bandingCloseup from './assets/20_z_banding_closeup 1.png'
import bandingAngle from './assets/20_z_banding_angle 1.png'
import bandingTopView from './assets/20_z_banding_top_view 1.png'

const causes = [
  'Неравномерное экструдирование.',
  'Колебания температуры экструдера.',
  'Неправильная установка вертикальных направляющих.',
  'Вибрации основания принтера.',
  'Резкие изменения направления движения механических элементов.',
  'Неправильные настройки шагового двигателя.',
]

const solutions = [
  'Проверить качество филамента.',
  'Проследить за стабильностью температуры экструдера.',
  'При заметных колебаниях температуры проверить PID-контроллер.',
  'Установить принтер на устойчивую поверхность.',
  'Проверить направляющие и механические элементы.',
  'Проверить настройки шагового двигателя.',
]

function ZBanding() {
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
            <img src={bandingMain} alt="Линии на боках распечатки" />
            <img src={bandingCloseup} alt="Полосы на поверхности модели крупным планом" />
            <img src={bandingAngle} alt="Вертикальные полосы на модели под углом" />
            <img src={bandingTopView} alt="Линии на слоях модели сверху" />
          </div>

          <div className="warping-heading">
            <h1>Линии на боках распечатки</h1>

            <p>Полосы на стенках.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На боковой поверхности модели видны повторяющиеся
              горизонтальные линии, полосы или бороздки. Иногда
              они располагаются через одинаковые промежутки
              по высоте детали.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Отдельные слои отличаются по внешнему виду от соседних.
            Это может быть связано с нестабильной подачей пластика,
            колебаниями температуры или механическими вибрациями
            принтера.
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

export default ZBanding
