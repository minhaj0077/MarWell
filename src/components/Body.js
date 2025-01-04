import MovieCard from "./MovieCard";
import moviesList from "../utils/moviesList";


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
                 {moviesList.map((movies,index) => (<MovieCard key={index} movieData = {movies}/> )) }

            </div>
        </div>
    );
};

export default Body;