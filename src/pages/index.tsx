export default function () {
    return (
        <div className="w-full h-screen bg-white">
            <header className="w-full h-24 border-b-4 border-b-black flex items-center p-5">
                <a className="text-3xl font-bold text-black" href="/">El Diccionario del Diccionario Furro</a>
            </header>
            <div className="w-full h-full p-5">
                <h1 className="text-2xl font-bold text-black">Definiciones disponibles:</h1>
                <ul className="list-disc list-inside text-black">
                    <li>
                        <a href="/d/bueno" className="text-blue-500 underline">Bueno</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
