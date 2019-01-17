<template>
  <div class="transactions-container">
    <h3 class="section-title">Transactions</h3>
    <div class="transactions-item-containter">
      <ul class="transactions-item-list"
        v-for="transaction in transactions"
        :key="transaction.address"
      >
        <li class="transactions-item">
          <p>{{ transaction.amount }}</p>
          <p>{{ transaction.address }}</p>
        </li>
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

<style scoped>
.transactions-item {
  padding: 2.3rem;
  background: #fff;
}
.transactions-item-list {
  padding: 0;
  margin: 0;
  border-right: 1px;
  border-top: 0px;
  border-left: 1px;
  border-bottom: 1px;
  border-color: #e7e7e7;
  border-style: solid;
  list-style: none;
}

.transactions-container {
  max-width: 40vw;
}

.transactions-item-list:first-child {
  border: 1px solid #e7e7e7;
}

@media only screen and (max-width: 768px) {
  .transactions-container {
    max-width: 80vw;
  }
}
</style>
