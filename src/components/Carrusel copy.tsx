import { Carousel } from "flowbite-react";
import solo from "src/assets/images/solo.webp";
import solo1 from "src/assets/images/solo1.webp";
import solo2 from "src/assets/images/solo2.webp";
import solo3 from "src/assets/images/solo3.webp";
import solo4 from "src/assets/images/solo4.webp";
import solo5 from "src/assets/images/solo5.webp";
import solo6 from "src/assets/images/solo6.webp";

export default function Carrusel1() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%] my-2 ">
            <Carousel slideInterval={5000}>
                <img src={solo.src} alt="..." className="  h-full object-contain bg-black" />
                <img src={solo1.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={solo2.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={solo3.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={solo4.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={solo5.src} alt="..." className=" h-full object-contain bg-black" />
                <img src={solo6.src} alt="..." className=" h-full object-contain bg-black" />
            </Carousel>
        </div>
    );
}
