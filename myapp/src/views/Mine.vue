<template>
    <div>
        <p>我的页面</p>
<!--        通过query传参-->
<!--        {{$route.query.name}}-->
<!--        {{$route.query.sex}}-->
<!--        通过路径跳转传参：-->
<!--        {{$route.params.name}}-->
<!--        {{$route.params.age}}-->
<!--        编程式导航传参：-->
        {{$route.query.name}}
        {{$route.query.sex}}
    </div>
</template>

<script>
    export default {
        name: "Mine"
    }
</script>

<style scoped>

</style>