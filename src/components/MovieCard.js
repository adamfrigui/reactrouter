import React from 'react';
import StarRatingComponent from 'react-star-rating-component'
import {Link} from 'react-router-dom'

const MovieCart = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={`/description/${movie.id}`}>
           <img src={movie.Poster} alt='yo' width="200px"/>
           <h3>{movie.Title}</h3>
           <p className="movie-stars"><StarRatingComponent   name="rate1" starCount={5} value={movie.vote_average}/>
            </p>
         </Link>
        </div>
    )
}

export default MovieCart
            
