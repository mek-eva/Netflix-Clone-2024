import axios from "axios";

const instance = axios.create({
    // API Base URL
    baseURL: "https://api.themoviedb.org/3",
});

// img base URL
//  "https://image.tmdb.org/t/p/" 

export default instance;