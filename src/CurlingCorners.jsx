
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import curlingTop from './assets/22_curling_corners_purple_top_view 1.png'
import curlingSide from './assets/22_curling_corners_purple_side_profile 1.png'
import curlingCloseup from './assets/22_curling_corners_purple_corner_closeup 1 (1).png'
import curlingDetail from './assets/22_curling_corners_purple_corner_closeup 1.png'

const causes = [
  'Перегрев пластика.',
  'Недостаточное сцепление с платформой.',
  'Неравномерное охлаждение слоёв.',
  'Неправильная температура печатного стола.',
  'Неверное положение сопла относительно платформы.',
]

const solutions = [
  'Проверить настройки охлаждения.',
  'Проверить температуру стола и сопла.',
  'Выполнить калибровку платформы.',
  'Проверить расстояние между соплом и столом.',
  'При необходимости использовать поверхность с лучшей адгезией.',
  'Попробовать нанести подходящий клеевой состав тонким равномерным слоем.',
]

function CurlingCorners() {
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
            <img src={curlingTop} alt="Загибающиеся углы модели сверху" />
            <img src={curlingCloseup} alt="Крупный план загибающегося угла" />
            <img src={curlingSide} alt="Загибание края модели сбоку" />
            <img src={curlingDetail} alt="Деформация угла модели крупным планом" />
          </div>

          <div className="warping-heading">
            <h1>Загибающиеся или неровные углы и края</h1>

            <p>Загибание краёв, деформация углов.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Отдельные края и углы модели загибаются вверх
              или теряют первоначальную форму. Иногда
              деформация заметна только на выступающих
              участках детали.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Во время печати края модели деформируются из-за
            неравномерного охлаждения или недостаточного
            сцепления с платформой. Внешне дефект может
            напоминать коробление, но не обязательно
            сопровождается отклеиванием всей модели.
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

export default CurlingCorners
