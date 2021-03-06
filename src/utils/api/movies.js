import { API_HOST, API_KEY, LANG } from "./const";

export const getMoviesNowPlaying = () => {
  const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMoviesPopular = (paginate = 1) => {
  const url = `${API_HOST}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${paginate}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMovieVideoYT = (id) => {
  const url = `${API_HOST}/movie/${id}/videos?api_key=${API_KEY}&language=${LANG}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMovieBySearch = (movie) => {
  const url = `${API_HOST}/search/movie?api_key=${API_KEY}&page=1&query=${movie}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMoviesByGenre = (genre) => {
  const url = `${API_HOST}/discover/movie?api_key=${API_KEY}&page=1&with_genres=${genre}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
};
