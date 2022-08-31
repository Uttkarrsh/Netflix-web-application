import axios from '../axios'
import React from 'react'
import './Row.css'
import { useEffect } from 'react';
import { useState } from 'react'
// import YouTube from 'react-youtube'

function Row({title,fetchUrl,isLargeRow}) {

const [movies,setMovies]=useState([]);

useEffect(()=>{
  async function fetchData(){
    const requests=await axios.get(fetchUrl);
    setMovies(requests.data.results);
    return requests;
  }
  fetchData();

},[fetchUrl]);

// const opts = {
//   height: '390',
//   width: '100%',
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 1,
//   },
// };

function truncate(string,n){
  return string?.length>n ? string.substr(0,n-1) + '...' : string;
}



console.log(movies);
  const base_url="https://image.tmdb.org/t/p/original/";
  return (
    <>
    <div className="row">
      <h2>
        {title}
      </h2>

      <div className="row_posters">
      {
        movies.map((movie) => (
          ((isLargeRow && movie.poster_path) || 
          (!isLargeRow && movie.backdrop_path)) &&(
            <>
          
          <div className="class1">
          
          <a href="https://www.netflix.com/browse">
          <img 
          className={`row_poster ${isLargeRow && "row_poster_large"}`}
          key={movie.id}
          src= {`${base_url}${
            isLargeRow?movie.poster_path:movie.backdrop_path
          }`} alt={movie.name} />

            <div className="class2">
            <h4>{movie?.name || movie?.title || movie?.original_name}</h4>
            <p className='desc'>
            {truncate(movie?.overview,50)}
            </p>
          </div>
          </a>
          </div>
         
          
          </>
        )) 
        )
          
      }
     
    </div>
    {/* <YouTube videoId="Eo-KmOd3i7s" opts={opts}/> */}
    </div>
    
    </>
  );
}

export default Row