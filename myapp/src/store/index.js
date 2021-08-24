import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from "./moduleA";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {//用来维护一些比较复杂的状态
    //将state，mutations，getters，actions模块化提取为moduleA
    moduleA
  }
})
