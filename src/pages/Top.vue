<template>
  <div>
    <p>{{ $store.getters.turn }}のターン</p>
    <p>ターン</p>
    <button @click="changeTurn">change</button>
    <p>ボード</p>
    <button @click="clearBoard">clear</button>
    <button @click="readAll">readAll</button>
    <table class="board">
      <tr v-for="row in $store.getters.board">
        <td v-for="cell in row" class="cell">
          <span v-if="cell === 0">○</span>
          <span v-else-if="cell === 1">●</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
  export default {
    created() {
      this.$store.dispatch('getTurn');
      this.$store.dispatch('readAll');
    },
    methods: {
      changeTurn() {
        this.$store.dispatch('changeTurn');
      },
      clearBoard() {
        this.$store.dispatch('clearBoard');
      },
      readAll() {
        this.$store.dispatch('readAll');
      }
    },
  }
</script>

<style scoped>
  .board {
    background-color: black;
  }
  .cell {
    background-color: green;
    text-align: center;
    width: 50px;
    height: 50px;
  }
</style>
