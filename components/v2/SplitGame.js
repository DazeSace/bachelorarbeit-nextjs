import Split from "../Split";
import SplitVisualAssist from "./SplitVisualAssist";

const SplitGame = (props) => {
    const letters = [...props.data.word]

    return (
        <div className={'flex justify-center flex-col text-xl font-bold tracking-wide pt-48'}>
            <div className={'flex justify-center'}>
                {letters.map((letter, key) => {
                    return (
                        <div key={key} className={'flex'}>
                            <p>{letter}</p>
                            <div onClick={() => props.tellResult(key)}>
                                <Split/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={'flex justify-center'}>
                {letters.map((letter, key) => {
                    return (
                        <div key={key} className={'flex'}>
                            <p className={'invisible'}>{letter}</p>
                            <SplitVisualAssist/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SplitGame
