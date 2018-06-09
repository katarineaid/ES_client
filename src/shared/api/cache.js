import axios from 'axios';

export default function searchApi(config) {
  function cache(query) {
    const params = {
      query: query
    };
    return axios.post(`${config.domain}/api/search/cache`, params).then(response => (response));
  }

  return {
    cache
  };
}

