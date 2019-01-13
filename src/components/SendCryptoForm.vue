<template>
  <div class="send-crypto-form">
    <div>
      Amount:
      <input type="text" @input="handleAmountChange" v-model="amountInput">
    </div>

    <div>
      Address:
      <input
        type="text"
        @input="handleAddressChange"
        v-model="addressInput"
        placeholder="Wallet Address"
      >
    </div>
    <button @click="handleSendClick">Send Bitcoin</button>
  </div>
</template>

<script>
export default {
  name: "SendCryptoForm",
  data() {
    return {
      amountInput: 0,
      addressInput: ""
    };
  },
  methods: {
    handleSendClick() {
      this.$store.dispatch("addTransaction", {
        amount: this.amountInput,
        address: this.addressInput
      });
      this.amountInput = 0;
      this.addressInput = "";
    },
    handleAmountChange(event) {
      this.amountInput = event.target.value;
      this.$store.dispatch("setAmount", { amount: this.amountInput });
    },
    handleAddressChange(event) {
      this.addressInput = event.target.value;
      this.$store.dispatch("setAddress", { address: this.addressInput });
    }
  }
};
</script>

<style scoped>
.send-crypto-form button {
  background-color: #74cab3;
}
</style>


