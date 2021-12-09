import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

const avoFacts = [
  {
    title: 'La mayoría de los aguacates proceden de México',
    content:
      'Aunque los aguacates se cultivan en California y Florida, la mayoría de los que se venden en los supermercados proceden del centro-sur de México. La razón principal de la abundancia de aguacates "al sur de la frontera" es que México está bendecido con un clima de cultivo durante todo el año. Se cree que el aguacate se originó en el estado de Puebla (México) en el año 10.000 antes de Cristo.'
  },
  {
    title: 'Los conquistadores eran grandes aficionados.',
    content:
      'Los exploradores españoles que llegaron a México en el siglo XVI sobrevivieron con aguacates y fueron los primeros europeos en consumirlos. A raíz de la conquista española, el aguacate se extendió a Sudamérica y Centroamérica.'
  },
  {
    title: '"Aguacate" no era su nombre original.',
    content:
      'El irlandés Sir Hans Sloane lo llamó aguacate en 1696 en un catálogo de plantas jamaicanas. También apodó al árbol del aguacate como el "árbol de la pera caimán".”'
  },
  {
    title: 'En realidad es una fruta.',
    content:
      '¿Sabías que el aguacate es una fruta? Aunque no es dulce, pertenece a la familia de las frutas, no a la de las verduras. Esto se debe a que el aguacate forma parte de la familia de las plantas con flor, las lauráceas.'
  },
  {
    title: 'Hay un truco secreto para madurarlas rápidamente',
    content:
      '¿Necesitas madurar ese aguacate cuanto antes? Colócalo en una bolsa de papel marrón con un plátano o dos. Los plátanos liberarán gas etileno, una hormona vegetal natural que ayuda a madurar la fruta. Por otro lado, echa un vistazo a esta guía para aprender a almacenarlos para más adelante.'
  }
]

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <Header as='h1' textAlign='center'>
          13 datos sorprendentes sobre los aguacates
        </Header>
        <figure>
          <Image src='/images/avocados.jpg' alt='Avocados on a table' />
          <figcaption>
            Originalmente de{' '}
            <a
              target='_blank'
              href='https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/' rel='noreferrer'
            >
              Taste of Home
            </a>
          </figcaption>
        </figure>
        <ol>
          {avoFacts.map(({ title, content }) => (
            <li key={title}>
              <h3 className='ui header'>{title}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ol>
      </section>

      <style jsx>{`
        figure,
        ol {
          padding: 0;
          margin: 0;
        }

        figure {
          margin: 2rem auto 3rem;
          text-align: center;
        }
        figcaption {
          margin-top: 0.5rem;
          font-site: 0.7rem;
          color: #808080;
        }

        ol {
          list-style: none;

          // Look ma! Responsive grid with no Media queries :)
          // https://css-tricks.com/look-ma-no-media-queries-responsive-layouts-using-css-grid/
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 4.5rem 3rem;

          // Look ma! A CSS Counter :)
          // https://moderncss.dev/totally-custom-list-styles/
          counter-reset: orderedlist;
        }
        li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);

          // Boring stuff
          position: absolute;
          top: -43px;
          left: -5px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }

        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
      `}
      </style>
    </Layout>
  )
}

export default AboutPage
