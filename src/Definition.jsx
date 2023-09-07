import {useParams} from "react-router-dom";

export default function Definition() {
	const params = useParams();

	return (
		<div className="w-full h-screen bg-white">
			<header className="w-full h-24 border-b-4 border-b-black flex items-center p-5">
				<h1 className="text-3xl font-bold text-black">El Diccionario del Diccionario Furro</h1>
			</header>
			<div className="w-full h-full p-5">
				<h1 className="text-2xl font-bold">Definicion de "{params.word}"</h1>
				HAHA ME DEFINE SHIT
			</div>
		</div>
	);
}
