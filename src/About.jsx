
import React from 'react'
import './Warping.css'
import './About.css'

import logo from './assets/logo.jpg'
import telegramIcon from './assets/telegram-2.png'

function About() {
  return (
    <div className="warping-page about-page">
      <header className="warping-header">
        <a href="/" className="warping-logo">
          <img src={logo} alt="PrintOptimize" />
        </a>

        <nav className="warping-navigation">
          <a href="/">Главная</a>
          <a href="/catalog">Каталог</a>
          <a href="/about" className="active">О проекте</a>
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

      <main className="about-main">
        <section className="about-hero">
          <span className="about-label">PRINTOPTIMIZE</span>
          <h1>О проекте</h1>
          <p>
            Помогаем разобраться в дефектах 3D-печати
            и находить способы их устранения.
          </p>
        </section>

        <section className="about-description">
          <h2>Что такое PrintOptimize?</h2>
          <p>
            PrintOptimize — это проект, направленный на помощь
            начинающим пользователям 3D-принтеров в выявлении
            и устранении дефектов печати.
          </p>
          <p>
            Проект объединяет Telegram-бота с нейросетью
            для определения дефектов по фотографии и сайт-справочник
            с подробной информацией о проблемах 3D-печати.
          </p>
        </section>

        <section className="about-features">
          <h2>Что предлагает проект?</h2>

          <div className="about-cards">
            <article className="about-card">
              <div className="about-card-number">01</div>
              <h3>Telegram-бот с нейросетью</h3>
              <p>
                Отправьте фотографию детали, а нейросеть поможет
                определить возможный дефект и разобраться в проблеме.
              </p>
              <a
                href="https://t.me/PrintOptimize_agent"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к боту →
              </a>
            </article>

            <article className="about-card">
              <div className="about-card-number">02</div>
              <h3>Справочник дефектов</h3>
              <p>
                В каталоге собраны 27 наиболее распространённых
                дефектов 3D-печати. Для каждого представлены описание,
                возможные причины и способы устранения.
              </p>
              <a href="/catalog">
                Открыть каталог →
              </a>
            </article>

            <article className="about-card about-card-future">
              <div className="about-card-number">03</div>
              <span className="about-future-label">В планах</span>
              <h3>Мониторинг печати</h3>
              <p>
                В будущем планируется создание камеры с системой,
                которая сможет отслеживать появление дефектов
                непосредственно во время печати.
              </p>
            </article>
          </div>
        </section>

        <section className="about-goal">
          <h2>Наша цель</h2>
          <p>
            Начинающим пользователям бывает сложно ориентироваться
            в большом количестве разрозненной информации в интернете
            и самостоятельно определять причины неудачной печати.
          </p>
          <p>
            Мы хотим сделать информацию о дефектах 3D-печати
            доступной и понятной, чтобы пользователи могли быстрее
            находить причины проблем и способы их решения.
          </p>
        </section>

        <section className="about-bottom">
          <h2>Столкнулись с дефектом?</h2>
          <p>
            Отправьте фотографию в Telegram-бот и попробуйте
            определить проблему.
          </p>
          <a
            href="https://t.me/PrintOptimize_agent"
            target="_blank"
            rel="noreferrer"
            className="about-bottom-button"
          >
            <img src={telegramIcon} alt="" />
            Найти по фото
          </a>
        </section>
      </main>
    </div>
  )
}

export default About
