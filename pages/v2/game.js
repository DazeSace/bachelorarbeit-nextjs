import {useState} from "react";
import Head from "next/head";
import NavBar from "../../components/v2/NavBar";
import Footer from "../../components/v2/Footer";
import SplitGame from "../../components/v2/SplitGame";
import BasicButtonMidnight from "../../components/v2/BasicButtonMidnight";
import TranslateGame from "../../components/v2/TranslateGame";
import EndGame from "../../components/v2/EndGame";
import GameSummary from "../../components/v2/GameSummary";

const Game = () => {

    const data = [
        {
            'id': 1,
            'word': 'pathophysiologisch',
            'splits': [4, 10],
            'parts':
                [
                    {
                        'word': 'patho',
                        'solution': 'Krankheit',
                    },
                    {
                        'word': 'physio',
                        'solution': 'Natur',
                    },
                    {
                        'word': 'logisch',
                        'solution': 'Lehre',
                    },
                ],
        },
        {
            'id': 2,
            'word': 'pathophysiologisch',
            'splits': [4, 10],
            'parts':
                [
                    {
                        'word': 'patho',
                        'solution': 'Krankheit',
                    },
                    {
                        'word': 'physio',
                        'solution': 'Natur',
                    },
                    {
                        'word': 'logisch',
                        'solution': 'Lehre',
                    },
                ],
        },
    ]

    const buttonHandlerFunctions = [handleButtonSplitGame, handleButtonTranslateGame, handleButtonEndGame]

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
                <div className={'h-full w-11/12 md:w-2/3 mx-auto'}>
                    {renderGames(gamePart)}
                    <BasicButtonMidnight
                        link={gamePart === 3 ? '/v2' : ''}
                        text={gamePart === 3 ? 'zurück zum Start' : 'Weiter'} className={'lg:w-1/3 lg:mx-auto mt-10'}
                        onClick={gamePart === 3 ? null : buttonHandlerFunctions[gamePart]}
                    />
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
                return <TranslateGame data={data[round]} tellResult={toldResult => handleResultTranslateGame(toldResult)}/>
            case 2:
                return <EndGame data={data[round]}/>
            case 3:
                return <GameSummary/>
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

    function handleResultTranslateGame(inputResult) {
        console.log(inputResult)
    }

    function handleButtonSplitGame() {
        let expected = data[round].splits
        if (arrayCompare(resultSplitGame, expected)) {
            setPoints(points + 10)
        }
        setGamePart(gamePart + 1)
    }

    function handleButtonTranslateGame() {
        console.log('Translate')
        setGamePart(gamePart + 1)
    }

    function handleButtonEndGame() {
        console.log('End')
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

export default Game
