
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import scratchesMain from './assets/13_nozzle_scratches_main 2.png'
import scratchesSurface from './assets/13_nozzle_scratches_surface_closeup 2.png'
import scratchesEdge from './assets/13_nozzle_scratches_edge_detail 2.png'
import scratchesAngle from './assets/13_nozzle_scratches_angle 2.png'

const causes = [
  'Избыточное экструдирование.',
  'Сопло недостаточно поднимается при перемещении.',
  'Слишком высокая температура печати.',
  'Неправильные настройки втягивания.',
  'Неподходящая траектория перемещения головки.',
]

const solutions = [
  'Проверить, включена ли ретракция.',
  'Проверить настройки подъёма сопла при перемещении (Z-hop или Z-lift).',
  'При необходимости настроить высоту подъёма сопла.',
  'Проверить функцию Combing и попробовать изменить её настройки.',
  'Проверить температуру печати.',
  'Если следы сохраняются, проверить траекторию движения головки и геометрию модели.',
]

function Scratches() {
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
            <img src={scratchesMain} alt="Царапины на поверхности модели" />
            <img src={scratchesSurface} alt="Следы сопла крупным планом" />
            <img src={scratchesEdge} alt="Царапины на краю модели" />
            <img src={scratchesAngle} alt="Диагональные следы сопла" />
          </div>

          <div className="warping-heading">
            <h1>Царапины (следы сопла)</h1>

            <p>Диагональные следы сопла, царапины от сопла.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На внешней поверхности модели заметны диагональные
              линии, царапины или бороздки. Иногда они проходят
              от одного края детали к другому.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Сопло может задевать уже напечатанные участки модели
            во время перемещения. При контакте с поверхностью
            оно оставляет механические следы или царапины.
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

export default Scratches
