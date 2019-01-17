<template>
  <div class="balance-container">
    <h3 class="section-title">My Current Balance</h3>
    <ul class="balance-items-container">
      <li class="balance-item">
        <span>Bitcoin:</span>
        <span>{{remainingBtc}} BTC</span>
      </li>
      <li class="balance-item">
        <span>Balance in USD:</span>
        <span>{{remainingFiat}} $</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "SpendingStatusWidget",
  computed: {
    remainingBtc() {
      return this.$store.state.btcAvailable;
    },
    remainingFiat() {
      return (this.$store.state.btcAvailable * this.$store.state.btcPrice).toFixed(2);
    }
  }
};
</script>

<style>
.balance-container {
  max-width: 30vw;
  margin: 4rem 0;
}

.balance-items-container {
  padding: 0;
  margin: 3rem 0.4rem;
}

.balance-item {
  display: flex;
  font-size: 1.6rem;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

@media only screen and (max-width: 768px) {
  .balance-container {
    max-width: 80vw;
  }
}
</style>

