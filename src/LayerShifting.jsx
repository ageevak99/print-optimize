
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import shiftingYellow from './assets/image 45.png'
import shiftingBlue from './assets/image 44.png'
import shiftingGray from './assets/image 43.png'
import shiftingMain from './assets/07_layer_shifting_main 1.png'

const causes = [
  'Слишком высокая скорость движения печатающей головки.',
  'Механические или электрические проблемы принтера.',
  'Недостаточное или чрезмерное натяжение ремней.',
  'Ослаблены крепления шкивов.',
  'Платформа плохо закреплена.',
  'Задают направляющие или подшипники.',
]

const solutions = [
  'Проверить натяжение ремней.',
  'Проверить крепления шкивов и затянуть их при необходимости.',
  'Убедиться, что платформа надёжно закреплена.',
  'Проверить свободное движение печатающей головки по осям X и Y.',
  'Осмотреть направляющие и подшипники.',
  'Попробовать уменьшить скорость печати и перемещения.',
]

function LayerShifting() {
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
              src={shiftingYellow}
              alt="Смещение слоёв — жёлтая модель"
            />
            <img
              src={shiftingBlue}
              alt="Смещение слоёв — синяя модель"
            />
            <img
              src={shiftingGray}
              alt="Смещение слоёв — деформация серой модели"
            />
            <img
              src={shiftingMain}
              alt="Смещение слоёв — основной пример"
            />
          </div>

          <div className="warping-heading">
            <h1>Смещение слоёв</h1>

            <p>Сдвиг слоёв, перекос слоёв</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Верхняя часть модели смещена относительно нижней.
              На боковой поверхности заметен резкий горизонтальный
              сдвиг, из-за которого деталь выглядит ступенчатой
              или перекошенной.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Во время печати печатающая головка теряет правильное
            положение относительно предыдущих слоёв. В результате
            новые слои наносятся со смещением, нарушая геометрию детали.
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

export default LayerShifting
