import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

//axios拦截器
let $http = axios.create({
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
  err => {
    return Promise.reject(err)
  })
// http response 拦截器
$http.interceptors.response.use(
  response => {
    //拦截响应，做统一处理 
    if (response.status===200) {
      return response.data
    }
    
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    if(error&&error.response&&error.response.status){
      return Promise.reject(error.response.status) // 返回接口返回的错误信息
    }else {
      return Promise.reject('error') // 返回接口返回的错误信息
    }
    
  })
React.Component.prototype.$http=$http;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
