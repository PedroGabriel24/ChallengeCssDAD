import React from "react";
import "./CarsComponent.css";
const TUCSON_IMAGE =
  "https://www.webmotors.com.br/imagens/prod/347318/HYUNDAI_TUCSON_1.6_16V_TGDI_GASOLINA_LIMITED_ECOSHIFT_34731809010154692.webp";

const FERRARI_IMAGE = 'https://www.webmotors.com.br/imagens/prod/348762/FERRARI_ROMA_3.9_V8_TURBO_GASOLINA_F1DCT_34876209043394051.webp';

const UNO_IMAGE = 'https://production.autoforce.com/uploads/version/profile_image/4973/model_main_webp_comprar-attractive-1-0_bdd1f6297b.png.webp';

const cars = [
  {
    carName: "Tucson",
    carDescription: "Carro bem grande e bonito",
    carImage: TUCSON_IMAGE,
  },
  {
    carName: "Ferrari",
    carDescription: "Carro bem moderno e bonito",
    carImage: FERRARI_IMAGE,
  },
  {
    carName: "FIAT Uno",
    carDescription: "Carro famoso, popular e confortavel",
    carImage: UNO_IMAGE,
  },
];

const CarsComponent = () => {
  return (
    <div className="carsList">
      {cars.map((car, index) => (
        <div key={index} className="carItem">
          <h1>{car.carName}</h1>
          <img src={car.carImage} alt={car.carName} />
          <p>{car.carDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default CarsComponent;
