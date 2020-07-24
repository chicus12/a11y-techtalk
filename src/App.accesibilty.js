/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { TextField } from '@material-ui/core';

import logo from './assets/svg/logo.svg';
import hamburgerIcon from './assets/svg/hamburger-icon.svg';
import volumenIcon from './assets/svg/volumen-icon.svg';
import clockIcon from './assets/svg/clock-icon.svg';
import infoIcon from './assets/svg/info-icon.svg';
import computerIcon from './assets/svg/computer-icon.svg';
import usableImage from './assets/images/737019b02fb813c4e40c5e7a40165e50.jpeg';
import universalImage from './assets/images/c8dd550a784a695f0636ce0e73151a54.jpeg';
import accesibleImage from './assets/images/a5c5a1859dec3a4f8531423613c83bb9.jpeg';

const ArrowIcon = ({ color = '#3A0CA3' }) => (
  <svg
    width="17"
    height="14"
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.02512 1.66663L15.464 6.99996L9.02512 12.3333"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.3908 7H1.51312"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function UnauthenticatedApp() {
  return (
    <div css={style}>
      <header>
        <div className="container">
          <i>
            <img src={hamburgerIcon} className="icon" />
          </i>
          <img src={logo} />
        </div>
        <div className="title">
          <h4>Demo</h4>
          <h1>
            <span>Diseño</span>
            <br />
            <span>Inclusivo</span>
          </h1>

          <h5>significa mejor diseño para todos.</h5>
        </div>
      </header>
      <main>
        <section className="categories">
          <nav>
            <ul>
              <li>
                <a href="hola">
                  <i>
                    <span className="line" />
                    <img src={volumenIcon} />
                  </i>
                  <h4 aria-hidden="true">Perceivable</h4>
                  <span>Perceptible</span>
                  <p>
                    La información y los componentes de la interfaz de usuario
                    deben ser presentables a los usuarios de manera que puedan
                    percibirlos.
                  </p>
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <span className="line" />
                    <img src={clockIcon} />
                  </i>
                  <h4>Operable</h4>
                  <span>Operable</span>
                  <p>
                    Los componentes de la interfaz de usuario y la navegación
                    deben ser operables. Como un teclado accesible y evitar los
                    disparadores de convulsiones.
                  </p>
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <span className="line" />
                    <img src={infoIcon} />
                  </i>
                  <h4>Understandable</h4>
                  <span>Comprensible</span>
                  <p>
                    La información y los componentes de la interfaz de usuario
                    deben ser presentables a los usuarios de manera que puedan
                    percibirlos.
                  </p>
                </a>
              </li>
              <li>
                <a>
                  <i>
                    <span className="line" />
                    <img src={computerIcon} />
                  </i>
                  <h4>Robust</h4>
                  <span>Robusto</span>
                  <p>
                    El contenido debe ser interpretado por una amplia variedad
                    de agentes de usuario, incluidas las tecnologías de
                    asistencia.
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="articles">
          <article>
            <div className="overlay" />
            <div className="info">
              <h5>Usable</h5>
              <h4>Navegabilidad</h4>
              <p>
                Ofrezca formas de ayudar a sus usuarios a navegar y determinar
                dónde están dentro de su sitio Web.
              </p>
              <button
                type="button"
                aria-label="ver el artículo sobre navegabilidad"
              >
                Ir al detalle
                <i>
                  <ArrowIcon />
                </i>
              </button>
            </div>
          </article>
          <article>
            <div className="overlay" />
            <div className="info">
              <h5>Universal</h5>
              <h4>Contenido</h4>
              <p>
                Ofrezca alternativas para cualquier información presentada
                exclusivamente a través de audio o vídeo.
              </p>
              <button
                type="button"
                aria-label="ver el artículo sobre contenido"
              >
                Ir al detalle
                <i>
                  <ArrowIcon />
                </i>
              </button>
            </div>
          </article>
          <article>
            <div className="overlay" />
            <div className="info">
              <h5>Accesible</h5>
              <h4>Alternativas de texto</h4>
              <p>
                Opciones como tamaño de letra extra grande, braille, texto
                hablado, lenguaje de signos o un lenguaje más sencillo.
              </p>
              <button type="button" aria-label="Add Chamukos tequila to cart">
                Ir al detalle
                <i>
                  <ArrowIcon />
                </i>
              </button>
            </div>
          </article>
        </section>

        <section className="newsletter">
          <article>
            <h5>Boletín</h5>
            <p>
              Para más
              <br />
              información sobre cómo satisfacer las
              <br />
              <span>necesidades di</span>
g
<span>itales</span>
              <br />
              asistidas de sus usuarios:
            </p>
            <div className="line" />
            <div className="line" />
          </article>
          <article>
            <form>
              <span>
                Ingrese los siguientes datos para recibir el boletín de
                accesibilidad:
              </span>

              <TextField id="name" label="NOMBRE" />
              <TextField id="email" label="EMAIL" />

              <button type="submit">
                Suscribirme al boletín
                <i>
                  <ArrowIcon />
                </i>
              </button>
            </form>
          </article>
        </section>
      </main>
      <footer>
        <nav>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </nav>
        <span>Powered by Soin Labs. 2020.</span>
      </footer>
    </div>
  );
}

const style = css`
  header {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    color: #97f3ee;
    background-color: #3a0ca3;
    border: 3px solid #3a0ca3;
    min-height: 674px;
    padding: 42px 68px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        background-color: #7059b9;
        height: 52px;
        width: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }

    .title {
      position: relative;
      padding: 0 118px;

      h4 {
        text-transform: uppercase;
        margin: 0;
        padding: 0;
      }

      h1 {
        text-transform: uppercase;
        font-weight: bolder;
        font-size: 148px;
        color: #ffffff;
        margin: 0;
        padding: 0;
        letter-spacing: -8px;
        line-height: 1;
        width: 48%;
        margin-left: -11px;
        margin-bottom: 32px;

        span {
          border-bottom: 14px solid #97f3ee;
          display: inline-block;
          line-height: 0.9;
        }
      }

      h5 {
        font-weight: 600;
        font-size: 24px;
        color: #ffffff;
        margin: 0;
        padding: 0;
      }
    }
  }

  main {
    .categories {
      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 61px 45px;
        li {
          padding: 44px;
          border-right: 0.5px solid #bdbdbd;
          :first-of-type {
            padding-left: unset;
          }
          :last-of-type {
            border-right: unset;
            padding-right: unset;
          }

          i {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 54px;
            height: 54px;
            padding: 6px 0;

            .line {
              border-left: 4px solid #3a0ca3;
              height: 26px;
              margin-right: 4px;
            }
          }
          h4 {
            margin: 0;
            padding: 0;
            font-style: normal;
            font-weight: bolder;
            font-size: 24px;
            line-height: 33px;
            color: #333333;
            text-transform: uppercase;
          }

          span {
            font-style: italic;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            color: #333333;
          }

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 19px;
            color: #333333;
          }
        }
      }
    }
    .articles {
      display: flex;
      flex-direction: row;
      width: 100%;

      > * {
        flex: 1 100%;
      }

      article {
        height: 518px;
        background-size: cover !important;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 40px 72px;
        position: relative;

        .overlay {
          background: #333333;
          mix-blend-mode: multiply;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 1;
        }

        :first-of-type {
          background: url(${usableImage});
        }
        :nth-of-type(2) {
          background: url(${universalImage});
        }
        :last-of-type {
          background: url(${accesibleImage});
        }
        .info {
          z-index: 2;

          h5 {
            font-style: normal;
            font-weight: 800;
            font-size: 22px;
            line-height: 30px;
            color: #97f3ee;
            text-transform: uppercase;
            margin: 0;
            padding: 0;
          }

          h4 {
            font-style: normal;
            font-weight: 800;
            font-size: 26px;
            line-height: 35px;
            text-transform: uppercase;
            color: #ffffff;
            margin: 0;
            padding: 0;
            margin: 14px 0px 23px 0px;
          }

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            color: #ffffff;
            margin: 0;
            width: 85%;
          }

          button {
            background: #97f3ee;
            border-radius: 5px;
            height: 50px;
            border: unset;
            color: #3a0ca3;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            padding: 16px 25px 16px 25px;
            margin-top: 18px;

            i {
              margin-left: 10px;
            }
          }
        }
      }
    }

    .newsletter {
      display: flex;

      > * {
        flex: 1 100%;
      }

      article {
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #3a0ca3;

        :first-of-type {
          background-color: #3a0ca3;
          height: 624px;
          padding: 95px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h5 {
          font-style: normal;
          font-weight: 800;
          font-size: 22px;
          line-height: 30px;
          text-transform: uppercase;
          color: #97f3ee;
          text-align: center;
        }

        p {
          font-style: normal;
          font-weight: 800;
          font-size: 50px;
          line-height: 57px;
          letter-spacing: -0.04em;
          color: #ffffff;
          width: 80%;
          margin: 0;

          span {
            border-bottom: 13px solid #97f3ee;
            display: inline-block;
            line-height: 0.87;
          }
        }

        form {
          padding: 100px 80px;
          display: flex;
          flex-direction: column;

          span {
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 27px;
            color: #333333;
          }

          .MuiTextField-root {
            margin-top: 60px;
          }

          input {
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
            color: #4f4f4f;
          }

          button {
            background-color: transparent;
            border: 1px solid #333333;
            border-radius: 5px;
            box-sizing: border-box;
            min-height: 75px;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 25px;
            max-width: 314px;
            margin-top: 60px;

            i {
              margin-left: 8px;

              svg {
                height: 12px;
                width: 12px;
                path {
                  stroke: black;
                }
              }
            }
          }
        }
      }
    }
  }

  footer {
    padding: 52px 0px 22px 0px;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 27px;
        color: #4f4f4f;
        margin-right: 75px;

        :last-of-type {
          margin-right: 0;
        }
      }
    }

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #4f4f4f;
      text-align: center;
      display: block;
      margin-top: 35px;
    }
  }
`;
