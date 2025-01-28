import { useState } from "react";

const Header = () => {

    const [loginBtn,setLoginBtn ] = useState("Login") ;

    const toggleLogin = () => {
        setLoginBtn((prevState) => (prevState === "Login" ? "Logout" : "Login"));
    };

    return (
        <div className="header">
            <div className="app-name" >MarWell</div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Sports</li>
                <button className={`login-btn ${loginBtn === "Login" ? "logout" : "login"}`}
                onClick={toggleLogin}
                aria-label={loginBtn}
                >{loginBtn}</button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;