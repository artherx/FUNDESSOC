import { Carousel } from "flowbite-react";
import duo from "src/assets/images/duo.webp";
import duo1 from "src/assets/images/duo1.webp";
import duo2 from "src/assets/images/duo2.webp";
import duo3 from "src/assets/images/duo3.webp";
import duo4 from "src/assets/images/duo4.webp";

export default function Carrusel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%]">
            <Carousel slideInterval={5000}>
                <img src={duo.src} alt="..." className="  h-full object-contain bg-black" />
                <img src={duo1.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={duo2.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={duo3.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={duo4.src} alt="..." className=" h-full object-contain bg-black" />
            </Carousel>
        </div>
    );
}
