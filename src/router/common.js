/*
 * @Description: 通用路由配置
 * @Author: Dong Wei
 * @Date: 2020-01-05 17:23:32
 * @LastEditors  : Dong Wei
 * @LastEditTime : 2020-01-05 17:27:46
 */
import { BlankLayout } from '@/components/Layouts/BlankLayout';
// 错误页面
const Home = () => import(/* webpackChunkName: "Test" */'@/views/Home.vue');
export default [
    // 默认页面
    {
        path: '/',
        component: Home,
        replace: true,
        redirect: '/home'
    },
    {
        path: '/about',
        name: 'about',
        component: BlankLayout,
    },
    // 404
    {
        path: '*',
        name: 'lost',
        component: Home
    }
];