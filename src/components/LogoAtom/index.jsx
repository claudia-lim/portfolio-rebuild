import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faC, faL} from "@fortawesome/free-solid-svg-icons";

function LogoAtom () {
    return (
        <div className="logo">
            <FontAwesomeIcon icon={faC} />
            <FontAwesomeIcon icon={faL} />
        </div>
    )
}

export default LogoAtom