import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
// 模块引入
import { moduleA } from "./module/moduleA";
// 加载插件
import { saveInLocal } from "./plugin/saveInLocal";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        moduleA
    },
    plugins: [saveInLocal]
});
