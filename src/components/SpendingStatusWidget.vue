<template>
  <div>
    <h3>My Current Balance</h3>
    <ul>
      <li>Bitcoin: {{remainingBtc}}</li>
      <li>Balance in USD: {{remainingFiat}}</li>
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
      return this.$store.state.btcAvailable * this.$store.state.btcPrice;
    }
  }
};
</script>

<style>
</style>

