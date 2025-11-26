const Nav = () => {
    return (
        <>
            <nav className="navbar glass-container">
                <div className="left-nav">
                    <a href="#hero">BlackMonkey</a>
                </div>
                <div className="right-nav">
                    {/* <ul className="account-options">
                        <li className="acc-item">Sign in</li>
                        <li className="acc-item">Create Account</li>
                    </ul> */}

                    <ul className="navlist">
                        <li className="nav-item"><a href="#hero">Home</a></li>
                        <li className="nav-item"><a href="#courses">Courses</a></li>
                        <li className="nav-item"><a href="#story">Story</a></li>
                        <li className="nav-item"><a href="#whyus">Why Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav