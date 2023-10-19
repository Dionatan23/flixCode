import axios from 'axios';
// API KEY: 0bbf380ed018e74f6cb1d0819cd147fd
// Base da URL: https://api.themoviedb.org/3/ 
// https://api.themoviedb.org/3/movie/now_playing?api_key=0bbf380ed018e74f6cb1d0819cd147fd&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;