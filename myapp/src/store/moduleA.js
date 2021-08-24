const moduleA = {
    namespaced:true,
    state: {//存储状态的
        count:1
    },
    mutations: {//用来修改状态的
        addMutation(state,num){
            state.count += num;
        }
    },
    getters:{//相当于页面中的计算属性
        sum(state){
            return state.count*20+100;
        }
    },
    actions: {//主要做一些异步的请求
        addAction({commit}){
            setTimeout(()=>{
                commit('addMutation',100)
            },1000)
        }
    }
}
export default moduleA;