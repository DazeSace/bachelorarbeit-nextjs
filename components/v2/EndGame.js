import BasicButtonMidnight from "./BasicButtonMidnight";

const EndGame = (props) => {

    return (
        <div className={'flex justify-center flex-col text-xl font-bold tracking-wide pt-48'}>
            <p className={'text-center'}>Welches Wort passt am besten zu</p>
            <p className={'text-center'}>{"\"" + props.data.word + "\"?"}</p>
            <div className={'mt-10 space-y-2'}>
                <BasicButtonMidnight text={'Lehre von den krankhaften Veränderungen am Körper'} link={'/v2/end'} className={'lg:w-1/3 lg:mx-auto px-2 bg-carib'}/>
                <BasicButtonMidnight text={'Arzt / Ärztin für Probleme mit dem Enddarm'} link={'/v2/end'} className={'lg:w-1/3 lg:mx-auto px-2'}/>
                <BasicButtonMidnight text={'Häufiges Wasserlassen'} link={'/v2/end'} className={'lg:w-1/3 lg:mx-auto px-2'}/>
                <BasicButtonMidnight text={'Rachen-Heilkunde'} link={'/v2/end'} className={'lg:w-1/3 lg:mx-auto px-2'}/>
            </div>

        </div>
    )
}
export default EndGame
