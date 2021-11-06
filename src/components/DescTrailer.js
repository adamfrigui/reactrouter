import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from 'react'
import { useEffect } from 'react'

const DescTrailer = ({movies}) => {
    const params = useParams()
    const [trailer, setTrailer] = useState(null);
    useEffect(() => {
        const trailerr = movies.find((movie)=> movie.id ==params.id)
setTrailer(trailerr)
        
    }, [params.id])
    return (
        <div>            
            {
            
            
               trailer && <div>
                <h2>{trailer.Title}</h2>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.Trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <p> {trailer.Description}</p> 
            </div> 
            }
        </div>
    )
}

export default DescTrailer

