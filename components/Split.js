import { useState} from "react";


const Split = (props) => {

    const [selected, setSelected] = useState(false)

    return (
        <div
            className={`w-1 cursor-pointer h-8 mx-0.5 hover:bg-midnight ${selected ? 'bg-black' : ''}`}
            onClick={() => setSelected(!selected)}
        />
    )
}
export default Split
