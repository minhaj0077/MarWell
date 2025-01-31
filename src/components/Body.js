import MovieCard from "./MovieCard";
import moviesList from "../utils/moviesList";
import { useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {

    const [listOfMovies, setListOfMovies] = useState(moviesList);

    const [filteredMovies, setFilteredMovies] = useState(moviesList);

    const [searchText, setSearchText] = useState("");

    // useEffect(() => {
    //     fetchData();
    // }, []);

    
    // const fetchData = async () => 
    // {
    //     const data = await fetch("https://www.hotstar.com/api/internal/bff/v2/pages/search?slug=in&slug=explore&search_query=matvel&referrer_props=%7B%22search_session_id%22%3A%22b3e6570f-0721-4269-8dfb-d79cc76120e5%22%2C%22search_id%22%3A%22b3e6570f-0721-4269-8dfb-d79cc76120e5-1%22%7D", {method: "POST", body: JSON.stringify({ username: "example"})});
    //     const json = await data.json();
    //     // const {items} = json?.success?.page?.spaces?.results?.widget_wrappers[0]?.widget?.data?.
    //     setFilterAsYear(json?.success?.page?.spaces?.results?.widget_wrappers[0]?.widget?.data?.items);    
    // };

    if (listOfMovies.length === 0 ) {
        return <Shimmer/>;
    }

    
    return (
        <div className="body">
            <div className="search-section">

                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>

                    <button onClick={() => {
                        const filteredMovies = listOfMovies.filter((movie) => movie?.search_horizontal_content_card?.data?.title?.toLowerCase()?.includes(searchText.toLowerCase()));

                        setFilteredMovies(filteredMovies);
                    }} >search</button>
                </div>

                <div className="years">
                    <button className="year_filter" onClick={
                        () => {const filteredList = listOfMovies.filter(
                            (movie) => movie?.search_horizontal_content_card?.data?.sub_title > 2018);
                setListOfMovies(filteredList);
                }}>Year filter
                    </button>
                </div>
                <div className="jonars">Jonars list</div>
                <div className="language">Language</div>

            </div>
            <div className="card-container">
                 {filteredMovies.map((movies,index) => (<MovieCard key={index} movieData = {movies}/> )
                ) }

            </div>
        </div>
    );
};

export default Body;





