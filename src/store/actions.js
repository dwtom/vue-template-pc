export default {
    // test
    async getUserInfo({ commit }, payload) {
        try {
            // await some ajax return
            // const res = await ...
            commit('setUserInfo', payload);
        } catch (err) {
            console.log(err);
        }
    }
};