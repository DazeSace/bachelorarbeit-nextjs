import Head from 'next/head';
import Navbar from '../components/NavBar';
import {useEffect, useState} from "react";


const Agame = () => {

    const data = {
        'word': 'pathophysiologisch',
        'splits': [4,10],
        'syllables': ['patho', 'physio', 'logisch'],
        'explaination': 'well because it is what it is',
    }

    const letters = [...data.word]

    const [splits, setSplits] = useState([])

    useEffect(() => {
        let tmp = []
        letters.forEach(() => {
            tmp.push(false)
        });
        setSplits(tmp)
    }, [])

    function updateSplit(index) {
        let tmp = splits
        tmp[index] = !tmp[index]
        setSplits(tmp)
        console.log(splits)
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
                <p>A-Part Komponente</p>
                <div className={'flex justify-center bg-ncs rounded-xl'}>
                    <div className={'flex justify-center p-5'}>
                        {letters.map((letter, key) => (
                            <div key={key} className={'flex justify-center text-3xl cursor-default'}>
                                <p>{letter}<span
                                    className={'font-bold pr-0.5 ' + splits[key] ? 'text-midnight' : 'text-ncs'}
                                    onClick={() => updateSplit(key)}>|</span></p>
                            </div>))
                        }
                    </div>
                </div>
            </main>
            <footer className={'w-3/4 mx-auto text-center'}>
                <p>Copyright 2021 David Melzer</p>
            </footer>
        </>
    )
}
export default Agame
