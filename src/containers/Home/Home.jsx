import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../../Services/apiCalls";
import Oposiciones from "../../assets/Oposiciones.jpg";
import phone from "../../assets/phone.jpg";
import police2 from "../../assets/police2.jpg";
import firefighter from "../../assets/firefighter.jpg";
import forestryAgent from "../../assets/forestryAgent.jpg";
import sportnutritionist from "../../assets/sportnutritionist.jpg";
import trainer from "../../assets/trainer.jpg";
import cochecnp from "../../assets/cochecnp.jpg";
import limitado from "../../assets/limitado.png";
import manos from "../../assets/manos.jpg";
import pesa1 from "../../assets/pesa1.jpg";
import plandenutricion from "../../assets/plandenutricion.jpg";
import solucion from "../../assets/solucion.jpg";
import verificacion from "../../assets/verificacion.jpg";
import certificado from "../../assets/certificado.jpg";
import tiempolimitado from "../../assets/tiempolimitado.jpg";
import calendario from "../../assets/calendario.jpg";
import aniversario from "../../assets/aniversario.jpg";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div className="homePage">
      <section className="row oppositions">
        <div className="firstPart col-md-6 col-sm-6 col-xs-12">
          <h1>Nutricionistas especializados en oposiciones</h1>
          <br></br>
          <p>Te brindaremos un plan nutricional especifico</p>
          <p>para mejorar tu desempeño fisico y mental</p>
        </div>
      </section>

      <section className="services">
        <div className="opoxServices row">
          <div className="whoIsOpox col-md-12">
            <div className="whoIsOpoxContent">
              <h1>Oposkula la nueva forma de opositar</h1>
              <p>
                Oposkula es una plataforma digital para los opositores que realmente
                quieren ganarse una plaza.
              </p>
            </div>
          </div>
          <div className="serviceContent col-md-6 col-sm-6 col-xs-12">
            <img className="servicesImg" src={pesa1} alt=""></img>
            <div className="content">
              <h3>Entrenamiento Personalizado</h3>
              <p>
                Te daremos tu plan especifico de entrenamiento para tu oposición
              </p>
            </div>
          </div>

          <div className="serviceContent col-md-6 col-sm-6 col-xs-12">
            <img className="servicesImg2" src={plandenutricion} alt=""></img>
            <div className="content">
              <h3>Nutrición Personalizada</h3>
              <p>
                ¿No sabes que comer para rendir mejor? Plan de nutrición para
                que rindas al máximo
              </p>
            </div>
          </div>

          <div className="serviceContent col-md-6 col-sm-6 col-xs-12">
            <img className="servicesImg" src={manos} alt=""></img>
            <div className="content">
              <h3>Comprometidos contigo</h3>
              <p>Tendremos contacto constante para resolver tus dudas.</p>
            </div>
          </div>

          <div className="serviceContent col-md-6 col-sm-6 col-xs-12">
            <img className="servicesImg2" src={certificado} alt=""></img>
            <div className="content">
              <h3>Esfuerzo y Constancia</h3>
              <p>
                Estas 2 cualidades nos definen y te definirán si te unes a
                nuestro equipo
              </p>
            </div>
          </div>

          <div className="serviceContent col-md-6 col-sm-6 col-xs-12">
            <img className="servicesImg" src={verificacion} alt=""></img>
            <div className="content">
              <h3>Experiencia</h3>
              <p>El 90% de nuestros opositores pasan las pruebas fisicas</p>
            </div>
          </div>

          <div className="serviceContent col-md-6 col-sm-6 col-xs-12">
            <img className="servicesImg2" src={solucion} alt=""></img>
            <div className="content">
              <h3>Solución Completa</h3>
              <p>
                Tenemos la solución de entrenamiento y nutrición para que pases
                esa oposicion
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="row">
        <section className="titlePrices col-md-12">
          <div className="">
            <div className="">
              <h2>PRECIOS SUSCRIPCIÓN</h2>
            </div>
          </div>
        </section>

        <section className="ourPrices">
        <div className="opoxPrices">
          <div className="row prices">
            <div className="priceContainer col-md-4 col-sm-4 col-xs-4">
              <h2>Oferta hasta Junio</h2>
              <img className="priceImg" src={tiempolimitado} alt=""></img>
              <br></br>
              <br></br>
              <h3>10 €</h3>
              <p>¡Un mes de entrenamiento y nutrición por sólo 10€!</p>
              <a href="" className="button">
                Quiero la Oferta
              </a>
            </div>

            <div className="priceContainer col-md-4 col-sm-4 col-xs-4">
              <h2>Mensual</h2>
              <img className="priceImg" src={calendario} alt=""></img>
              <br></br>
              <br></br>
              <h3>50 €</h3>
              <p>¿Aún no nos conoces? ¡Pruebalo ya y cónocenos!</p>
              <div className="button">Suscribirme ahora</div>
            </div>

            <div className="priceContainer col-md-4 col-sm-4 col-xs-4">
              <h2>Anual</h2>
              <img className="priceImg" src={aniversario} alt=""></img>
              <br></br>
              <br></br>
              <h3>600 €</h3>
              <p>Paga ahora y recibe un 30% de descuento</p>
              <div className="button">Suscribirme ahora</div>
            </div>
          </div>
          </div>
        </section>
      </div>

      <section className="contactUs">
        <div className="lastPart">
          <h2>¿Quieres más información?</h2>
          <h3>¡Qué esperas, contacta con nosotros!</h3>
          <a
            href="https://api.whatsapp.com/send?phone=34649689420&text=Hola,%20me%20podrías%20dar
%20más%20información%20de%20los%20servicios%20que%20ofrecéis,%20muchas%20gracias."
          >
            <Button variant="success">Contacto</Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <Carousel>
      <Carousel.Item>
      <a href="servicios">
        <img
          className="phoneImg"
          src={phone}
          alt="First slide"
        />
     </a>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="servicios">
        <img
          className="nutritionistImg"
          src={sportnutritionist}
          alt="Second slide"
        />
        </a>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="servicios">
        <img
          className="coachImg"
          src={trainer}
          alt="Third slide"
        />
        </a>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */
}
