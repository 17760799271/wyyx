import axios from 'axios'

export default function ajax(url,data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;
    if (method === 'GET') {
      let queryStr = '';
      Object.keys(data).forEach(item => {
        const value = data[item];
        queryStr += `${item}=${value}&`;
      });
      if (queryStr !== '') {
        queryStr = queryStr.substring(0, queryStr.length-1);
        url += '?' + queryStr;
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url,data)
    }
    promise
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
