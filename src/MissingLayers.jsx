
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import missingMain from './assets/15_missing_layers_blue_main 1.png'
import missingCloseup from './assets/15_missing_layers_blue_gap_closeup 1.png'
import missingDetail from './assets/15_missing_layers_blue_layer_detail 1.png'
import missingAngle from './assets/15_missing_layers_blue_angle 1.png'

const causes = [
  'Недостаточное экструдирование.',
  'Слишком низкая температура экструдера.',
  'Проблемы с захватом и подачей филамента.',
  'Слишком высокая скорость печати.',
  'Деформация тефлоновой трубки.',
  'Заедание или затруднённое движение оси Z.',
  'Проблемы с направляющими и подшипниками.',
]

const solutions = [
  'Проверить, нет ли недоэкструзии.',
  'Проверить подачу филамента и механизм захвата.',
  'Проверить температуру печати.',
  'При необходимости уменьшить скорость печати.',
  'Осмотреть тефлоновую трубку.',
  'Проверить направляющие и подшипники оси Z.',
  'Очистить и смазать направляющие в соответствии с инструкцией производителя.',
]

function MissingLayers() {
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
            <img src={missingDetail} alt="Пропуск слоёв на поверхности модели" />
            <img src={missingAngle} alt="Дефект слоёв на оранжевой модели" />
            <img src={missingCloseup} alt="Разрыв слоёв на синей модели" />
            <img src={missingMain} alt="Пропущенные слои на напечатанной модели" />
          </div>

          <div className="warping-heading">
            <h1>Пропуск слоёв</h1>

            <p>Пропущенные слои, отсутствие слоя.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На боковой поверхности модели видны горизонтальные
              щели или участки, где отсутствует целый слой пластика.
              Иногда дефект выглядит как резкий разрыв между
              соседними слоями.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Во время печати один или несколько слоёв не формируются
            полностью. В отличие от недоэкструзии, при которой
            пластика просто недостаточно в отдельных линиях,
            здесь может отсутствовать целый участок слоя.
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

export default MissingLayers
