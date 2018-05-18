<template>
  <div>
    <p>{{ $store.getters.authState }}</p>
    <button @click="sendLoading">testSend</button>
    <button @click="changeTurn">change</button>
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
      sendLoading() {
        this.$store.dispatch('getTurn');
      },
      changeTurn() {
        this.$store.dispatch('changeTurn');
      }
    },
  }
</script>

<style scoped>

</style>
