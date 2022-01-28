import Link from "next/link";

const NavBar = () => {
    return (
        <div className={'flex items-center w-full shadow-md h-16 text-midnight'}>
            <div className={'flex w-11/12 mx-auto'}>
                <Link href={'/v2'} passHref={false}>
                    <p className={'italic font-bold tracking-wide text-3xl'}>MedTerm</p>
                </Link>
            </div>

        </div>
    )
}
export default NavBar
