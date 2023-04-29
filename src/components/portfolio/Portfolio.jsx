import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/weather_icon3.webp";
import IMG3 from "../../assets/skills-portfolio-logo-vector.png";
import IMG4 from "../../assets/uber-splash-icon.png";
const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio image" />
          </div>
          <h3>Weather Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AritraChatterjee22/react-weather"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://my-react-tailwind-weather-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio image" />
          </div>
          <h3>Expense Tracker</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AritraChatterjee22/Expense_Tracker_backend"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://mern-tailwind-expense-tracker.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio image" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AritraChatterjee22/react_portfolio"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio image" />
          </div>
          <h3>React Native Uber Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AritraChatterjee22/Uber-Clone-App"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="exp://exp.host/@aritra23/uber-clone?release-channel=default"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Expo Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
