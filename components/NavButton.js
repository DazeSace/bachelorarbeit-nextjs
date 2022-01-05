import Link from "next/link";

const NavButton = (props) => {
    return (
        <Link href={props.linkDest} passHref={true}>
            <div className={'bg-ncs px-4 py-2 font-bold tracking-wide text-fogra cursor-pointer hover:bg-midnight duration-300 hover:text-white ' + props.className}>
                <p>{props.displayText}</p>
            </div>
        </Link>
    )
}
export default NavButton
