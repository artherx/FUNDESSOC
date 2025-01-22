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
					alt="Persona de tercera edad comiendo en la fundación"
					className="  h-full object-contain bg-black"
				/>
				<img
					src={solo1.src}
					alt="Persona de tercera edad sonriendo en la fundación"
					className=" h-full object-contain bg-black"
				/>
				<img
					src={solo2.src}
					alt="Persona de tercera edad foto en la fundación"
					className=" h-full object-contain bg-black"
				/>
				<img
					src={solo3.src}
					alt="Persona de tercera edad sonriendo en la fundación"
					className=" h-full object-contain bg-black"
				/>
				<img
					src={solo4.src}
					alt="Persona de tercera edad riendo en la fundación"
					className=" h-full object-contain bg-black"
				/>
				<img
					src={solo5.src}
					alt="Persona de tercera edad foto en la fundación"
					className=" h-full object-contain bg-black"
				/>
				<img
					src={solo6.src}
					alt="Persona de tercera edad foto en la fundación"
					className=" h-full object-contain bg-black"
				/>
			</Carousel>
		</div>
	);
}
