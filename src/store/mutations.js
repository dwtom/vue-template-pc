export default {
    // test
    setUserInfo(state, payload) {
        Object.assign(state.userInfo, payload);
    }
};