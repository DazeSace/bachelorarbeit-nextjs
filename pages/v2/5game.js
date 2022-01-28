import Link from "next/link";
import {useState} from "react";
import Head from "next/head";
import Split from "../../components/Split";

const FiveGame = (props) => {
    const [question, setQuestion] = useState(0)

    const data = {
        'word': 'pathophysiologisch',
        'splits': [4, 10],
        'syllables': ['patho', 'physio', 'logisch'],
        'explaination': 'well because it is what it is',
    }

    const letters = [...data.word]
    const [placed, setPlaced] = useState([])
    const [numOfSplits, setNumOfSplits] = useState(data.splits.length)
    const [result, setResult] = useState('')
    const [ready, setReady] = useState(false)

    return (
        <>
            <Head>
                <title>MedTerm App</title>
                <meta name='description' content='MedTerm App - Medizinische Terminologie lernen'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <main className={'text-midnight w-11/12 mx-auto font-bold'}>
                <p className={'text-xl pt-4'}>Frage {question}</p>
                <div className={'flex bg-process py-4 mt-4 justify-center border-fogra border-2 rounded-lg'}>
                    {letters.map((letter, key) => (
                        <div
                            key={key}
                            className={'flex justify-center text-3xl text-fogra font-bold cursor-default'}>
                            {letter}
                            {key === letters.length - 1
                                ? null
                                : <div onClick={() => updateSplits(key)}>
                                    <Split selected={placed.includes(key)}/>
                                </div>
                            }
                        </div>))
                    }
                </div>
                <p className={'text-2xl text-center font-bold mt-4'}>{result}</p>
                {ready
                    ? <Link href={'/ugame'} passHref={false}>
                        <div
                            className={'text-white cursor-pointer text-center text-xl font-bold bg-midnight py-3 rounded-md'}>
                            <p>WEITER</p>
                        </div>
                    </Link>
                    : <div
                        className={'text-white cursor-pointer text-center text-xl font-bold bg-midnight py-3 rounded-md'}
                        onClick={() => buttonHandler()}>
                        <p>PRÜFEN</p>
                    </div>
                }

            </main>
            <footer className={'text-midnight font-bold text-center mt-10'}>
                <p>Copyright 2021 - David Melzer</p>
            </footer>
        </>
    )


    function buttonHandler() {
        let expected = data.splits
        if (checker(placed, expected)) {
            setReady(true)
            setResult('Super, das ist richtig!')
        } else {
            setResult("Versuch's nochmal")
        }

    }

    function checker(arr, target) {
        return target.every(v => arr.includes(v))
    }

    function updateSplits(index) {
        if (!placed.includes(index)) {
            if (numOfSplits === 0) return
            setNumOfSplits(numOfSplits - 1)
            setPlaced([...placed, index])
        } else {
            setNumOfSplits(numOfSplits + 1)
            let tmpIndex = placed.indexOf(index)
            placed.splice(tmpIndex, 1)
        }
    }
}


export default FiveGame
