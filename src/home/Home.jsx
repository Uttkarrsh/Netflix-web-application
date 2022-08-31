import React from 'react'
import './Home.css'
import Navbar from '../components/Nav/Navbar'
import Banner from '../components/banner/Banner'
import requests from '../requests'
import Row from '../components/Row/Row'

function Home() {
  return (
   <>
<div className="home">
<Navbar />
<Banner />
<Row  title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
<Row  title="Top Rated" fetchUrl={requests.fetchTrending} />
<Row  title="Action Movies" fetchUrl={requests.fetctActionMovies} />
<Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
<Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
<Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
<Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
</div>
   </>
  )
}

export default Home