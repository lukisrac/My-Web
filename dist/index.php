<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Lukáš Rác | Webové stránky a aplikace</title>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-156944703-1"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-156944703-1');
    </script>
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/main.min.css" />
    <script
      src="https://kit.fontawesome.com/adac62cc78.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="modal__overlay"></div>
    <div class="modal__container">
      <div class="modal__wrapper">
        <div class="modal">
          <div class="modal__picture"></div>
          <h4 class="modal__title">Název projektu</h4>
          <div class="modal__content">
            <ul class="project__detail">
              <li class="project__detail-item">
                <span class="project__detail-label">Kategorie:</span>
                Kategorie projektu
              </li>
            </ul>
            <a href="#" target="_blank" class="visit-project"
              >Otevřít projekt</a
            >
          </div>
          <button class="modal__close" title="Zavřít">×</button>
        </div>
      </div>
    </div>

    <nav class="navbar">
      <div class="container">
        <a class="navbar-brand">Lukáš Rác</a>
        <button class="navbar-toggler">
          <i class="fas fa-bars"></i>
        </button>
        <div class="navbar-collapse">
          <ul class="navbar__list">
            <li class="navbar__item">
              <a href="#home" class="navbar__link active">Domů</a>
            </li>
            <li class="navbar__item">
              <a href="#about" class="navbar__link">O mně</a>
            </li>
            <li class="navbar__item">
              <a href="#skills" class="navbar__link">Dovednosti</a>
            </li>
            <li class="navbar__item">
              <a href="#projects" class="navbar__link">Reference</a>
            </li>
            <li class="navbar__item">
              <a href="#contact" class="navbar__link">Kontakt</a>
            </li>
          </ul>
          <ul class="navbar__list social-icons">
            <li class="navbar__item">
              <a
                href="https://www.facebook.com/lukisrac"
                target="_blank"
                class="navbar__link"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="navbar__item">
              <a
                href="https://www.instagram.com/lukisrac/"
                target="_blank"
                class="navbar__link"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="navbar__item">
              <a
                href="https://github.com/klobasus"
                target="_blank"
                class="navbar__link"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="home" id="home">
      <div class="home__center">
        <div class="container">
          <div class="home__title col-12 text-center">
            <h1 class="heading">
              Ahoj, jmenuji se <span class="color-primary">Lukáš Rác</span>
            </h1>
            <h3 class="sub__heading">Vytvářím webové stránky a aplikace</h3>
            <a href="#contact" class="btn btn-hire"
              >Kontaktovat mě <i class="fas fa-paper-plane"></i
            ></a>
          </div>
        </div>
        <a href="#about" class="mouse">
          <span class="mouse__wheel"></span>
        </a>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="container">
        <div class="col-12 text-center">
          <img src="images/avatar.jpg" class="avatar" />
          <p class="about-text">
            Ahoj, jmenuji se <strong>Lukáš Rác</strong>. Jsem nadšený
            frontenďák, který se zabývá kódováním webových stránek a vytvářením
            webových aplikací. Mám za sebou více než 2 roky zkušeností, několik
            nakódovaných webů i vlastních webových aplikací. Rád za sebou
            nechávám výsledek, se kterým jsou klienti spokojení.
          </p>
          <img src="images/podpis-final.png" class="signature" />
        </div>
      </div>
      <div class="container hobbies">
        <div class="col-12 text-center">
          <h2 class="section__title">Koníčky & záliby</h2>
          <div class="row">
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <div class="hobby__title">
                  <h4>Kódování</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fab fa-windows"></i></div>
                <div class="hobby__title">
                  <h4>Windows</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fab fa-android"></i></div>
                <div class="hobby__title">
                  <h4>Android</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon">
                  <i class="fab fa-raspberry-pi"></i>
                </div>
                <div class="hobby__title">
                  <h4>Raspberry Pi</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-video"></i></div>
                <div class="hobby__title">
                  <h4>Filmy</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-music"></i></div>
                <div class="hobby__title">
                  <h4>Hudba</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-gamepad"></i></div>
                <div class="hobby__title">
                  <h4>PC hry</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-mountain"></i></div>
                <div class="hobby__title">
                  <h4>Cestování</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-car"></i></div>
                <div class="hobby__title">
                  <h4>Auta</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon">
                  <i class="fas fa-hockey-puck"></i>
                </div>
                <div class="hobby__title">
                  <h4>Sport</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-book-open"></i></div>
                <div class="hobby__title">
                  <h4>Čtení</h4>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 hobby">
              <div class="hobby__inner">
                <div class="hobby__icon"><i class="fas fa-hamburger"></i></div>
                <div class="hobby__title">
                  <h4>Jídlo</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section skills bg-light" id="skills">
      <div class="container">
        <div class="col-12 text-center">
          <h2 class="section__title">Dovednosti</h2>
          <div class="row">
            <div class="col-md-6 col-lg-4 skill">
              <div class="skill__wrapper">
                <div class="skill__icon">
                  <i class="fab fa-html5"></i>
                </div>
                <div class="skill__content">
                  <h4 class="title">HTML</h4>
                  <p class="text">
                    Základní struktura dokumentu a správná sémantika kódu s
                    důrazem na SEO a přístupnost pro úspěšný web.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 skill">
              <div class="skill__wrapper">
                <div class="skill__icon">
                  <i class="fab fa-css3-alt"></i>
                </div>
                <div class="skill__content">
                  <h4 class="title">CSS</h4>
                  <p class="text">
                    Znalost většiny prakticky použitelných vlastností a stavby
                    layoutu. Samozřejmostí je responzivní web.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 skill">
              <div class="skill__wrapper">
                <div class="skill__icon">
                  <i class="fab fa-js"></i>
                </div>
                <div class="skill__content">
                  <h4 class="title">JavaScript</h4>
                  <p class="text">
                    Základní znalost moderního JavaScriptu pro funkčnost a
                    dynamičnost webu. Stále prohlubuji znalosti tohoto jazyka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section projects" id="projects">
      <div class="container">
        <div class="row filter-row">
          <div class="col-12 text-center">
            <h2 class="section__title">Reference</h2>
          </div>
          <div class="col-12 text-center">
            <ul class="col projects__filter">
              <li class="projects__filter-item active">
                <a class="projects__filter-category" id="all" data-filter="*"
                  >Vše</a
                >
              </li>
              <li class="projects__filter-item">
                <a class="projects__filter-category" id="red" data-filter=".web"
                  >Weby</a
                >
              </li>
              <li class="projects__filter-item">
                <a
                  class="projects__filter-category"
                  id="green"
                  data-filter=".app"
                  >Aplikace</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container projects__container">
        <div class="projects__basic">
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.yarotravel.cz/" class="project__link"></a>
              <img
                src="images/weby/yarotravel.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">YARO</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.emdovolena.cz/" class="project__link"></a>
              <img
                src="images/weby/emdovolena.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Em Travel</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item app">
            <div class="project__box">
              <a
                href="https://movie-finder-app.netlify.com/"
                class="project__link"
              ></a>
              <img
                src="images/aplikace/movie-finder-app.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Movie Finder</h6>
                  <small class="project__category">Vývoj aplikace</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.edovolena.cz/" class="project__link"></a>
              <img
                src="images/weby/edovolena.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">HOLIDAY GROUP</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item app">
            <div class="project__box">
              <a
                href="https://sticky-notes-app.netlify.com/"
                class="project__link"
              ></a>
              <img
                src="images/aplikace/notes-app.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Sticky Notes</h6>
                  <small class="project__category">Vývoj aplikace</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.jatour.cz/" class="project__link"></a>
              <img
                src="images/weby/jatour.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">CA Jatour</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item app">
            <div class="project__box">
              <a
                href="https://weatherapp-js.netlify.com/"
                class="project__link"
              ></a>
              <img
                src="images/aplikace/weather-app.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Weather App</h6>
                  <small class="project__category">Vývoj aplikace</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.luckytravel.cz/" class="project__link"></a>
              <img
                src="images/weby/luckytravel.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">LUCKY Travel</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item app">
            <div class="project__box">
              <a
                href="https://js-todo-app.netlify.com/"
                class="project__link"
              ></a>
              <img
                src="images/aplikace/todo-app.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">TODO App</h6>
                  <small class="project__category">Vývoj aplikace</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="projects__extended">
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.caoryx.cz/" class="project__link"></a>
              <img
                src="images/weby/caoryx.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">CA Oryx</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a
                href="http://www.azzam-destinace.eu/"
                class="project__link"
              ></a>
              <img
                src="images/weby/azzam.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Azzam</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.beachtravel.cz/" class="project__link"></a>
              <img
                src="images/weby/beachtravel.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Beach Travel</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="http://www.innova-travel.cz/" class="project__link"></a>
              <img
                src="images/weby/innova-travel.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Innova Travel</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="https://www.travel-tour.cz/" class="project__link"></a>
              <img
                src="images/weby/travel-tour.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Travel Tour</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
          <div class="project__item web">
            <div class="project__box">
              <a href="http://artemis-tour.cz/" class="project__link"></a>
              <img
                src="images/weby/artemis-tour.jpg"
                alt="Project image"
                class="project__image"
              />
              <div class="project__overlay">
                <div class="project__icon">
                  <a class="modal__trigger-button"></a>
                  <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="project__content">
                  <h6 class="project__title">Artemis Tour</h6>
                  <small class="project__category">Kódování webu</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center clearfix">
        <button class="btn btn-more">Více</button>
      </div>
    </section>

    <section class="section contact bg-light" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="section__title">Kontakt</h2>
          </div>
          <div class="col-12">
            <div class="contact__wrapper">
              <div class="contact__content col-lg-7">
                <h3>Napište mi své přání</h3>
                <form method="POST" id="contact-form">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="name">Vaše jméno</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="email">Emailová adresa</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="phone">Telefon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        minlength="9"
                        maxlength="9"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="service-type">Typ služby</label>
                      <select
                        name="service-type"
                        id="service-type"
                        class="form-control"
                      >
                        <option selected>Vyberte...</option>
                        <option value="Web">Web</option>
                        <option value="Aplikace">Aplikace</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="message">Zpráva</label>
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn-submit">
                    Odeslat <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
              <div class="contact__info col-lg-5">
                <h3>Kontaktní údaje</h3>
                <div class="contact__info-link">
                  <i class="fas fa-map-marker-alt"></i>
                  <p>
                    <strong>Lukáš Rác</strong> <br />
                    Dobiášova 889/38 <br />
                    460 06 Liberec <br /><br />
                    IČ: 07089759 <br />
                    Bank. spojení: 218001399/0600 <br />
                    <small
                      >Fyzická osoba zapsaná v živnostenském rejstříku.</small
                    >
                  </p>
                </div>
                <div class="contact__info-link">
                  <i class="fas fa-mobile-alt"></i>
                  <a href="tel:+420604305632">+420 604 305 632</a>
                </div>
                <div class="contact__info-link">
                  <i class="fas fa-envelope-open-text"></i>
                  <a href="mailto:lukas.rac@lukis-dev.cz"
                    >lukas.rac@lukis-dev.cz</a
                  >
                </div>
                <ul class="contact__info-icon-wrapper">
                  <li class="contact__info-icon">
                    <a href="https://www.facebook.com/lukisrac" target="_blank"
                      ><i class="fab fa-facebook-square"></i
                    ></a>
                  </li>
                  <li class="contact__info-icon">
                    <a
                      href="https://www.instagram.com/lukisrac/"
                      target="_blank"
                      ><i class="fab fa-instagram"></i
                    ></a>
                  </li>
                  <li class="contact__info-icon">
                    <a href="https://github.com/klobasus" target="_blank"
                      ><i class="fab fa-github-square"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <p>
        &copy; 2020 - <span class="current-year"></span>
        <span class="copyright-name">Lukáš Rác</span>
      </p>
    </footer>

    <!-- Back to top -->
    <a href="#top" class="back-to-top">
      <i class="fas fa-chevron-up"></i>
    </a>
    <!-- End of Back to top -->

    <!-- <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"></script> -->
    <script src="./scripts/main.js"></script>
  </body>
</html>
