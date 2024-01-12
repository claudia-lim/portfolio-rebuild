function ButtonAtom(props) {
    return (
        <>
            <button>
                <a href={props.linkurl}>{props.link}</a>
            </button>
        </>
    )
}

export default ButtonAtom