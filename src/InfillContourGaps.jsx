
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import infillMain from './assets/17_infill_contour_gaps_pink_main 1.png'
import infillTopGap from './assets/17_infill_contour_gaps_pink_top_gap 2.png'
import infillTopView from './assets/17_infill_contour_gaps_pink_top_view 1.png'
import infillWallGap from './assets/17_infill_contour_gaps_pink_wall_gap_detail 1.png'

const causes = [
  'Недостаточное перекрытие заполнения и контура.',
  'Слишком высокая скорость печати.',
  'Слишком низкая температура печати.',
  'Неправильно настроена ширина линий.',
]

const solutions = [
  'Проверить параметр перекрытия заполнения и контура (Infill/Outline Overlap).',
  'При необходимости увеличить перекрытие.',
  'Проверить температуру печати.',
  'Попробовать снизить скорость печати.',
  'Проверить ширину линий заполнения.',
  'При необходимости изменить порядок печати заполнения и внешнего контура.',
]

function InfillContourGaps() {
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
            <img src={infillWallGap} alt="Щель между заполнением и контуром" />
            <img src={infillTopView} alt="Вид сверху на щели между заполнением и стенками" />
            <img src={infillTopGap} alt="Зазор между линиями верхнего слоя" />
            <img src={infillMain} alt="Недостаточное соединение заполнения с контуром" />
          </div>

          <div className="warping-heading">
            <h1>Щели между наполнением и контуром</h1>

            <p>Зазоры между заполнением и стенками.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              На внутренней стороне стенок модели видны небольшие
              зазоры между внешним контуром и линиями заполнения.
              Внутренние линии не доходят до стенок или плохо
              соединяются с ними.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Внутреннее заполнение недостаточно хорошо соединяется
            с внешними стенками модели. Из-за этого конструкция
            может терять прочность и иметь пустоты по краям заполнения.
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

export default InfillContourGaps
