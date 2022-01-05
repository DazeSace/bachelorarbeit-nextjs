import NavButton from "./NavButton";


const Navbar = () => {
    return (
        <nav className={'flex'}>
            <NavButton displayText={'MedTerm.app'} linkDest={'/'}/>
            <NavButton displayText={'A-game'} linkDest={'/agame'}/>
        </nav>
    )
}
export default Navbar
