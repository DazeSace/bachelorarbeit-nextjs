import NavBar from "../components/v2/NavBar";
import BasicButtonMidnight from "../components/v2/BasicButtonMidnight";
import Head from "next/head";
import Footer from "../components/v2/Footer";

const index = () => {
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
                    <p className={'font-bold text-2xl mb-10 pt-24'}>Wähle ein Spiel-Modus:</p>
                    <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
                        <BasicButtonMidnight text={'eine schnelle Frage'} link={'/v2/game'}/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default index
