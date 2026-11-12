
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import warping1 from './assets/коробление 1.png'
import warping2 from './assets/коробление 2.png'
import warping3 from './assets/коробление 3.png'
import warping4 from './assets/коробление 4.png'

const causes = [
  'Платформа печати недостаточно выровнена.',
  'Сопло расположено слишком далеко от поверхности стола.',
  'Первый слой печатается слишком быстро.',
  'Температура стола или сопла не соответствует материалу.',
  'Недостаточное сцепление пластика с платформой.',
  'Слишком быстрое охлаждение нижних слоёв.',
  'Сквозняки или резкие перепады температуры.',
]

const solutions = [
  'Проверить выравнивание платформы и выполнить калибровку.',
  'Проверить расстояние между соплом и столом.',
  'Попробовать снизить скорость печати первого слоя.',
  'Проверить температуру стола и сопла по рекомендациям производителя филамента.',
  'При необходимости использовать подогрев платформы.',
  'Попробовать уменьшить обдув первых слоёв.',
  'Исключить сквозняки и резкое охлаждение модели.',
  'Проверить, ровно ли основание модели соприкасается со столом.',
]

function Warping() {
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
            <img src={warping1} alt="Коробление — пример 1" />
            <img src={warping2} alt="Коробление — пример 2" />
            <img src={warping3} alt="Коробление — пример 3" />
            <img src={warping4} alt="Коробление — пример 4" />
          </div>

          <div className="warping-heading">
            <h1>Коробление</h1>
            <p>Отклеивание модели, загибание основания</p>

            <h2>Как выглядит дефект?</h2>
            <p>
              У модели загибаются вверх углы и края нижней поверхности.
              Иногда часть детали полностью отходит от стола.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>
          <p>
            Во время охлаждения пластик уменьшается в объёме. Если разные
            участки детали остывают неравномерно, внутри возникают
            напряжения, которые могут привести к деформации или
            отклеиванию модели от платформы.
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

export default Warping
