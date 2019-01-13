<template>
  <div>
    <h3>Current BTC Price</h3>
    <div>
      BTC/USD :
      <span>{{price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceTrackerWidget",
  computed: {
    price() {
      return this.$store.state.btcPrice;
    }
  }
};
</script>

<style scoped>
</style>


