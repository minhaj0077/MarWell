import { MOVIEIMG_URL } from "../utils/constants";


const MovieCard = (props) => {
    const {movieData} = props;
    const {image,title, sub_title} = movieData?.search_horizontal_content_card?.data;
    return (
        <div className="card">
            <img className="poster" src={MOVIEIMG_URL + image.src} alt="movie poster"/>
            <h2 className="title">{title}</h2>
            <h4 className="sub_title">{sub_title}</h4>
        </div>
    );
};

export default MovieCard; 