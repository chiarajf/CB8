const httpGET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();
  return data;
};

const BASE_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=c646480705f1aa9d7bf00a300a65f3de&with_genres=";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNiNzY2YTllNWM0N2ZkOGMzYzg0ODRlZjVjZTY4OSIsInN1YiI6IjY1MGQ0ZDJhZjkyNTMyMDBhZGUxMTJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIhoXnYP6YFHse-oAlJpKUpNxh599De8UFJI3BnxvTE";

export { httpGET };
