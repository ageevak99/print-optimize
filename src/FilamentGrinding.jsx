
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import filamentMain from './assets/18_filament_grinding_main 1.png'
import filamentDetail from './assets/18_filament_grinding_base_detail 1.png'
import filamentAngle from './assets/18_filament_grinding_angle 1.png'
import filamentAngleExtra from './assets/18_filament_grinding_angle 1 (1).png'

const causes = [
  'Слишком низкая температура экструдера.',
  'Слишком высокая скорость печати.',
  'Засорено сопло.',
  'Слишком большое сопротивление при подаче филамента.',
  'Неправильно настроено прижимное усилие механизма подачи.',
]

const solutions = [
  'Проверить, свободно ли филамент проходит от катушки к экструдеру.',
  'Проверить сопло на наличие засора.',
  'При необходимости прочистить сопло подходящим способом.',
  'Проверить температуру печати и подобрать её под материал.',
  'Попробовать уменьшить скорость печати.',
  'Проверить прижимной механизм и состояние шестерёнок.',
  'Если проблема сохраняется, обратиться к специалисту для проверки экструдера.',
]

function FilamentGrinding() {
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
              src={filamentMain}
              alt="Стачивание филамента на шестерёнке экструдера"
            />
            <img
              src={filamentDetail}
              alt="Повреждение пластика на модели крупным планом"
            />
            <img
              src={filamentDetail}
              alt="Следы стачивания филамента"
            />
            <img
              src={filamentAngle}
              alt="Стачивание филамента под увеличением"
            />
          </div>

          <div className="warping-heading">
            <h1>Филамент стачивается, пластик крошится</h1>

            <p>Стачивание филамента, пластиковая стружка.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Рядом с механизмом подачи или под принтером
              появляется пластиковая стружка. На самом филаменте
              заметны следы от шестерёнки, а подача материала
              может полностью прекратиться.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Приводная шестерёнка прокальзывает или слишком сильно
            воздействует на филамент, стачивая его поверхность.
            Из-за этого материал перестаёт нормально поступать
            в хотэнд, и печать прерывается.
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

export default FilamentGrinding
