module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    // vueconfig暴露的全局变量在此设置为false才不报错
    globals: {
        'axios': false,
        '__GATEWAYPATH__': false
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
