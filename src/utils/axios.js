/*
 * @Description: 封装axios类
 * @Author: Dong Wei
 * @Date: 2020-01-01 17:46:42
 * @LastEditors  : Dong Wei
 * @LastEditTime : 2020-01-04 23:01:26
 */
// 说明：
// 1.接口请求已经封装了loading的打开与关闭, 如果在接口请求之前或拿到值之后有复杂计算可以单独写方法处理并添加loading
// 2.需要额外引入loading组件和弹窗提示组件
// 3.如果是单个后台对接可以加入baseURL,对接多个后台地址在请求的时候用全局变量可能好一点
class HttpRequest {
    constructor() {
        // 表示当前是否有接口正在请求(优化loading显示)
        this.queue = {};
    }
    // 全局的请求参数配置
    getInsideConfig() {
        const config = {
            // 设置baseURL,headers等等
        };
        return config;
    }
    /**
     * @description: 请求拦截与响应拦截
     * @param {Object} [instance] axios实例
     * @param {String} [url] 请求url
     * @return: {void}
     */
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            if (!Object.keys(this.queue).length) {
                // loading.show()
            }
            // 请求队列增加
            this.queue[url] = true;
            // 特殊接口处理也放在这里(比如修改headers)
            // config.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
            return config;
        }, error => {
            // showModel('连接服务器失败，请稍后再试！');
            return Promise.reject(error);
        });
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.distroy(url);
            // 其他不规范的接口直接返回
            if (typeof res.data.success === 'undefined') {
                return res;
            }
            // 正常接口
            if (res.data.success) {
                return Promise.resolve(res);
            } else { // 处理接口返回的错误情况
                // 如果前后端没有约定好则最好使用前端提示避免暴露后台错误代码
                // if(res.data.code == ?) showModel(res.data.msg || '自定义提示');
                return Promise.reject(res);
            }
        }, error => {
            this.distroy(url);
            // showModel('连接服务器失败，请稍后再试！');
            return Promise.reject(error);
        })
    }
    // 请求完成时清除请求队列中的值
    distroy(url) {
        delete this.queue[url]
        // 当请求队列全部清空则关闭loading
        if (!Object.keys(this.queue).length) {
            // loading.hide()
        }
    }
    /**
     * @description: 创建axios实例并发出请求
     * @param {Object}[options] 请求的配置项如url,data等
     * @return: {Object}返回请求的Promise
     */
    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options);
    }
}
export default HttpRequest;