
import React from 'react'
import './Warping.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

import accuracyBottom from './assets/25_dimensional_accuracy_bottom_view 1.png'
import accuracyMain from './assets/25_dimensional_accuracy_main 1 (1).png'
import accuracySurface from './assets/25_dimensional_accuracy_surface_closeup 1.png'
import accuracyCaliper from './assets/25_dimensional_accuracy_caliper_measurement 1 (1).png'

const causes = [
  'Неправильно выбраны единицы измерения.',
  'Недостаточная детализация цифровой модели.',
  'Неверная высота сопла относительно стола.',
  'Ошибки калибровки осей.',
  'Неправильное натяжение ремней.',
  'Усадка материала при охлаждении.',
]

const solutions = [
  'Проверить единицы измерения в программе моделирования и слайсере.',
  'Убедиться, что цифровая модель имеет достаточную детализацию.',
  'Проверить калибровку принтера.',
  'Напечатать тестовый калибровочный куб.',
  'Сравнить размеры тестовой модели с заданными значениями.',
  'Проверить натяжение ремней и положение осей.',
  'При необходимости учитывать усадку материала при проектировании детали.',
]

function DimensionalAccuracy() {
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
            <img src={accuracyBottom} alt="Измерение размеров модели снизу" />
            <img src={accuracyCaliper} alt="Измерение модели штангенциркулем" />
            <img src={accuracyMain} alt="Общий вид тестовой модели" />
            <img src={accuracySurface} alt="Крупный план поверхности модели" />
          </div>

          <div className="warping-heading">
            <h1>Неточность размеров</h1>

            <p>Отклонение размеров, неточные размеры модели.</p>

            <h2>Как выглядит дефект?</h2>

            <p>
              Готовая деталь отличается по размерам от исходной
              3D-модели. Отверстия могут быть меньше или больше,
              а стороны и углы — иметь отклонения от заданной геометрии.
            </p>
          </div>
        </section>

        <section className="warping-section">
          <h2>Описание дефекта:</h2>

          <p>
            Принтер не воспроизводит точные размеры цифровой модели.
            Это может быть связано с настройками программы,
            калибровкой оборудования или особенностями поведения
            материала при охлаждении.
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

export default DimensionalAccuracy
