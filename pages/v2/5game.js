import {useState} from "react";
import Head from "next/head";
import NavBar from "../../components/v2/NavBar";
import Footer from "../../components/v2/Footer";
import SplitGame from "../../components/v2/SplitGame";
import BasicButtonMidnight from "../../components/v2/BasicButtonMidnight";
import TranslateGame from "../../components/v2/TranslateGame";
import EndGame from "../../components/v2/EndGame";

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
    const [round, setRound] = useState(0)
    const [resultSplitGame, setResultSplitGame] = useState([])

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
                    {renderGames(gamePart)}
                    <BasicButtonMidnight link={''} text={'Weiter'} className={''} onClick={handleButtonSplitGame}/>
                    <p className={'text-center mt-4 text-xl font-bold tracking-wide'}>Punkte: {points}</p>
                </div>
            </div>
            <Footer/>
        </>
    )

    function renderGames(gamePartStatus) {
        switch (gamePartStatus) {
            case 0:
                return <SplitGame data={data[round]} tellResult={toldResult => handleResultSplitGame(toldResult)}/>
            case 1:
                return <TranslateGame data={data[round]}/>
            case 2:
                return <EndGame data={data[round]}/>
            case 3:
                return <EndGame data={data[round]}/>
        }
    }

    function handleResultSplitGame(inputResult) {
        let tmp = resultSplitGame
        let tmp2 = [inputResult]
        if (tmp.includes(inputResult)) {
            let index = tmp.indexOf(inputResult)
            if (index !== -1) {
                tmp.splice(index, 1);
            }
        } else {
            tmp.push(...tmp2)
            setResultSplitGame(tmp)
        }
    }

    function handleButtonSplitGame() {
        let expected = data[round].splits
        if (arrayCompare(resultSplitGame, expected)) {
            setPoints(points + 10)
        }
        setGamePart(gamePart + 1)
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
