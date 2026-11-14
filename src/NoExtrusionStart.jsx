
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import extrusionMain from './assets/27_no_extrusion_start_green_main 1.png'
import extrusionBase from './assets/27_no_extrusion_start_green_base_closeup 2.png'
import extrusionNozzle from './assets/27_no_extrusion_start_green_nozzle_detail 1.png'
import extrusionNozzleAlt from './assets/27_no_extrusion_start_green_nozzle_detail 1 (1).png'

const causes = [
  'Сопло ещё не заполнено пластиком.',
  'Экструдер или сопло засорены.',
  'Сопло расположено слишком близко к платформе.',
  'Шестерёнка подачи филамента прокручивается.',
  'Филамент неправильно заправлен.',
  'Механизм подачи не захватывает пластик.',
]

const solutions = [
  'Проверить, правильно ли заправлен филамент.',
  'Убедиться, что пластик поступает в сопло.',
  'Проверить механизм подачи и шестерёнки.',
  'Проверить расстояние между соплом и платформой.',
  'При необходимости скорректировать положение сопла по оси Z.',
  'Проверить сопло на наличие засора.',
  'При необходимости прочистить его подходящим способом.',
  'Проверить, предусмотрена ли в слайсере печать линии или юбки для предварительной подачи пластика.',
]

function NoExtrusionStart() {
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
            <img src={extrusionMain} alt="Модель с отсутствием подачи пластика в начале печати" />
            <img src={extrusionBase} alt="Крупный план первого слоя модели" />
            <img src={extrusionNozzle} alt="Сопло принтера в начале печати" />
            <img src={extrusionNozzleAlt} alt="Подача пластика из сопла" />
          </div>

          <div className="warping-heading">
            <h1>Нет экструдирования при начале печати</h1>

            <p>Отсутствие подачи пластика в начале печати.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Принтер начинает движение, но пластик из сопла
              не выходит. Первый слой не формируется, а на
              платформе остаются пустые участки или отдельные
              тонкие линии.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            В начале печати материал не поступает из сопла
            в необходимом количестве или полностью отсутствует.
            Из-за этого принтер не может сформировать
            первый слой модели.
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

export default NoExtrusionStart
