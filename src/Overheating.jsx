
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import overheatingMain from './assets/06_overheating_white_main 1.png'
import overheatingExample from './assets/image 42.png'
import overheatingTop from './assets/06_overheating_white_top_edge 1.png'
import overheatingLower from './assets/06_overheating_white_lower_edge 1.png'

const causes = [
  'Недостаточное охлаждение.',
  'Слишком высокая температура сопла.',
  'Слишком высокая скорость печати.',
  'Маленькие слои печатаются слишком быстро и не успевают остывать.',
]

const solutions = [
  'Проверить работу вентилятора охлаждения.',
  'При необходимости увеличить интенсивность обдува.',
  'Проверить температуру сопла и подобрать её под материал.',
  'Попробовать снизить температуру печати.',
  'Уменьшить скорость печати небольших слоёв.',
  'Настроить автоматическое снижение скорости для маленьких слоёв, если такая функция есть в слайсере.',
]

function Overheating() {
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
              src={overheatingMain}
              alt="Перегрев пластика — основной пример"
            />
            <img
              src={overheatingExample}
              alt="Дополнительный пример перегрева пластика"
            />
            <img
              src={overheatingTop}
              alt="Перегрев пластика — верхняя поверхность"
            />
            <img
              src={overheatingLower}
              alt="Перегрев пластика — нижняя поверхность"
            />
          </div>

          <div className="warping-heading">
            <h1>Перегрев пластика</h1>

            <p>Перегрев модели, деформация от перегрева</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Небольшие элементы модели теряют форму, края становятся
              мягкими и деформированными. На выступающих участках могут
              появляться наплывы и провисания.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Пластик не успевает остыть и затвердеть перед нанесением
            следующего слоя. Из-за этого отдельные участки модели
            деформируются под воздействием температуры и собственного веса.
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

export default Overheating
