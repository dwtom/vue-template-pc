import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
// 模块引入
import { moduleA } from "./module/moduleA";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        moduleA
    }
});
