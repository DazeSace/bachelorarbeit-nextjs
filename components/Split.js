import {useEffect, useState} from "react";


const Split = (props) => {

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        setSelected(props.selected)
    }, [props.selected])

    return (
        <div
            className={`w-1 cursor-pointer h-10 mx-0.5 hover:bg-midnight ${selected ? 'bg-black' : ''}`}
            onClick={() => setSelected(!selected)}
        />
    )
}
export default Split
