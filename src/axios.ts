import { extend } from './helpers/utils'
import { AxiosInstence } from './types/index'
import Axios from './core/axios'
function createInstance():AxiosInstence {
    const context = new Axios
    const instance  = Axios.prototype.request.bind(context)
    extend(instance, context)
    return instance as AxiosInstence
}
const axios = createInstance()
export default axios