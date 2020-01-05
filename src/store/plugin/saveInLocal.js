/*
 * @Description: 将state保存至storage
 * @Author: Dong Wei
 * @Date: 2020-01-05 14:22:01
 * @LastEditors  : Dong Wei
 * @LastEditTime : 2020-01-05 14:35:32
 */
export default store => {
    // 如果storage中存在state则替换当前vuex中的state
    if (localStorage.state) {
        store.replaceState(JSON.parse(localStorage.state));
    }
    // 每次提交mutation时会执行以下代码
    store.subscribe((mutation, state) => {
        localStorage.state = JSON.stringify(state);
    })
};