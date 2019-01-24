<template>
  <div class="transactions-container">
    <h3 class="section-title">Transactions</h3>
    <div class="transactions-item-containter">
      <p v-if="transactions.length < 1">No transactions</p>

      <ul
        class="transactions-item-list"
        v-for="transaction in transactions"
        :key="transaction.id"
        v-else
      >
        <li class="transactions-item">
          <p>
            Amount:
            <span class="bold">{{ transaction.amount }} BTC</span>
          </p>
          <p>
            To:
            <span class="bold">{{ transaction.address }}</span>
          </p>
          <p class="transaction-type">Sent</p>
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
  padding: 1.2rem;
  background: #fff;
  font-size: 1.3rem;
  position: relative;
}

.transactions-item p .bold {
  font-weight: 600;
}

.transaction-type {
  position: absolute;
  right: 0px;
  top: 0px;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 5px;
  background: #5d7087;
  color: #ffffff;
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
