import React from "react";

import "./home.css";

const Home = () => {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="header__nav">
          <div className="header__nav--left">
            <a href="#" className="header__nav-logo">
              CryptoBlueberry
            </a>
          </div>
          <div className="header__nav--right">
            <a href="#" className="header__nav-link">
              Recompensas
            </a>
            <a href="#" className="header__nav-link">
              ¿Cómo funciona?
            </a>
            <a href="#" className="header__nav-link">
              Suscripciones
            </a>
            <a href="#" className="header__nav-link">
              Nosotros
            </a>
            <a href="#" className="primary-button">
              Empieza ahora
            </a>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="section__hero container">
          <div className="section__hero--left">
            <div className="section__hero--left-container">
              <h1 className="section__hero-title">
                Todo tu dinero <span>crypto</span> en un solo lugar.
              </h1>
              <p className="section__hero-description">
                Protege, invierte y transfiere tu dinero de una manera segura.
                Crea grupos privados y compra suscripciones a un menor precio.{" "}
              </p>
              <div className="section__hero--left-buttons">
                <a
                  href="#"
                  className="primary-button section__hero--left-button"
                >
                  Empieza ahora
                </a>
                <a href="#" className="section__hero--left-button-secundary">
                  ¿Cómo funciona?
                </a>
              </div>
            </div>
          </div>

          <div className="section__hero--right">
            <div className="section__hero--right-container">
              <img
                className="section__hero--right-img"
                src={require("./../../assets/img/heroImg.png")}
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="section__partner ">
          <div className="section__partner-container ">
            <img
              className="section__partner-img"
              src={require("./../../assets/img/Netflix_logo.svg").default}
              alt=""
            />
            <img
              className="section__partner-img"
              src={require("./../../assets/img/Netflix_logo.svg").default}
              alt=""
            />
            <img
              className="section__partner-img"
              src={require("./../../assets/img/Netflix_logo.svg").default}
              alt=""
            />
            <img
              className="section__partner-img"
              src={require("./../../assets/img/Netflix_logo.svg").default}
              alt=""
            />
            <img
              className="section__partner-img"
              src={require("./../../assets/img/Netflix_logo.svg").default}
              alt=""
            />
          </div>
        </section>

        <section className="section__services container">
          <h2 className="subtitle">Nuestros servicios</h2>
          <div className="section__services-container">
            <div className="section__services-service-box">
              <div className="section__services-service-image-box">
                <img
                  className="section__services-service-image"
                  src={
                    require("./../../assets/img/./../../assets/img/./../../assets/img/undraw_transfer_money_re_6o1h.svg")
                      .default
                  }
                  alt=""
                />
              </div>

              <div className="section__services-service-text">
                <h3 className="section__services-service-text--tile">
                  Transacciones
                </h3>
                <p className="section__services-service-text--description">
                  Protege, invierte y transfiere tu dinero de una manera segura{" "}
                </p>
              </div>
            </div>

            <div className="section__services-service-box">
              <div className="section__services-service-image-box">
                <img
                  className="section__services-service-image"
                  src={
                    require("./../../assets/img/./../../assets/img/undraw_home_cinema_l7yl.svg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div className="section__services-service-text">
                <h3 className="section__services-service-text--tile">
                  Subscripciones
                </h3>
                <p className="section__services-service-text--description">
                  Protege, invierte y transfiere tu dinero de una manera segura{" "}
                </p>
              </div>
            </div>

            <div className="section__services-service-box">
              <div className="section__services-service-image-box">
                <img
                  className="section__services-service-image"
                  src={
                    require("./../../assets/img/undraw_secure_files_re_6vdh.svg")
                      .default
                  }
                  alt=""
                />
              </div>
              <div className="section__services-service-text">
                <h3 className="section__services-service-text--tile">Grupos</h3>
                <p className="section__services-service-text--description">
                  Unete o crea grupos privados para utilizarlo en cosas
                  generales
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section__rewards container">
          <div className="section__rewards-container">
            <h2 className="subtitle section__rewards-title">Recompensas</h2>
            <p className="section__rewards-description">
              Obten recompensas mensuales por su lealtad. Nuestro objetivo es
              ayudar a la sociedad
            </p>
            <div className="section__rewards-container--grid">
              <div className="section__rewards-reward-box">
                <img className="section__rewards-reward-image" src="" alt="" />
              </div>

              <div className="section__rewards-reward-box">
                <img className="section__rewards-reward-image" src="" alt="" />
              </div>

              <div className="section__rewards-reward-box">
                <img className="section__rewards-reward-image" src="" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="section__how container">
          <div className="section__how-container">
            <h2 className="subtitle section__how-title">
              Empieza hoy el futuro
            </h2>
            <p className="section__how-description">
              En tres simples pasos empieza en el mundo del blockchain. Podiendo
              manejar tu dinero y ahorrando dinero
            </p>
            <div className="section__how-container--grid">
              <div className="section__how-text-box">
                <div>
                  <h3 className="section__how-text--tile">
                    1 - Conecte su cuenta de Metamask
                  </h3>
                  <p className="section__how-how-text--description">
                    Ingresa de manera segura a Metamask para interactuar con
                    nuestra aplicación
                  </p>
                </div>
              </div>

              <div className="section__how-image-box">
                <img
                  className="section__how-image metamask-img"
                  src={require("./../../assets/img/MetaMask_Fox.svg").default}
                  alt=""
                />
              </div>

              <div className="section__how-image-box">
                <img
                  className="section__how-image"
                  src={require("./../../assets/img/dashboard.svg").default}
                  alt=""
                />
              </div>

              <div className="section__how-text-box">
                <div>
                  <h3 className="section__how-text--tile">
                    2 - Acceda a su dashboard
                  </h3>
                  <p className="section__how-how-text--description">
                    Vea su balance en tiempo real, así como poder interactuar
                    con su cuenta
                  </p>
                </div>
              </div>

              <div className="section__how-text-box">
                <div>
                  <h3 className="section__how-text--tile">
                    3 - Suscripciones y grupos
                  </h3>
                  <p className="section__how-how-text--description">
                    Únete a suscripciones con un menor costo. Así como crear
                    grupos privados
                  </p>
                </div>
              </div>

              <div className="section__how-image-box">
                <img
                  className="section__how-image"
                  src={require("./../../assets/img/connected.svg").default}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section__subscriptions container">
          <div className="section__subscriptions-container">
            <div className="section__subscriptions-top">
              <h2 className="subtitle section__subscriptions-title">
                Subscripciones
              </h2>
              <p className="section__subscriptions-description">
                Compra subscripciones de tus servicios favoritos de una manera
                accesible, segura y fácil
              </p>
            </div>
            <div className="section__subscriptions-image-box">
              <img className="section__subscriptions-image" src={require("./../../assets/img/Netflix.png")} alt="" />
              <img className="section__subscriptions-image" src={require("./../../assets/img/Disney.svg").default} alt="" />
              <img className="section__subscriptions-image" src={require("./../../assets/img/spotify.svg").default} alt="" />
              <img className="section__subscriptions-image" src={require("./../../assets/img/amazon.svg").default} alt="" />
              <img className="section__subscriptions-image" src={require("./../../assets/img/hbo.svg").default} alt="" />
            </div>
          </div>
        </section>

        <section className="section__about container">
          <div className="section__about-container">
            <div className="section__about-top">
              <h2 className="subtitle section__about-title">CryptoBlueberry</h2>
              <p className="section__about-description">
                CryptoBlueberry es una dapp con superpoderes. En esta podras
                tener grupos publicos para subscipciones más baratas y grupos
                privado para cosas generales
              </p>
              <h3 className="roadmap-title">Roadmap</h3>
            </div>
            <div className="section__about-container-inner">
              <div className="roadmap-line"></div>
              <div className="section__about-container-inner-grid">
                <div className="section__about-container-inner-grid-item">
                  <div className="wrap align-right stage-text">
                    STAGE 3: Aqui se pondra stage 3 <br />
                    STAGE 3: Aqui se pondra stage 3 <br />
                    STAGE 3: Aqui se pondra stage 3 <br />
                  </div>
                  <div className="wrap flex-center ">
                    <div className="stage">S1</div>
                  </div>
                </div>

                <div className="section__about-container-inner-grid-item">
                  <div className="wrap align-right"></div>
                  <div className="wrap flex-center ">
                    <div className="stage">S2</div>
                  </div>
                  <div className="wrap stage-text">
                    STAGE 3: Aqui se pondra stage 3 <br />
                    STAGE 3: Aqui se pondra stage 3 <br />
                    STAGE 3: Aqui se pondra stage 3 <br />
                  </div>
                </div>

                <div className="section__about-container-inner-grid-item">
                  <div className="wrap align-right stage-text">
                    STAGE 3: Aqui se pondra stage 3 <br />
                    STAGE 3: Aqui se pondra stage 3 <br />
                    STAGE 3: Aqui se pondra stage 3 <br />
                  </div>
                  <div className="wrap flex-center ">
                    <div className="stage">S3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"></footer>
    </React.Fragment>
  );
};

export default Home;
