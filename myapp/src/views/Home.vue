<template>
    <div>
        <button @click="$router.go(-1)">返回</button>
        <button @click="go()">跳转至我的页面</button>
        <p>这是首页</p>
        <!--通过params传参：-->
        {{$route.params.name}}
        {{$route.params.age}}
        <router-link to="/home/test1">Test1</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{
            go(){
                // 编程式导航
                // this.$router.push('/mine')
                // 编程式导航传参:
                this.$router.push({path:'/mine',query:{name:'ZhaoWu',sex:'Male'}})
            }
        }
    }
</script>

<style scoped>

</style>