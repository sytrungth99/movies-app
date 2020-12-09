import axios from 'axios';
const apiKey ="ed909d4ca185bc18954a92bfe5f57e97";
const url ="https://api.themoviedb.org/3";
const nowplayingURL =`${url}/movie/now_playing`;
const toprateURL =`${url}/movie/top_rated`;
const movieURL =`${url}/movie`;
const genreURL =`${url}/genre/movie/list`;
const moviesURL =`${url}/discover/movie`;
const persionURl =`${url}/trending/person/week`;

export const fetchMovies = async() =>{
    
        const {data} = await axios.get(nowplayingURL,{
            params:{
                api_key :apiKey,
                language:"en_US",
                page:1
            }
        })
      
        const posterURl ="https://image.tmdb.org/t/p/w500";
        const modifiedData = data['results'].map((m) => (  {
            id: m['id'],
            backPoster: posterURl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterURl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
   
        return modifiedData;
   
}
export const fetchGenre = async() =>{
    const {data} = await axios.get(genreURL,{
        params:{
            api_key :apiKey,
            language:"en_US",
        }
    })

    return data.genres;
}
export const fetchMoviesByGenre =async(genre_id) =>{
    const {data} = await axios.get(moviesURL,{
        params:{
            api_key : apiKey,
            language:"en_US",
            page:1,
            with_genres: genre_id
        }
    })
    const posterURl ="https://image.tmdb.org/t/p/w500";
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterURl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterURl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        console.log('data movie',data);
return modifiedData;


}
export const fetchPersion =async() =>{
    const {data} = await axios.get(persionURl,{
        params:{
            api_key : apiKey,
            language:"en_US",
        }
    })
    const posterURl ="https://image.tmdb.org/t/p/w500";
    const modifiedPersion = data['results'].map((p) =>({
        id: p['id'],
        name: p['name'],
        imgpersion: posterURl+p['profile_path'],
    }))
    return modifiedPersion;
}
export const fetchToprateMovie =async() =>{
    const {data} = await axios.get(toprateURL,{
        params:{
            api_key :apiKey,
            language:"en_US",
            page:1
        }
    })
    const posterURl ="https://image.tmdb.org/t/p/w500";
    const modifiedData = data['results'].map((m) => ({
        id: m['id'],
        backPoster: posterURl + m['backdrop_path'],
        popularity: m['popularity'],
        title: m['title'],
        poster: posterURl + m['poster_path'],
        overview: m['overview'],
        rating: m['vote_average'],
    }))

    return modifiedData;
}
export const fetchMoviesDetail =async(id) =>{
    const {data} = await axios.get(`${movieURL}/${id}`,{
        params:{
            api_key :apiKey,
            language:"en_US",
        }
    })
    return data;
}
export const fetchMovieVideos =async(id) =>{
    const {data} = await axios.get(`${movieURL}/${id}/videos`,{
        params:{
            api_key :apiKey,
            language:"en_US",
        }
    })
    return data['results'];
}
export const fetchCasts =async(id,queryst) =>{
    const {data} = await axios.get(`${movieURL}/${id}/credits`, {
        params: {
            api_key: apiKey,
        }
    })
    console.log('queryst',queryst);
    return data['cast'];
}

export const fetchSimilarMovie =() =>{
    
}
