
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import wavinessSide from './assets/image 54.png'
import wavinessBenchy from './assets/image 52.png'
import wavinessCylinder from './assets/image 53.png'
import wavinessBlue from './assets/image 55.png'

const causes = [
  'Слишком высокая скорость печати.',
  'Слишком большое ускорение печатающей головки.',
  'Механические проблемы принтера.',
  'Вибрации корпуса или основания.',
  'Ослабленные крепления.',
]

const solutions = [
  'Попробовать снизить скорость печати.',
  'При необходимости уменьшить ускорение печатающей головки.',
  'Проверить устойчивость основания принтера.',
  'Осмотреть принтер во время работы и определить источник вибрации.',
  'Проверить крепления, валы и подшипники.',
  'При необходимости выполнить обслуживание направляющих.',
]

function Waviness() {
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
              src={wavinessSide}
              alt="Волнистость на боковой поверхности"
            />
            <img
              src={wavinessBenchy}
              alt="Волнистость на модели Benchy"
            />
            <img
              src={wavinessCylinder}
              alt="Волнистость на цилиндрической детали"
            />
            <img
              src={wavinessBlue}
              alt="Волнистость на синей модели"
            />
          </div>

          <div className="warping-heading">
            <h1>Волнистость или рябь</h1>

            <p>Волны на поверхности, призрачные контуры</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На боковых стенках модели появляются повторяющиеся
              волны или рябь. Чаще всего они заметны рядом с углами,
              буквами и участками резкого изменения направления
              печатающей головки.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Вибрации и инерция подвижных элементов принтера
            отражаются на поверхности модели. После резкого
            изменения направления движения печатающая головка
            может продолжать колебаться, оставляя волнообразные следы.
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

export default Waviness
