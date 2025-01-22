import { Carousel } from "flowbite-react";
import solo  from "/public/images/solo.webp";
import solo1 from "/public/images/solo1.webp";
import solo2 from "/public/images/solo2.webp";
import solo3 from "/public/images/solo3.webp";
import solo4 from "/public/images/solo4.webp";
import solo5 from "/public/images/solo5.webp";
import solo6 from "/public/images/solo6.webp";

export default function Carrusel1() {
	return (
		<div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-[80%] my-2 ">
			<Carousel slideInterval={5000}>
				<img
					src={solo.src}
					alt="Adulto mayor disfrutando de una comida en la fundación"
					className="h-full object-contain bg-black"
				/>
				<img
					src={solo1.src}
					alt="Persona mayor sonriendo en la fundación"
					className="h-full object-contain bg-black"
				/>
				<img
					src={solo2.src}
					alt="Retrato de una persona mayor en la fundación"
					className="h-full object-contain bg-black"
				/>
				<img
					src={solo3.src}
					alt="Adulto mayor feliz en la fundación"
					className="h-full object-contain bg-black"
				/>
				<img
					src={solo4.src}
					alt="Persona de la tercera edad riendo con alegría en la fundación"
					className="h-full object-contain bg-black"
				/>
				<img
					src={solo5.src}
					alt="Retrato de una persona mayor en un evento de la fundación"
					className="h-full object-contain bg-black"
				/>
				<img
					src={solo6.src}
					alt="Adulto mayor disfrutando de un momento en la fundación"
					className="h-full object-contain bg-black"
				/>
			</Carousel>
		</div>
	);
}
