
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import delaminationMain from './assets/08_delamination_side_separation_detail 1.png'
import delaminationDark from './assets/image 47.png'
import delaminationYellow from './assets/image 48.png'
import delaminationCloseup from './assets/08_delamination_layer_gap_closeup 1.png'

const causes = [
  'Слишком большая высота слоя.',
  'Слишком низкая температура печати.',
  'Резкие перепады температуры во время печати.',
  'Сквозняки и быстрое охлаждение модели.',
  'Недостаточное сцепление соседних слоёв.',
]

const solutions = [
  'Проверить соотношение высоты слоя и диаметра сопла.',
  'При необходимости уменьшить высоту слоя.',
  'Проверить температуру печати в соответствии с рекомендациями производителя пластика.',
  'Попробовать немного повысить температуру, если она слишком низкая.',
  'Исключить сквозняки.',
  'Для материалов с высокой усадкой рассмотреть печать в закрытой камере, если это допускает оборудование.',
]

function Delamination() {
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
              src={delaminationMain}
              alt="Разделение слоёв — основной пример"
            />
            <img
              src={delaminationDark}
              alt="Расщепление слоёв на тёмной модели"
            />
            <img
              src={delaminationYellow}
              alt="Разделение слоёв на жёлтой модели"
            />
            <img
              src={delaminationCloseup}
              alt="Щели между слоями крупным планом"
            />
          </div>

          <div className="warping-heading">
            <h1>Разделение и расщепление слоёв</h1>

            <p>Расслоение модели, плохое сцепление слоёв</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Между горизонтальными слоями видны трещины или щели.
              Иногда часть модели отслаивается, и деталь можно
              разделить по линиям слоёв.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Соседние слои недостаточно хорошо соединяются между собой.
            В результате готовая модель теряет прочность и может
            расколоться при механической нагрузке.
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

export default Delamination
