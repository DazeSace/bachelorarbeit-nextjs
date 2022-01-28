import NavBar from "../../components/v2/NavBar";
import BasicButtonMidnight from "../../components/v2/BasicButtonMidnight";

const index = () => {
    return (
        <div className={'text-midnight w-11/12 mx-auto'}>
            <NavBar/>
            <BasicButtonMidnight text={'5 Fragen'} link={'/v2/5game'}/>
        </div>
    )
}

export default index
