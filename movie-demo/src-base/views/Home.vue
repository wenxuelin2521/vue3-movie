<template>
  <div class="home">
    home
    <p>{{msg1}}-{{msg2}}-{{currentTime}}</p>
    <p>{{count}}-{{sum}}</p>
    <button @click="editTime">点击更新当前时间</button>
    <br/>
    <button @click="()=>{count++}">count++</button>
    <NavBar/>

    <button @click="go">点击路由跳转</button>
    <hr>
    <button @click="changeCount">点击修改count</button>
  </div>
</template>

<script>
import { reactive , toRefs  , computed , onMounted , provide , observable} from "vue";
import { useRouter } from "vue-router"
import NavBar from "@/components/NavBar"
import {useStore} from "vuex"
export default {
  name: "home",
  components:{ NavBar },
  setup() {
    const state = reactive({
      msg1:'hello',
      msg2:'world',
      currentTime:new Date().getTime(),
      count:100,
      sum : computed(() => { return state.count * 2})
    })
    const editTime = ()=>{
      console.log('editTime')
      state.currentTime = new Date().getTime()
    }
    const store = useStore()
    const changeCount = () => {
      store.commit('SET_COUNT' , store.state.count+1)
      console.log(store.state.count , store.getters.total)

    }

    const router = useRouter()
    const go = () => {
      router.push({
        path:'/about',
        query:{
          id:123
        }
      })
    }
    provide("sum" , state.sum)

    // const sum = computed(() => { return state.count * 2})
    onMounted(() => {
      console.log('onMounted')
      console.log(observable)
      console.log(store.state.count , store.getters.total)
    })

    return{
      ...toRefs(state),
      editTime,
      go,
      changeCount
      // sum
    }
  }
};
</script>

<style lang="scss" scoped>
</style>