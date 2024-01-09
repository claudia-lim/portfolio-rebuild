function Button(props) {
    return (
        <>
            <button>
                <a href={props.linkurl}>{props.link}</a>
            </button>
        </>
    )
}

export default Button