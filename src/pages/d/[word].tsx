import {useRouter} from 'next/router'
import {DM_Serif_Display, Voces} from 'next/font/google'
import {useEffect, useState} from "react";
import Meaning from "@/components/Meaning";
import Empty from "@/components/Empty";
import axios from "axios";

const dm_serif_display = DM_Serif_Display({
    weight: "400",
    subsets: ["latin-ext"],
})

const voces = Voces({
    weight: "400",
    subsets: ["latin-ext"],
})

export default function () {
    const preresponse = {
        inflections: []
    }

    const router = useRouter()

    // const [formattedWord, setFormattedWord] = useState("")
    const [wordData, setWordData] = useState(undefined)

    // const formatWord = (word: string) => {
    //     return word.replace(/__/g, " ").split(" ").map((word) => {
    //         return word.charAt(0).toUpperCase() + word.slice(1)
    //     }).join(" ")
    // }

    useEffect(() => {
        if (router.query.word) {
            // setFormattedWord(formatWord(router.query.word as string))
            axios.get("/definitions/" + router.query.word + ".json").then((res) => {
                setWordData(res.data)
            })
        }
    }, [router.query.word]);

    return (
        <div className="w-full h-screen bg-white">
            <header className="w-full h-24 border-b-4 border-b-black flex items-center p-5">
                <a className="text-3xl font-bold text-black" href="/">El Diccionario del Diccionario Furro</a>
            </header>
            <div className="w-full h-full p-5 flex flex-col gap-5">
                <h1 className={`text-6xl font-bold text-black ${dm_serif_display.className}`}>
                    {(wordData || preresponse).formatted} <span
                    className={`text-2xl font-bold text-gray-500 ${voces.className}`}>/{(wordData || preresponse).phonetics}/</span>
                </h1>
                <Empty/>
                {(wordData || preresponse).inflections.map((inflection) => {
                    return (
                        <Meaning
                            number={inflection.number}
                            type={inflection.type}
                            inflection={inflection.inflected_form}
                            definition={inflection.definition}
                        />
                    )
                })}
            </div>
        </div>
    )
}
