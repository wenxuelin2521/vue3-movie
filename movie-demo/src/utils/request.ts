import axios from 'axios'


const request = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
})

request.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    if (response.data) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);


export default request
