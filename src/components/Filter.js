import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

const Filter = ({rating , handleRating , handleKeyword}) => {
    
   const  onStarClick = (NextValue) =>{
    handleRating(NextValue); //data from child to parent 
    }
    return (
        <div>
           <input placeholder="search your movie " type='text' onChange={e => handleKeyword(e.target.value)} className='inputSize'/>
           <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          className='starSize'
          onStarClick={onStarClick}
        />
        </div>
    )
}

export default Filter


        