const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	original: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
	top: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	sf: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
	drama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
	fantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
	comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
	action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
};

export default requests;
