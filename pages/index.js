import Head from 'next/head'
import Navbar from "../components/NavBar";

export default function Home() {
    return (
        <div className={""}>
            <Head>
                <title>MedTerm App</title>
                <meta name="description" content="MedTerm App - Medizinische Terminologie lernen"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <main className={"w-3/4 mx-auto space-y-2.5 mt-12 bg-blue-100 p-6 font-semibold rounded-2xl"}>
                <h2 className={"text-2xl font-bold"}>Kontext der Bachelorarbeit</h2>
                <p>Die Studierenden der Gesundheitsinformatik an der HTWG Konstanz haben zu Beginn des
                    Studiums die Vorlesung „Medizinische Terminologie“ bei Prof. Dr. Dambe. In dieser
                    lernen die Studierenden den Fachwortschatz der Medizin und wie dieser zu verwenden
                    ist. Das Ziel für die Studierenden ist es den Vokabeltest zu bestehen, welcher
                    benötigt wird, um die Vorlesung zu absolvieren. Um sich für diesen vorzubereiten,
                    lernen sie mit Hilfe von Excel-Listen und (Anki-)Karteikarten.</p>
                <h2 className={"text-2xl font-bold pt-4"}>Ziele der Bachelorarbeit</h2>
                <p>Diese Bachelorarbeit hat zum Ziel den Lernprozess der Studierenden einfacher,
                    spielerischer und abwechslungsreicher zu gestalten. Dies soll mit Hilfe einer
                    Anwendung erreicht werden. Im Rahmen dieser Bachelorarbeit wird eine Anwendung unter
                    Verwendung von gelernten Inhalten der Vorlesungen Requirements Engineering, IT-
                    Projektmanagement und Software-Engineering entstehen.</p>
            </main>
            <footer className={"w-3/4 mx-auto text-center"}>
                <p>Copyright 2021 David Melzer</p>
            </footer>
        </div>
    )
}
