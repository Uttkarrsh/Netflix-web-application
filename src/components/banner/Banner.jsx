import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Banner.css'
import axios from 'axios'
function Banner() {

    function truncate(string,n){
        return string?.length>n ? string.substr(0,n-1) + '...' : string;
    }

    const[movie,setMovie]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(
               " https://api.themoviedb.org/3/discover/tv?api_key=b10694f8f54766256ea071abb1fca2cd&with_networks=213"
           );

            setMovie(request.data.results[
                Math.floor(Math.random()*request.data.results.length-1)
            ]);
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

  return (
    <>
  <header className='banner' style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundSize: "cover",
      backgroundPosition:"center centre",
      height:"100%"
  }}>
      <div className="banner-contents">
    <div className="banner-title">{movie?.name || movie?.title || movie?.original_name}</div>
    <div className="banner-buttons">
      <a href="https://www.netflix.com/browsess">
        <button className='banner-button'>Play</button>
        <button className='banner-button'>My list</button>
        </a>
    </div>
    <div className="banner-desc">
        <p>
           { truncate(movie.overview,140)}
        </p>
      </div>
</div>
    <div className='fade-bottom'/>
  </header>


    </>
  )
}

export default Banner

// https://api.themoviedb.org/3/trending/all/week?
//             api_key=b10694f8f54766256ea071abb1fca2cd&language=en-US`