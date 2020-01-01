// 示例
import axios from './index'
// post待测试
export const postWeatherData = ({ city, key }) => {
    return axios.request({
        url: `${__GATEWAYPATH__}/simpleWeather/query`,
        method: 'post',
        data: {
            city,
            key
        }
    })
}

export const getWeatherData = ({ city, key }) => {
    return axios.request({
        url: `${__GATEWAYPATH__}/simpleWeather/query`,
        method: 'get',
        params: {
            city,
            key
        }
    })
}