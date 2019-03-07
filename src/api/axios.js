"use strict";

import Vue from 'vue';
import axios from "axios";
import router from '../router'
import { Indicator } from 'mint-ui';




// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    baseURL:'http://kungfunion.club/',
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(

  function(config) {
      if(localStorage.getItem('token1')){
          config.headers.Authorization = 'JWT ' + localStorage.getItem('token1')
      }
      Indicator.open({
          text: 'Loading...',
          spinnerType: 'double-bounce'
      });
    // Do something before request is sent
    return config;
  },
  function(error) {

          Indicator.close();

    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(

  function(response) {


              Indicator.close();



    // Do something with response data
    return response;
  },
  function(error) {

          Indicator.close();

      if (error.response.status) {

          switch (error.response.status) {

              case 401:

                  localStorage.clear()
                  router.push({path:'/login'})
                  break;


          }
          return Promise.reject(error.response);
      }
  }
);

export default{
    baseUrl:config.baseURL,
    //get请求
    get(methods,url,param){

        //promise示例
        //   axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        return new Promise((resolve,reject)=>{

            _axios({
                method:methods,
                url,
                params:param,

            }).then(res=>{
                resolve(res)  //resolve在promise执行器内部
            }).catch(err=>{

                if(err.data){
                    console.log(err.data)
                    // ElementUI.Message.error(JSON.stringify(err.data));
                }else{
                    // ElementUI.Message.error('网络错误，请稍后再试');

                }
                reject(err)
            })

        })
    },
    //post请求
    post(url,param){
        return new Promise((resolve,reject)=>{
            _axios({
                method:'post',
                url,
                data:param,

            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                if(err.data){
                    // ElementUI.Message.error(JSON.stringify(err.data));

                }else{
                    // ElementUI.Message.error('网络错误，请稍后再试');
                }
                reject(err)
            })
        })
    },
    //post请求
    put(url,param){
        return new Promise((resolve,reject)=>{
            _axios({
                method:'put',
                url,
                data:param,

            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                if(err.data){
                    // ElementUI.Message.error(JSON.stringify(err.data));
                }else{
                    // ElementUI.Message.error('网络错误，请稍后再试');
                }
            })
        })
    }
}
