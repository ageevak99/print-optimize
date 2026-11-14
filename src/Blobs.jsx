
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import blobsVertical from './assets/image 59.png'
import blobsSurface from './assets/image 56.png'
import blobsBenchy from './assets/image 57.png'
import blobsCylinders from './assets/image 58.png'

const causes = [
  'Неправильные настройки ретракции.',
  'Некорректно настроен ход наката (Coasting).',
  'Избыточное экструдирование.',
  'Слишком высокая температура печати.',
  'Неправильно подобрана длина втягивания.',
  'Особенности траектории и точек начала слоя.',
]

const solutions = [
  'Проверить настройки ретракции.',
  'Проверить параметр дополнительной подачи после втягивания (Extra Restart Distance).',
  'При необходимости настроить Coasting, если эта функция доступна в слайсере.',
  'Проверить расположение шва и точки начала слоя.',
  'Проверить настройки перемещения печатающей головки.',
  'При необходимости скорректировать температуру и скорость печати.',
]

function Blobs() {
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
              src={blobsVertical}
              alt="Наплывы на вертикальной детали"
            />
            <img
              src={blobsSurface}
              alt="Неровности на боковой поверхности"
            />
            <img
              src={blobsBenchy}
              alt="Наплывы на модели Benchy"
            />
            <img
              src={blobsCylinders}
              alt="Наплывы на цилиндрических деталях"
            />
          </div>

          <div className="warping-heading">
            <h1>Наплывы, натёки, сопли и прыщи</h1>

            <p>Волны на поверхности, призрачные контуры</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На внешней поверхности модели появляются отдельные
              капли, бугорки и небольшие выступы пластика. Они могут
              располагаться вдоль шва или в местах начала и окончания
              печати слоя.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            В отдельных точках на поверхности скапливается лишний
            расплавленный пластик. Это может происходить из-за
            неправильных настроек втягивания, подачи материала
            или поведения сопла при остановке и возобновлении печати.
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

export default Blobs
