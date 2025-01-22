import { Carousel } from "flowbite-react";
import duo   from "/public/images/duo.webp";
import duo1  from "/public/images/duo1.webp";
import duo2  from "/public/images/duo2.webp";
import duo3  from "/public/images/duo3.webp";
import duo4  from "/public/images/duo4.webp";
import grup  from "/public/images/grup.webp";
import grup1 from "/public/images/grup1.webp";

export default function Carrusel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%] my-2 ">
            <Carousel slideInterval={5000}>
                <img src={duo.src} alt="Adulto mayor y joven sonriendo juntos en la fundación" className="h-full object-contain bg-black" />
                <img src={duo1.src} alt="Persona mayor disfrutando de una comida en la fundación" className="h-full object-contain bg-black" />
                <img src={duo2.src} alt="Dos mujeres mayores compartiendo una sonrisa en la fundación" className="h-full object-contain bg-black" />
                <img src={duo3.src} alt="Adulto mayor en silla de ruedas acompañado por un cuidador sonriente" className="h-full object-contain bg-black" />
                <img src={duo4.src} alt="Selfie de un adulto mayor en silla de ruedas junto a un cuidador en la fundación" className="h-full object-contain bg-black" />
                <img src={grup.src} alt="Grupo de adultos mayores tomándose una selfie en la fundación" className="h-full object-contain bg-black" />
                <img src={grup1.src} alt="Grupo de personas de la fundación posando juntos para una selfie" className="h-full object-contain bg-black" />
            </Carousel>
        </div>
    );
}
