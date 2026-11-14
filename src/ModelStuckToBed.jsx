
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import stuckMain from './assets/24_model_stuck_to_bed_purple_main 1.png'
import stuckBase from './assets/24_model_stuck_to_bed_purple_base_closeup 1.png'
import stuckScraper from './assets/24_model_stuck_to_bed_purple_scraper_angle 1.png'
import stuckUnderside from './assets/24_model_stuck_to_bed_purple_underside_detail 1.png'

const causes = [
  'Модель и платформа ещё не остыли.',
  'Поверхность стола слишком текстурированная.',
  'На платформе накопились слои клея.',
  'На стеклянной поверхности есть небольшие углубления.',
  'Рабочая поверхность загрязнена.',
  'Материал слишком сильно сцепляется с выбранным покрытием.',
]

const solutions = [
  'Дождаться полного остывания модели и платформы.',
  'Проверить чистоту рабочей поверхности.',
  'При необходимости очистить стол подходящим для его покрытия способом.',
  'Проверить совместимость материала и поверхности платформы.',
  'Не пытаться резко отрывать горячую деталь.',
  'Использовать подходящий инструмент для снятия модели, соблюдая осторожность.',
]

function ModelStuckToBed() {
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
            <img src={stuckMain} alt="Модель, прилипшая к платформе" />
            <img src={stuckBase} alt="Крупный план основания модели" />
            <img src={stuckScraper} alt="Снятие модели скребком" />
            <img src={stuckUnderside} alt="Нижняя поверхность модели" />
          </div>

          <div className="warping-heading">
            <h1>Модель не снимается со стола</h1>

            <p>Сильное прилипание модели к платформе.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              После завершения печати модель остаётся
              сильно приклеенной к платформе. Её сложно
              отделить от стола даже после окончания печати.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Пластик слишком сильно сцепляется с поверхностью
            платформы. Это может затруднять снятие готовой
            детали и приводить к повреждению модели или
            рабочего покрытия стола.
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

export default ModelStuckToBed
