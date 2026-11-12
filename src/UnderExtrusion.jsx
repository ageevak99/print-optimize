
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import extrusionMain from './assets/02_under_extrusion_main 1.png'
import extrusionSide from './assets/02_under_extrusion_side_detail 1.png'
import extrusionInfill from './assets/02_under_extrusion_infill 1.png'
import extrusionExample from './assets/image 35.png'

const causes = [
  'Неверный диаметр нити филамента.',
  'Слишком мал коэффициент экструдирования (иногда называется показателем расхода).',
  'Забито сопло.',
  'Непригодность пластика.',
  'Неправильная скорость печати.',
  'Неверная температура печати.',
  'Неисправность/загрязнение механизма.',
]

const solutions = [
  'Проверить, свободно ли вращается катушка и поступает ли филамент.',
  'Сверить диаметр пластика с настройками слайсера.',
  'Проверить коэффициент экструдирования.',
  'Попробовать снизить скорость печати.',
  'Проверить температуру сопла с учётом типа пластика.',
  'Осмотреть филамент на наличие загрязнений и повреждений.',
  'При необходимости просушить или заменить пластик.',
  'Проверить и прочистить сопло.',
  'Осмотреть шестерни подачи и тефлоновую трубку.',
]

function UnderExtrusion() {
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
            <img src={extrusionMain} alt="Недостаточное экструдирование — основной вид" />
            <img src={extrusionSide} alt="Недостаточное экструдирование — боковая поверхность" />
            <img src={extrusionInfill} alt="Недостаточное экструдирование — заполнение" />
            <img src={extrusionExample} alt="Дополнительный пример недостаточного экструдирования" />
          </div>

          <div className="warping-heading">
            <h1>Недостаточное экструдирование</h1>

            <p>Недоэкструзия, недостаточная подача пластика</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Дырки в печати, щели между соседними слоями.
              Поверхность детали выходит не ровной, а со всякими
              вкраплениями, либо отсутствием пластика там, где он необходим.
            </p>
          </div>
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

export default UnderExtrusion
