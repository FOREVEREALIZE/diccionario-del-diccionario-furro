export default function Meaning({ number, type, inflection, definition }: {
    number: string,
    type: string,
    inflection: string,
    definition: string,
}) {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-black text-xl">{number}. "{inflection}" {type}.</h1>
            <h2 className="text-black text-xl px-5">{definition}</h2>
        </div>
    )
}
