import axios from 'axios'
const api = axios.create();
api.defaults.baseURL = 'http://api.com';
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.timeout = 2500;
// 添加响应拦截器
api.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default api
