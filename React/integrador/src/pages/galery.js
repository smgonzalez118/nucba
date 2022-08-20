import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Galery() {
  return (
    <section id="galery">
        <Carousel className="slider">
        <Carousel.Item className="imgSlider">
            <img
            className="d-block w-100"
            src="/images/hero1.jpg"
            alt="Imagen de conexiones"
            />
            <Carousel.Caption>
            <h3>Tecnología</h3>
            <p>Hacemos crecer tu capital con la última tecnología disponible.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="imgSlider">
            <img
            id="midImage"
            className="d-block w-100 imgSlider"
            src="/images/hero2.jpg"
            alt="Imagen de Wall Street"
            />

            <Carousel.Caption>
            <h3 className="mid midTitle">Profesionalismo</h3>
            <p className="mid">Para que estés a la altura en un ambiente altamente competitivo.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="imgSlider">
            <img
            className="d-block w-100 imgSlider"
            src="/images/hero3.jpg"
            alt="Imagen de Símbolos indistintos"
            />

            <Carousel.Caption>
            <h3> Mejora continua </h3>
            <p> Nuestro personal se somete a capacitación constante </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </section>
  );
}

export default Galery;