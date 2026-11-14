
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import elephantsMain from './assets/image 49.png'
import elephantsBlue from './assets/image 50.png'
import elephantsCloseup from './assets/10_elephants_foot_base_closeup 1.png'
import elephantsGreen from './assets/image 51.png'

const causes = [
  'Печатная платформа плохо выровнена.',
  'Избыточное экструдирование.',
  'Слишком высокая температура стола.',
  'Слишком маленькое расстояние между соплом и платформой.',
  'Недостаточное охлаждение первых слоёв.',
]

const solutions = [
  'Проверить калибровку стола.',
  'Проверить высоту сопла над платформой.',
  'При необходимости немного увеличить зазор между соплом и столом.',
  'Проверить температуру платформы.',
  'Настроить охлаждение первых слоёв с учётом материала.',
  'При необходимости добавить небольшую фаску у основания модели.',
]

function ElephantsFoot() {
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
            <img src={elephantsMain} alt="Слоновья нога — зелёная модель" />
            <img src={elephantsBlue} alt="Слоновья нога — синяя модель" />
            <img src={elephantsCloseup} alt="Расширенное основание модели крупным планом" />
            <img src={elephantsGreen} alt="Слоновья нога — вид сбоку" />
          </div>

          <div className="warping-heading">
            <h1>Слоновья нога</h1>
            <p>Расширение основания, выпирание нижних слоёв.</p>

            <h2>Как выглядит дефект?</h2>
            <p>
              Нижняя часть модели немного выступает за границы
              остальных стенок. Основание выглядит расширенным,
              словно деталь стоит на более широкой ножке.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>
          <p>
            Первые слои модели деформируются и становятся шире
            остальных. Из-за этого основание детали теряет точность
            размеров и может мешать соединению с другими элементами.
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

export default ElephantsFoot
