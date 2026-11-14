
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import axisMain from './assets/16_axis_misalignment_green_main 1.png'
import axisStep from './assets/16_axis_misalignment_green_step_detail 1.png'
import axisBase from './assets/16_axis_misalignment_green_base_detail 1.png'
import axisAngle from './assets/16_axis_misalignment_green_angle 1.png'

const causes = [
  'Ошибки в настройках осей.',
  'Ослаблен фиксирующий винт шкива.',
  'Ремень установлен с перекосом.',
  'Ремень задевает другие элементы принтера.',
]

const solutions = [
  'Проверить правильность работы осей X и Y.',
  'Определить, по какой оси происходит отклонение.',
  'Осмотреть ремни и убедиться, что они расположены ровно.',
  'Проверить, не трутся ли ремни о другие элементы.',
  'Проверить натяжение ремней.',
  'При необходимости затянуть фиксирующий винт шкива шагового двигателя.',
]

function AxisMisalignment() {
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
            <img src={axisMain} alt="Несоблюдение осей — основная модель" />
            <img src={axisStep} alt="Перекос вертикальной детали" />
            <img src={axisAngle} alt="Наклон стенок модели" />
            <img src={axisBase} alt="Проверка положения осей принтера" />
          </div>

          <div className="warping-heading">
            <h1>Несоблюдение осей</h1>

            <p>Наклон вертикальных стенок, перекос осей.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Вертикальные стенки модели получаются наклонёнными,
              хотя в исходной модели они должны быть прямыми.
              Наклон может изменяться по высоте детали.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Оси принтера работают с отклонениями от правильной
            траектории. Из-за этого печатающая головка постепенно
            смещается, и вертикальные элементы модели теряют
            правильное положение.
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

export default AxisMisalignment
