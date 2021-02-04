import axios from "axios";
//axios拦截器
const $http = axios.create({
  headers: {
    'content-type': 'application/json'
  }
})
// http response 拦截器
$http.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token')
    if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token  //请求头加上token
    }
    config.headers['test'] = 'asdasd'
    return config
  },
  (  err: any) => {
    return Promise.reject(err)
  })
// http response 拦截器
$http.interceptors.response.use(
  (  response: { status: number; data: any; }) => {
    //拦截响应，做统一处理 
    if (response.status===200) {
      return response.data
    }
    
  },
  (  //接口错误状态处理，也就是说无响应时的处理
  error: { response: { status: any; }; }) => {
    if(error&&error.response&&error.response.status){
      return Promise.reject(error.response.status) // 返回接口返回的错误信息
    }else {
      return Promise.reject('error') // 返回接口返回的错误信息
    }
    
  })

  export default $http;