
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import tinyBlue from './assets/image 61.png'
import tinyAngle from './assets/19_tiny_details_orange_angle 1.png'
import tinyTower from './assets/19_tiny_details_orange_tower_closeup 1.png'
import tinyYellow from './assets/image 60.png'

const causes = [
  'Слишком маленькие размеры элементов модели.',
  'Диаметр сопла слишком большой для нужной детализации.',
  'Особенности настроек слайсера.',
]

const solutions = [
  'Проверить модель в режиме предпросмотра слайсера.',
  'Увеличить размеры слишком мелких элементов.',
  'Проверить минимальную ширину линий, которую поддерживает принтер.',
  'При необходимости использовать сопло меньшего диаметра, если это поддерживает оборудование.',
  'Проверить высоту слоя и настройки детализации.',
]

function TinyDetails() {
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
            <img src={tinyBlue} alt="Мелкие элементы синей модели" />
            <img src={tinyAngle} alt="Тонкие элементы оранжевой модели" />
            <img src={tinyTower} alt="Мелкие детали оранжевой модели крупным планом" />
            <img src={tinyYellow} alt="Мелкие детали жёлтой модели" />
          </div>

          <div className="warping-heading">
            <h1>Очень мелкие детали не пропечатываются</h1>

            <p>Потеря мелких деталей, слишком мелкие элементы.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На готовой модели отсутствуют небольшие выступы,
              отверстия или тонкие элементы. Некоторые детали
              также могут не отображаться в предпросмотре слайсера.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Принтер не может воспроизвести элементы, размеры
            которых слишком малы для используемого диаметра
            сопла и настроек печати. Поэтому мелкие детали
            пропускаются или сливаются с основной моделью.
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

export default TinyDetails
