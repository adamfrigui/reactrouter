import React from 'react'
import Filter from './Filter'
import MovieList from './MovieList'

export default function Home({
    handleRating,
rating,
handleKeyword,
setShowList,
movies,
keyword
}) {
    return (
        <>
         <Filter handleRating={handleRating} rating={rating} handleKeyword={handleKeyword}/>
        <button type='submit' onClick={e =>setShowList(false)}>add new movie</button>
         <MovieList movies={movies.filter(el => el.vote_average >= rating && el.Title.toLowerCase().includes(keyword.toLowerCase()) )}/>
   
        </>
    )
}
