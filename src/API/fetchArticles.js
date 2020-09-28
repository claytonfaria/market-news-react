const fetchArticles = async () => {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export default fetchArticles;
