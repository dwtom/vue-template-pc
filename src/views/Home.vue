<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { getWeatherData } from '@/api/test';

export default {
    name: 'home',
    components: {
        HelloWorld
    },
    created() {
        this.testAjax();
    },
    methods: {
        testAjax() {
            getWeatherData({
                city: '杭州',
                key: 'c24048f9e20c1ee57a0bd18a53c9967e'
            })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
