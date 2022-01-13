import Head from 'next/head';
import Navbar from '../components/NavBar';
import {useEffect, useState} from "react";


const UGame = () => {
    const data =
        [
            {
                'label': 'patho',
                'options': ['Krankheit, krankhafter Zustand', 'gesund, gesunder Zustand', 'Fieber'],
                'correct': 0
            },
            {
                'label': 'physio',
                'options': ['Seele', 'Gewebe', 'Natur'],
                'correct': 2
            },
            {
                'label': 'logisch',
                'options': ['Lehre / Wissenschaft', 'Erziehung', 'Ursache'],
                'correct': 0
            }
        ]

    const [counter, setCounter] = useState(0)
    const [options, setOptions] = useState(data[counter].options)
    const [result, setResult] = useState('')

    useEffect(() => {
        setOptions(data[counter].options)
    }, [counter])

    function optionClickHandler(index) {
        if (index === data[counter].correct) {
            let tmp
            if (counter === data.length - 1) {
                tmp = 0
                setResult('Yippie! Alles richtig :)')
            } else {
                setResult('Weiter so!')
                tmp = 1
            }
            setCounter(counter + tmp)
        } else {
            setResult('Fehler')
        }
    }

    return (
        <>
            <Head>
                <title>MedTerm App</title>
                <meta name='description' content='MedTerm App - Medizinische Terminologie lernen'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Navbar/>
            <main className={'w-3/4 mx-auto'}>
                <div
                    className={'flex flex-col justify-center bg-ncs text-fogra border-fogra border-2 rounded-lg mt-12 '}>
                    <div className={'flex flex-col justify-center p-5'}>
                        <div className={'flex space-x-4 mx-auto'}>
                            {data.map((part, key) =>
                                <p className={`text-3xl font-bold px-4 py-2 rounded-md ${counter === key ? 'border-4 border-fogra' : 'border-0'}`}
                                   key={key}>{part.label}</p>)}
                        </div>
                        <div className={'flex flex-col justify-center p-3 mt-8 space-y-2'}>
                            {options.map((option, key) =>
                                <div key={key} className={'flex justify-center mx-auto px-4 py-2 rounded-md bg-carib'}
                                     onClick={() => optionClickHandler(key)}>
                                    <p className={`font-bold`}>{option}</p>
                                </div>)}
                            <p className={'text-center text-2xl pt-6'}>{result}</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={'w-3/4 mx-auto text-center'}>
                <p>Copyright 2021 David Melzer</p>
            </footer>
        </>
    )
}
export default UGame
