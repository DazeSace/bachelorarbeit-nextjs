import Head from 'next/head';
import Navbar from '../components/NavBar';


const Template = () => {
    return (
        <>
            <Head>
                <title>MedTerm App</title>
                <meta name='description' content='MedTerm App - Medizinische Terminologie lernen'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <Navbar/>
            <main className={'w-3/4 mx-auto'}>
                <p>A-Part Komponente</p>
            </main>
            <footer className={'w-3/4 mx-auto text-center'}>
                <p>Copyright 2021 David Melzer</p>
            </footer>
        </>
    )
}
export default Template