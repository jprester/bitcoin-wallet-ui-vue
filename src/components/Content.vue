<template>
  <div>
    <button @click="doSomething">click</button>
    <input @input="onInputChange">
    <p>{{text}}</p>
    <div>
      <ul v-for="transaction in transactions" :key="transaction.address">
        <li>{{ transaction.address }} {{ transaction.amount }}</li>
      </ul>
      <!-- {{testUsers}} -->
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "Content",
  props: {
    testUsers: Array
  },
  data() {
    return {
      text: "lalala",
      input: "",
      transactions: this.$store.state.transactions
    };
  },
  methods: {
    doSomething() {
      this.text = this.input;
    },
    onInputChange(event) {
      this.input = event.target.value;
    }
  }
};
</script>

