import axios from 'axios';

async function getFetch(query, page) {
  let key = `19680889-1d0fa37b831075dabe336ab4d`;

  axios.defaults.baseURL = `https://pixabay.com/api/`;
  let url = `?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);
  const data = await response.data;
  // console.log(data);
  // const hits = await data.hits;
  return data;
}

export default { getFetch };
