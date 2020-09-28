const fetchArticles = async () => {
  const res = await fetch('./data.json');
  // const res = await fetch(
  //   'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=Isf67De2hk2oVH5t9rrXg9ceoNjWNaOq'
  // );
  const data = await res.json();
  return data.results;
};

export default fetchArticles;
