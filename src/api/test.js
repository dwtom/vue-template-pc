// 示例
import axios from './index'

export const postWeatherData = (payload) => {
    return axios.request({
        url: `${__GATEWAYPATH__}/xxx/xx`,
        method: 'post',
        data: payload
    })
}

export const getWeatherData = (payload) => {
    return axios.request({
        url: `${__GATEWAYPATH__}/simpleWeather/query`,
        method: 'get',
        params: payload
    })
}