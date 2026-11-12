
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import gapsMain from './assets/04_gaps_in_top_layers_main 1.png'
import gapsBlue from './assets/image 39.png'
import gapsDetail from './assets/04_gaps_in_top_layers_edge_detail 1 (1).png'
import gapsDetailSecond from './assets/04_gaps_in_top_layers_edge_detail 1.png'

const causes = [
  'Недостаточное количество сплошных верхних слоёв.',
  'Слишком низкий процент заполнения.',
  'Недостаточное экструдирование.',
  'Недостаточный обдув.',
  'Неправильно настроена толщина верхней поверхности.',
]

const solutions = [
  'Проверить количество сплошных верхних слоёв.',
  'При необходимости увеличить их количество.',
  'Проверить процент внутреннего заполнения.',
  'Проверить, нет ли недоэкструзии.',
  'Проверить работу вентилятора и настройки обдува.',
  'При необходимости увеличить толщину верхней поверхности.',
]

function TopLayerGaps() {
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
            <img src={gapsMain} alt="Щели и дыры на верхнем слое — основной пример" />
            <img src={gapsBlue} alt="Дыры на верхней поверхности синей модели" />
            <img src={gapsDetail} alt="Щели на верхнем слое крупным планом" />
            <img src={gapsDetailSecond} alt="Недостаточное заполнение верхнего слоя" />
          </div>

          <div className="warping-heading">
            <h1>Щели или дыры на верхнем слое</h1>

            <p>Дырки на верхней поверхности, неполное закрытие верхнего слоя</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На верхней поверхности модели видны небольшие отверстия,
              щели или незаполненные участки. Поверхность выглядит
              неоднородной, сквозь верхний слой иногда просматривается
              внутреннее заполнение.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Во время перемещения печатающей головки без печати из сопла
            может вытекать небольшое количество расплавленного пластика.
            При перемещении сопла материал вытягивается в тонкие нити
            между элементами модели.
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

export default TopLayerGaps
