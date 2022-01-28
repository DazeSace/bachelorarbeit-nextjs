import NavBar from "../../components/v2/NavBar";
import BasicButtonMidnight from "../../components/v2/BasicButtonMidnight";
import Head from "next/head";
import Footer from "../../components/v2/Footer";

const end = () => {
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
                    <div className={'flex justify-center flex-col text-xl font-bold tracking-wide pt-48'}>
                        <p className={'text-center'}>Gut gemacht!</p>
                    </div>
                    <BasicButtonMidnight text={'zurück zum Start'} link={'/v2'}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default end
