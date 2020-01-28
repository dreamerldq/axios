import {AxiosRequestConfig, AxiosPromise, AxiosResponse, AxiosError} from '../types'
import { parseHeardes } from '../helpers/headers'
import { createError } from '../helpers/error'
export default function xhr(config: AxiosRequestConfig):AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers, responseType, timeout } = config
    const request = new XMLHttpRequest()
    if(responseType){
      request.responseType = responseType
    }
    if(timeout){
      request.timeout = timeout
    }
    request.open(method.toUpperCase(), url!, true)
    request.onreadystatechange = function handleLoad() {
      if(request.readyState !== 4){
        return
      }
      if(request.status === 0){
        return
      }
      const responseHeaders = parseHeardes(request.getAllResponseHeaders())
      let responseData = responseType !== 'text' ? request.response : request.responseText
      // if(typeof responseData === 'string'){
      //   responseData = JSON.parse(responseData)
      // }
      const response:AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = function handleError() {
      reject(createError('NetWork Error',config, null, request))
    }
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout} ms exceed`, config, 'ECONNABORTED', request))
    }
    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    request.send(data)
    function handleResponse(response:AxiosResponse):void {
      if(response.status >=200 && response.status < 300){
        resolve(response)
      }else{
        reject(createError(`Request Failed with status code ${response.status}`, config, null, request, response))
      }
    }
  })
    
}