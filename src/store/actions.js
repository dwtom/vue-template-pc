export default {
    // test
    async getUserInfo({ commit }, payload) {
        // await some ajax return
        commit('setUserInfo', payload);
    }
};