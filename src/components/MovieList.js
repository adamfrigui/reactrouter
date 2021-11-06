import React from 'react'
import '../App.css';
import MovieCard from './MovieCard.js';

const MovieList = ({movies}) => {
return (
        <div className='hello'>
        { movies.map((movie) => <MovieCard movie={movie}/>) }
        </div>
)
}

export default MovieList
