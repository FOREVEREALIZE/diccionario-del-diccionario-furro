import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full h-screen bg-white">
            <header className="w-full h-24 border-b-4 border-b-black flex items-center p-5">
                <Link className="text-3xl font-bold text-black" href="/">El Diccionario del Diccionario Furro</Link>
            </header>
            <div className="w-full h-full p-5">
                <h1 className="text-2xl font-bold text-black">Definiciones disponibles:</h1>
                <ul className="list-disc list-inside text-black">
                    <li>
                        <Link href="/d/bueno" className="text-blue-500 underline">Bueno</Link>
                    </li>

                    <li>
                        <Link href="/d/yiwu" className="text-blue-500 underline">Yiwu</Link>
                    </li>
                    
                    <li>
                                            <Link href="/d/alex" className="text-blue-500 underline">Alex</Link>
                                        </li>
                </ul>
            </div>
        </div>
    );
}
