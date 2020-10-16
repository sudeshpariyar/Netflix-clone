const APIKEY = "5c8d84fc991076776f326db67a35ea4f";


const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top-rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_geners=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_geners=99`,
    
}

export default requests;