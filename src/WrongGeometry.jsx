
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import geometrySide from './assets/09_wrong_geometry_side_profile 1.png'
import geometryTop from './assets/09_wrong_geometry_top_view 1.png'
import geometryRim from './assets/09_wrong_geometry_rim_closeup 1.png'
import geometryExample from './assets/image 46.png'

const causes = [
  'Неисправности механики принтера.',
  'Недостаточно натянуты или закреплены ремни.',
  'Ослаблены болты, гайки или шкивы.',
  'Есть люфты в подвижных элементах.',
  'Направляющие загрязнены или требуют обслуживания.',
]

const solutions = [
  'Проверить натяжение ремней.',
  'Проверить крепления болтов, гаек и шкивов.',
  'Убедиться, что подвижные элементы не имеют заметного люфта.',
  'Осмотреть направляющие.',
  'При необходимости очистить и смазать направляющие согласно инструкции производителя.',
]

function WrongGeometry() {
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
              src={geometrySide}
              alt="Неправильная геометрия — вид сбоку"
            />
            <img
              src={geometryTop}
              alt="Неправильная геометрия — вид сверху"
            />
            <img
              src={geometryRim}
              alt="Деформация края модели крупным планом"
            />
            <img
              src={geometryExample}
              alt="Пример нарушения геометрии модели"
            />
          </div>

          <div className="warping-heading">
            <h1>Неправильная геометрия модели</h1>

            <p>Искажение геометрии, нарушение геометрии печати.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Круглые элементы получаются овальными, а прямые
              и параллельные стенки могут искривляться или расходиться.
              Геометрия детали заметно отличается от исходной модели.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Механические элементы принтера не обеспечивают точное
            перемещение печатающей головки. Из-за люфтов, ослабленных
            креплений или проблем с направляющими форма модели искажается.
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

export default WrongGeometry
