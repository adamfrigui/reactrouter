import React from 'react'
import { useState } from 'react'

const AddMovie = ({addNewMovie,setShowList}) => {
    const [data, setData] = useState({Title :"", vote_average :"", Poster:""})
    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }
    const handleSubmit  =(e) =>{
        if (data.Title && data.vote_average && data.Poster){
        e.preventDefault()
        addNewMovie(data)
        setShowList(true)}
        else{
            alert("all data is required")
            
        }
    }
  
   const  handleClick = ()=> {
        window.location.reload(false);
      }
    return (
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit}>
                <label>Movie Title</label>
                <input type="text" placeholder="Movie Title" name='Title' onChange={handleChange}></input>
                <label>Rating</label>
                <input type="number" max='5' min="1" placeholder="Movie Rating" name='vote_average' onChange={handleChange}></input>
                <label>Poster URL</label>
                <input type='text' placeholder="Poster URL" name='Poster' onChange={handleChange}></input>
                <br/> 
                <input type="submit" value="Confirm"/>
                <input type="reset" value="Cancel" onClick={handleClick}/>
            </form>                     
        </div>
    )
}

export default AddMovie
