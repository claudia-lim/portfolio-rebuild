
function SocialsAtom({icon, link}) {

    return (
        <a className="social-icon" target="_blank" href={link}>
            {icon}
        </a>
    )
}

export default SocialsAtom