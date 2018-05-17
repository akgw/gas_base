<template>
  <div>
    <p>{{ $store.getters.authState }}</p>
    <button @click="sendLoading">testSend</button>
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
      sendLoading() {
        this.$store.dispatch('testChangeState');
      }
    },

    created() {
      console.log("top");
    }
  }
</script>

<style scoped>

</style>