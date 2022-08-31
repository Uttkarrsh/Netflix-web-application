const API_KEY="b10694f8f54766256ea071abb1fca2cd";

const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
     fetctActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests;