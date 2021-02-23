<template>
  <div class="title">
      <hr>
      <h5>title</h5>
      <p>{{sum}}</p>
  </div>
</template>

<script>
import { inject , reactive , toRefs} from "vue"
export default {
  name: "navbar",
  setup() {
      const sum = inject('sum')

      const state = reactive({
          sum
      })

      return {
          ...toRefs(state)
      }
  }
};
</script>
