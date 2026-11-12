
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import extrusionMain from './assets/03_over_extrusion_main 1.png'
import extrusionSide from './assets/03_over_extrusion_side_view 2.png'
import extrusionExample from './assets/image 38.png'
import extrusionModel from './assets/image 37.png'

const causes = [
  'Слишком высокий коэффициент экструдирования.',
  'Неверно указан диаметр филамента.',
  'Неправильно откалиброван механизм подачи.',
  'Слишком высокая температура печати.',
  'Неисправность или загрязнение рабочих механизмов.',
]

const solutions = [
  'Проверить коэффициент экструдирования и при необходимости скорректировать его.',
  'Сверить диаметр филамента с настройками слайсера.',
  'Проверить калибровку подачи пластика.',
  'Проверить температуру печати и при необходимости немного снизить её.',
  'Осмотреть механизм подачи материала.',
  'Выполнить тестовую печать после изменения настроек.',
]

function OverExtrusion() {
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
            <img src={extrusionMain} alt="Избыточное экструдирование — основной пример" />
            <img src={extrusionExample} alt="Пример избыточного экструдирования" />
            <img src={extrusionSide} alt="Наплывы пластика крупным планом" />
            <img src={extrusionModel} alt="Избыточное экструдирование на модели" />
          </div>

          <div className="warping-heading">
            <h1>Избыточное экструдирование</h1>

            <p>Переэкструзия, избыточная подача пластика</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На поверхности модели заметны бугорки, наплывы и излишки
              пластика. Линии могут выглядеть слишком толстыми,
              а углы — скруглёнными.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Принтер подаёт больше материала, чем необходимо для формирования
            детали. Избыток пластика накапливается на поверхности и может
            нарушать геометрию модели.
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

export default OverExtrusion
