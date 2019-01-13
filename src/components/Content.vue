<template>
  <div class="app-body">
    <div class="row">
      <div class="content-block block-size-1-2">
        <SendCryptoForm/>
        <SpendingStatusWidget/>
        <PriceTrackerWidget/>
      </div>
      <div class="content-block block-size-1-2 content-right">
        <TransactionList/>
      </div>
    </div>
  </div>
</template>

<script>
import SendCryptoForm from "./SendCryptoForm";
import TransactionList from "./TransactionList";
import PriceTrackerWidget from "./PriceTrackerWidget";
import SpendingStatusWidget from "./SpendingStatusWidget";

export default {
  name: "Content",
  components: {
    SendCryptoForm,
    TransactionList,
    PriceTrackerWidget,
    SpendingStatusWidget
  }
};
</script>

