import {useEffect, useState} from "react";
import Head from "next/head";
import NavBar from "../../components/v2/NavBar";
import Footer from "../../components/v2/Footer";
import SplitGame from "../../components/v2/SplitGame";
import BasicButtonMidnight from "../../components/v2/BasicButtonMidnight";

const FiveGame = () => {

    const data = [
        {
            'id': 1,
            'word': 'pathophysiologisch',
            'splits': [4, 10],
            'syllables': ['patho', 'physio', 'logisch'],
        },
        {
            'id': 2,
            'word': 'pathophysiologisch',
            'splits': [4, 10],
            'syllables': ['patho', 'physio', 'logisch'],
        },
    ]

    const [points, setPoints] = useState(0)
    const [gamePart, setGamePart] = useState(0)
    const [result, setResult] = useState([])

    useEffect(() => {
        console.log(result)
    }, [result])

    return (
        <>
            <Head>
                <title>MedTerm App</title>
                <meta name='description' content='MedTerm App - Medizinische Terminologie lernen'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <NavBar/>
            <div className={'text-midnight h-screen -mt-16'}>
                <div className={'h-full w-11/12 mx-auto'}>
                    <SplitGame data={data[0]} tellResult={toldResult => handleResultSplitGame(toldResult)}/>
                    <BasicButtonMidnight link={''} text={'Weiter'} className={''} onClick={handleButtonSplitGame}/>
                </div>
            </div>
            <Footer/>
        </>
    )

    function handleResultSplitGame(inputResult) {
        let tmp = result
        let tmp2 = [inputResult]
        if (tmp.includes(inputResult)) {
            let index = tmp.indexOf(inputResult)
            if (index !== -1) {
                tmp.splice(index, 1);
            }
        } else {
            tmp.push(...tmp2)
            setResult(tmp)
        }
    }

    function handleButtonSplitGame() {
        let expected = data[0].splits
        if (arrayCompare(result, expected)) {
            console.log('Super, das ist richtig!')
        } else {
            console.log("Versuch's nochmal")
        }
    }

    function arrayCompare(_arr1, _arr2) {
        if (
            !Array.isArray(_arr1)
            || !Array.isArray(_arr2)
            || _arr1.length !== _arr2.length
        ) {
            return false;
        }

        const arr1 = _arr1.concat().sort();
        const arr2 = _arr2.concat().sort();

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
}

export default FiveGame
