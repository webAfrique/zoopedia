const Header = ({ animals, birds}) => {
    return (
        <nav>
            <h2><a href="">Home</a></h2>
            <h2><a href="">Animals {animals ? `(${animals})` : null}</a></h2>
            <h2><a href="">Birds {birds ? `(${birds})` : null}</a></h2>
            <h2><a href="">About</a></h2>
        </nav>
    )
}

export default Header