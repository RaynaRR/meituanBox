<template>
    <div>
        <!--1.vuex:store的应用-->
        <!--{{$store.state.count}}-->
        <!--利用computed中的count来实现同样的效果-->
        {{count}}

        <!--3.vuex：getters的应用-->
        <!--<h2>{{$store.getters.sum}}</h2>-->

        <!--5.modules的应用-->
        <!--提取为moduleA后，修改为以下代码对getters进行使用：-->
        <h2>{{$store.getters['moduleA/sum']}}</h2>

        <!--mapGetters的应用-->
        {{sum}}

        <!--2.vuex:mutations的应用-->
        <!--<button @click="add(2)">add</button>-->
        <!--直接通过mapMutations对mutations中的addMutation进行映射-->
        <button @click="addMutation(3)">add</button>

        <!--4.vuex:actions的应用-->
        <!--<button @click="$store.dispatch('addAction')">add action</button>-->
        <!--直接通过mapActions对actions中的addAction进行映射-->
        <button @click="addAction">add action</button>


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
    // 直接通过mapState/mapMutations/mapGetters/mapActions对
    // vuex中的state/mutations/getters/actions中的相应内容进行映射
    // mapState--映射到computed中
    // mapMutations--映射到methods中
    // mapGetters--映射到computed中
    // mapActions--映射到methods中
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

    export default {
        name: "home",
        computed:{
            // 利用computed中的count来实现同样的效果
            //$store.state.count方法：
            // count(){
            //     return this.$store.state.count
            // }

            // 直接通过mapState对state中的count进行映射
            // ...mapState(['count']),

            // 提取为moduleA后，修改为以下代码对mapState进行使用：
            ...mapState("moduleA",['count']),

            // 直接通过mapGetters对Getters中的sum进行映射
            // ...mapGetters(['sum']),
            // 提取为moduleA后，修改为以下代码对mapGetters进行使用：
            ...mapGetters("moduleA",['sum'])
        },
        methods:{
            go(){
                // 编程式导航
                // this.$router.push('/mine')
                // 编程式导航传参:
                this.$router.push({path:'/mine',query:{name:'ZhaoWu',sex:'Male'}})
            },
            // 2.vuex:mutations的应用
            addMutation(num){
                // this.$store.commit('addMutation',num);
                // 提取为moduleA后，修改为以下代码对$store.commit进行使用：
                this.$store.commit('moduleA/addMutation',num);
            },
            // 直接通过mapMutations对mutations中进行映射
            // ...mapMutations(['addMutation']),
            // 提取为moduleA后，修改为以下代码对mapMutations进行使用：
            ...mapMutations("moduleA",['addMutation']),

            // 直接通过mapActions对actions中的addAction进行映射
            // ...mapActions(['addAction']),
            // 提取为moduleA后，修改为以下代码对mapActions进行使用：
            ...mapActions("moduleA",['addAction'])
        }
    }
</script>

<style scoped>

</style>