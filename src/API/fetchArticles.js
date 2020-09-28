let API_KEY;

if (process.env.NODE_ENV !== 'production') {
  API_KEY = process.env.REACT_APP_NYT_API_KEY;
} else {
  API_KEY = process.env.NYT_API_KEY;
}

const fetchArticles = async () => {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export default fetchArticles;
