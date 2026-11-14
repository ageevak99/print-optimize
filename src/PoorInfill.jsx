
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import infillMain from './assets/14_poor_infill_yellow_main 1.png'
import infillAngle from './assets/14_poor_infill_yellow_angle 1.png'
import infillCloseup from './assets/14_poor_infill_yellow_lattice_closeup 1.png'
import infillGaps from './assets/14_poor_infill_yellow_wall_gaps_detail 1.png'

const causes = [
  'Неправильно направлены нормали полигонов.',
  'Слишком высокая скорость печати.',
  'Модель содержит незакрытые отверстия.',
  'Сетки модели не соединены между собой.',
  'Неправильно выбран шаблон заполнения.',
  'Неверно настроена ширина линий заполнения.',
]

const solutions = [
  'Проверить цифровую модель в программе для исправления сеток.',
  'Проверить наличие отверстий и несоединённых элементов.',
  'При необходимости исправить нормали и объединить сетки.',
  'Проверить шаблон внутреннего заполнения (Infill Pattern).',
  'Попробовать другой шаблон заполнения, например Grid или Triangular.',
  'При необходимости снизить скорость печати.',
  'Проверить ширину линий заполнения (Infill Extrusion Width).',
]

function PoorInfill() {
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
            <img src={infillMain} alt="Плохое наполнение модели" />
            <img src={infillAngle} alt="Неправильное заполнение под углом" />
            <img src={infillCloseup} alt="Дефекты внутреннего заполнения крупным планом" />
            <img src={infillGaps} alt="Щели в заполнении модели" />
          </div>

          <div className="warping-heading">
            <h1>Плохое наполнение</h1>

            <p>Заполнение с дефектами, неправильное внутреннее заполнение.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Внутри модели видны неровные, разрозненные или плохо
              соединённые линии заполнения. Иногда появляются лишние
              стружки или поддержки в местах, где они не должны находиться.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Внутренняя структура модели формируется неправильно.
            Это может быть связано с ошибками цифровой 3D-модели
            или настройками заполнения в слайсере.
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

export default PoorInfill
