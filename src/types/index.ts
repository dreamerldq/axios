export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'Head' | 'options' | 'Options' | 'post' | 'Post' | 'put' | 'Put' | 'patch' | 'Patch'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any,
  headers?: any,
  params?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number

}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig,
  request: any

}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {

}

export interface AxiosError {
  message: string
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

}

export interface Axios {
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

}

export interface AxiosInstence extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInterCeptorManage<T> {
  use(resolve:ResolvedFn<T>, reject:RejectedFn):number
  eject(id:number):void
}
export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}
export interface RejectedFn {
  (error: any): any
}