export default function Meaning({ number, type, inflection, definition }) {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-black text-xl">{number}. {type}. {inflection}</h1>
            <h2 className="text-black text-xl px-5">{definition}</h2>
        </div>
    )
}
