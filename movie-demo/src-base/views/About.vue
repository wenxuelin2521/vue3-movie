<template>
  <div class="about">
    <h1>page about</h1>
  </div>
</template>

<script>
import {onMounted} from "vue"
import {useRoute} from "vue-router"
export default {
  name: "about",
  setup(){
    const route = useRoute()
    onMounted(() => {
      console.log(route.query)
    })
  }
};
</script>
