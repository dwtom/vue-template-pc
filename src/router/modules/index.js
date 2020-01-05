/*
 * @Description: 各个路由模块汇总处理
 * @Author: Dong Wei
 * @Date: 2020-01-05 17:28:47
 * @LastEditors  : Dong Wei
 * @LastEditTime : 2020-01-05 17:29:03
 */
const files = require.context('.', true, /\.js$/);
let configRouters = [];
/**
 * inject routers
 */
files.keys().forEach(key => {
    if (key === './index.js') { return }
    configRouters = configRouters.concat(files(key).default); // 读取出文件中的default模块
});
export default configRouters; // 抛出一个Vue-router期待的结构的数组