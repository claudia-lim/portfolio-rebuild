import Button from "../Button/index.jsx";

function NavBarTemplate(props) {
    return (
        <>
            <nav>
                <Button linkurl="http://www.bbc.co.uk" link="Home" />
                <Button linkurl="" link="About" />
                <Button linkurl="" link="Skills" />
                <Button linkurl="" link="Portfolio" />
                <Button linkurl="" link="Contact" />
            </nav>
            <div className="socials-links">
                <Button linkurl="" link="Github" />
                <Button linkurl="" link="LinkedIn" />
            </div>
        </>
    )
}

export default NavBarTemplate