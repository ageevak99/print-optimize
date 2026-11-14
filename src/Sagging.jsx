
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import saggingFront from './assets/26_sagging_orange_front_detail 1.png'
import saggingUnderside from './assets/26_sagging_orange_underside_closeup 1.png'
import saggingMain from './assets/26_sagging_orange_main 1 (1).png'
import saggingSide from './assets/26_sagging_orange_side_angle 1.png'

const causes = [
  'Отсутствуют поддержки под нависающими элементами.',
  'Неправильно выбрана ориентация модели.',
  'Геометрия детали содержит слишком большие нависающие участки.',
  'Недостаточное охлаждение пластика.',
]

const solutions = [
  'Добавить поддержки в слайсере.',
  'Проверить ориентацию модели на платформе.',
  'При необходимости изменить угол наклона нависающих элементов.',
  'Рассмотреть возможность разделения модели на несколько частей.',
  'Проверить настройки охлаждения.',
  'При необходимости изменить геометрию детали, чтобы уменьшить нависающие участки.',
]

function Sagging() {
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
            <img src={saggingFront} alt="Провисание пластика на передней части модели" />
            <img src={saggingSide} alt="Провисание нависающих элементов сбоку" />
            <img src={saggingUnderside} alt="Крупный план провисшего пластика снизу" />
            <img src={saggingMain} alt="Провисание пластика при печати" />
          </div>

          <div className="warping-heading">
            <h1>Провисание некоторых частей модели</h1>

            <p>Провисание нависающих элементов.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Отдельные выступающие части модели провисают вниз,
              выглядят деформированными или частично отсутствуют.
              Особенно заметен дефект на участках, которые
              печатаются без опоры снизу.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Во время печати пластик наносится на участок, под которым
            нет достаточной поддержки. Пока материал не затвердел,
            он может провисать под собственным весом.
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

export default Sagging
