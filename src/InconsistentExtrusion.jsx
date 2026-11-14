
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import extrusionSide from './assets/21_inconsistent_extrusion_purple_side_detail 1 (1).png'
import extrusionDetail from './assets/21_inconsistent_extrusion_purple_side_detail 1.png'
import extrusionCloseup from './assets/21_inconsistent_extrusion_purple_surface_closeup 1.png'
import extrusionMain from './assets/21_inconsistent_extrusion_purple_main 2.png'

const causes = [
  'Филамент застрял или запутался.',
  'Засорился экструдер или сопло.',
  'Слишком малая высота слоя.',
  'Некорректная ширина экструзии.',
  'Низкое качество филамента.',
  'Механические проблемы экструдера.',
]

const solutions = [
  'Проверить свободное вращение катушки.',
  'Убедиться, что филамент не запутался и не застревает.',
  'Проверить равномерность подачи пластика через сопло.',
  'При необходимости прочистить сопло.',
  'Проверить высоту слоя и ширину экструзии.',
  'Заменить филамент, если он имеет дефекты.',
  'Осмотреть механизм подачи материала.',
]

function InconsistentExtrusion() {
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
            <img src={extrusionSide} alt="Неравномерное экструдирование сбоку" />
            <img src={extrusionDetail} alt="Дефект на поверхности модели" />
            <img src={extrusionCloseup} alt="Крупный план неравномерных слоёв" />
            <img src={extrusionMain} alt="Общий вид модели с дефектом" />
          </div>

          <div className="warping-heading">
            <h1>Неравномерное экструдирование</h1>

            <p>Нестабильная подача пластика.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Линии пластика на поверхности имеют разную толщину:
              одни участки выглядят толще, другие — тоньше.
              На стенках появляются чередующиеся бугорки и неровности.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Пластик выходит из сопла неравномерно на протяжении
            печати. В отличие от постоянной недоэкструзии, при этой
            проблеме количество материала может меняться
            от участка к участку.
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

export default InconsistentExtrusion
