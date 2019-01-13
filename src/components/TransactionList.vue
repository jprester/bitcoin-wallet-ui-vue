<template>
  <div>
    <h3>Transactions</h3>
    <div>
      <ul v-for="transaction in transactions" :key="transaction.address">
        <li>{{ transaction.address }} {{ transaction.amount }}</li>
      </ul>
      <!-- {{testUsers}} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TransactionList",
  data() {
    return {
      transactions: this.$store.state.transactions
    };
  }
};
</script>