import React from "react";
import ReactDOM from "react-dom/client";
import img from "./pushpa2.jpg"

const Header = () => {
    return (
        <div className="header">
            <div className="app-name" >MarWell</div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Sports</li>
                <li>Login</li>
                <li>Sighin</li>
                </ul>
                
            </div>
        </div>
    );
};

const MovieCard = () => {
    return (
        <div className="card">
            <img className="poster" src={img} alt="movie poster"/>
            <h2>Pushpa 2</h2>
            <h3>8.5/10</h3>
            <h3>3:22 hrs</h3>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search-section">
                <div className="search">search and button</div>
                <div className="years">Year Filter</div>
                <div className="jonars">Jonars list</div>
                <div className="language">Language</div>

            </div>
            <div className="card-container">
                <MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div></div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)