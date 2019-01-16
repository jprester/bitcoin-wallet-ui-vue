<template>
  <div class="app-header">
    <div class="content-container">
      <div class="row">
        <div class="content-block">
          <h1 class="logo-text bold">Bitcoin Wallet <span class="green-text">UI</span></h1>
        </div>
        <div class="content-block">
          <p class="header-wallet-text">Wallet address: <span class="header-wallet-text bold">1Cs4wu6pu5qCZ35bSLNVzGyEx5N6uzb</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.green-text {
  color: #74cab3;
}
.header-wallet-text {
  color: #fff;
  font-weight: 300;
  margin-top: 5px;
}

.bold {
  font-weight: 600;
}

.app-header {
  min-height: 84px;
  width: 100%;
  background-color: #5d7087;
}

.logo-text {
  color: #ffffff;
}
</style>

