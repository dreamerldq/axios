import {AxiosRequestConfig, AxiosPromise, Method} from '../types/index'
import dispatchRequest from './dispatchRequest'
export default class Axios{
  request(url: any, config?:any):AxiosPromise{
    if(typeof url === 'string'){
      if(!config){
        config = {}
      }
      config.url = url
    }else{
      config = url
    }
    return dispatchRequest(config)
  }
  get(url:string, config?:AxiosRequestConfig):AxiosPromise{
   return this.requestMethodwWithoutData('get',url, config)
  }
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.requestMethodwWithoutData('delete', url, config)
  }
  post(url: string, data?:any, config?: AxiosRequestConfig): AxiosPromise {
    return this.requestMethodwWithData('post', url,  config, data)
  }
  put(url: string, data?:any, config?: AxiosRequestConfig): AxiosPromise {
    return this.requestMethodwWithData('put', url, config, data)
  }
  patch(url: string, data?:any, config?: AxiosRequestConfig): AxiosPromise {
    return this.requestMethodwWithData('patch', url, config, data)
  }
  requestMethodwWithoutData(method: Method, url:string, config?:AxiosRequestConfig){
    return this.request(Object.assign(config || {}, {
      method,
      url
    }))
  }

  requestMethodwWithData(method: Method, url: string, config?: AxiosRequestConfig, data?:any) {
    return this.request(Object.assign(config || {}, {
      method,
      url,
      data
    }))
  }
}

