import axios from 'axios';

export default function searchApi(config) {
  function search(query) {
    const params = {
      query: query
    };
    return axios.post(`${config.domain}/api/search`, params).then(response => (response));
  }

  return {
    search
  };
}

