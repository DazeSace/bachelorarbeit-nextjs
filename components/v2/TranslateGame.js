import {useState} from "react";
import {BsChevronDoubleRight} from "react-icons/bs";

const TranslateGame = (props) => {


    const [wordindex, setWordindex] = useState(0)
    const words = props.data.parts

    const [input, setInput] = useState('')
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const dropDownOptions = [
        'Schmerz',
        'Entzündung',
        'Fieber',
        'Erbrechen',
        'Krebs, Geschwulst',
        'Abgestorben',
        'Tod',
        'Gift',
        'Krampf',
        'Verstopfung',
        'Verhärtung',
        'Fluss',
        'Lehre',
        'Natur',
        'Krankheit',
    ]

    console.log(words)
    const answers = []


    return (
        <div className={'flex justify-center flex-col text-xl font-bold tracking-wide pt-48'}>
            <div className={'flex justify-center space-x-4'}>
                {words.map((word, key) =>
                    <div key={key}
                         className={`text-2xl ${key === wordindex ? 'border-2 border-midnight' : ''} px-2 py-1 rounded-md`}>
                        <p>{word.word}</p>
                    </div>
                )}
            </div>
            <div className={'flex space-x-2 lg:w-1/3 lg:mx-auto mt-4'}>
                <input
                    className={'border border-midnight rounded-md px-4 py-2 w-full'}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setDropdownVisible(true)}

                />
                {wordindex < words.length - 1 &&
                    <div className={'flex bg-midnight h-12 w-12 rounded-md'} onClick={arrowButtonHandler}>
                        <p className={'self-center mx-auto text-white'}><BsChevronDoubleRight/></p>
                    </div>
                }
            </div>
            {dropdownVisible &&
                <div className={'h-40 overflow-y-scroll shadow-md pt-1 rounded-b-md lg:w-1/3 lg:mx-auto'}>
                    {dropDownOptions.map((option, key) =>
                        <p
                            className={'px-2 py-0.5'}
                            key={key}
                            onClick={() => {
                                setInput(option)
                                setDropdownVisible(false)
                            }}
                        >
                            {option}
                        </p>
                    )}
                </div>
            }
        </div>
    )

    function arrowButtonHandler() {
        if (wordindex < words.length) {
            answers.push(input === words[wordindex].solution)
            setWordindex(wordindex + 1)
            setInput('')
            console.log(answers)
        }
    }


}
export default TranslateGame
