import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="w-full h-screen bg-white">
			<header className="w-full h-24 border-b-4 border-b-black flex items-center p-5">
				<h1 className="text-3xl font-bold text-black">El Diccionario del Diccionario Furro</h1>
			</header>
			<div className="w-full h-full p-5">
				<h1 className="text-2xl font-bold">Definiciones disponibles:</h1>
				<ul className="list-disc list-inside">
					<li>
						<a href="/definition/owo" className="text-blue-500 underline">OwO</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
