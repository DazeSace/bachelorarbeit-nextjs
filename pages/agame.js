import Head from 'next/head';
import Navbar from '../components/NavBar';
import {useState} from "react";
import Split from "../components/Split";


const Agame = () => {

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


    return (
        <>
            <Head>
                <title>MedTerm App</title>
                <meta name='description' content='MedTerm App - Medizinische Terminologie lernen'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Navbar/>
            <main className={'w-3/4 mx-auto'}>
                <div className={'flex flex-col justify-center bg-ncs border-fogra border-2 rounded-lg mt-12 '}>
                    <div className={'flex flex-col justify-center p-5'}>
                        <p className={'font-bold'}>Aufteilungen: {numOfSplits}</p>
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
                        <div
                            className={'flex justify-center mt-6 py-2 font-bold text-white border-fogra border-2 bg-midnight rounded-md w-1/4 mx-auto cursor-pointer'}
                            onClick={() => buttonHandler()}>
                            <p>WEITER</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className={'w-3/4 mx-auto text-center mt-10 font-bold'}>
                <p>Copyright 2021 David Melzer</p>
            </footer>
        </>
    )

    function buttonHandler() {
        let expected = data.splits
        if(checker(placed, expected)){
            setResult('Super, das ist richtig!')
        } else {
            setResult("Versuch's nochmal")
        }

    }

    function checker(arr, target){
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
        console.log(placed)
    }
}
export default Agame
