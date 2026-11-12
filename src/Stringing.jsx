
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import stringingMain from './assets/05_stringing_main 1.png'
import stringingCloseup from './assets/05_stringing_closeup 1.png'
import stringingCloseupSecond from './assets/05_stringing_closeup 1 (1).png'
import stringingExample from './assets/image 41.png'

const causes = [
  'Неправильно настроена дистанция втягивания филамента (ретракция).',
  'Неверно установлена скорость втягивания.',
  'Слишком высокая температура сопла.',
  'Сопло перемещается на большие открытые расстояния.',
  'На внешней поверхности сопла накопился пластик.',
]

const solutions = [
  'Проверить чистоту сопла.',
  'Проверить настройки ретракции.',
  'Попробовать изменить расстояние и скорость втягивания филамента.',
  'При необходимости немного снизить температуру сопла.',
  'Проверить настройки перемещения головки в слайсере.',
  'Попробовать включить функцию обхода открытых участков при перемещении сопла.',
]

function Stringing() {
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
            <img
              src={stringingMain}
              alt="Нити между деталями — основной пример"
            />
            <img
              src={stringingCloseup}
              alt="Нити между деталями — крупный план"
            />
            <img
              src={stringingExample}
              alt="Дополнительный пример нитей пластика"
            />
            <img
              src={stringingCloseupSecond}
              alt="Нити пластика между элементами модели"
            />
          </div>

          <div className="warping-heading">
            <h1>Нити между деталями</h1>

            <p>Паутина, тонкие нити пластика, пластиковые волоски</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Между отдельными частями модели появляются тонкие нити
              пластика, похожие на паутину или волоски. Они часто
              заметны между выступающими элементами детали.
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

export default Stringing
