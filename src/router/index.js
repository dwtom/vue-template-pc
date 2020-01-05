import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterConfig from './modules';// 业务模块
import CommonConfig from './common';// 公共模块

Vue.use(VueRouter);
export default new VueRouter({
    base: process.env.BASE_URL, // publicPath
    routes: RouterConfig.concat(CommonConfig)
});

