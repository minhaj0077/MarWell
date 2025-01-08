import MovieCard from "./MovieCard";
import moviesList from "../utils/moviesList";
import { useEffect, useState } from "react";



const Body = () => {

    const [filterAsYear, setFilterAsYear] = useState(moviesList);

    useEffect(() => {
        fetchData();
    }, []);

    
    const fetchData = async () => {
        const data = await fetch("chrome-extension://gbmdgpbipfallnflgajpaliibnhdgobh/pages/options.html");


        const json = await data.json();
        const {items} = json?.success?.page(spaces?.header_tray?.widget_wrappers)?.0?.widget?.data:

        
        
        setFilterAsYear(items);
        
         
    };

    
    return (
        <div className="body">
            <div className="search-section">
                <div className="search">search and button</div>
                <div className="years">
                    <button className="year_filter" onClick={
                        () => {const filteredList = filterAsYear.filter(
                            (movie) => movie?.search_horizontal_content_card?.data?.sub_title > 2018);
                setFilterAsYear(filteredList);
                }}>Year filter
                    </button>
                </div>
                <div className="jonars">Jonars list</div>
                <div className="language">Language</div>

            </div>
            <div className="card-container">
                 {filterAsYear.map((movies,index) => (<MovieCard key={index} movieData = {movies}/> )
                ) }

            </div>
        </div>
    );
};

export default Body;