import ButtonAtom from "../ButtonAtom/index.jsx";

function NavBarTemplate() {
    return (
        <>
            <nav>
                <ButtonAtom linkurl="#home" link="Home" />
                <ButtonAtom linkurl="#skills" link="Skills" />
                <ButtonAtom linkurl="#about" link="About" />
                <ButtonAtom linkurl="#projects" link="Projects" />
                <ButtonAtom linkurl="#contact" link="Contact" />
            </nav>
            <div className="socials-links">
                <ButtonAtom linkurl="" link="Github" />
                <ButtonAtom linkurl="" link="LinkedIn" />
            </div>
        </>
    )
}

export default NavBarTemplate