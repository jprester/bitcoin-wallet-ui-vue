<template>
  <div id="app" class="App">
    <div class="app-container">
      <Header/>
      <Content :price="btcPrice"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Footer
  },
  data: function() {
    return { btcPrice: 0 };
  },
  mounted() {
    axios({
      url: "https://rest.coinapi.io/v1/exchangerate/BTC/USD",
      method: "get",
      headers: {
        "X-CoinAPI-Key": "A28420FA-918D-454B-A43C-5ABA0D249B49"
      }
    }).then(response => {
      this.$store.dispatch("setPrice", {
        btcPrice: response.data.rate
      });
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
}

.App {
  padding: 0;
  margin: 0;
}

.app-container {
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0;
  max-width: 940px;
}

.app-body {
  max-width: 980px;
  display: flex;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}

.row {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
}

.content-block {
  padding: 10px 10px 10px 10px;
  align-items: center;
}

.block-size-1-2 {
  width: 49%;
}

.block-size-1-3 {
  width: 32%;
}

.block-size-2-3 {
  width: 65%;
}

.newtransaction-mobile-button {
  display: none;
}

.vertical-divider {
  border-right: 1px solid #e9eaf4;
}

h1 {
  font-weight: 400;
  font-size: 21px;
}

h2 {
  font-size: 15px;
}

h3 {
  font-size: 14px;
}

.send-crypto-form {
  max-width: 300px;
  padding: 15px;
  border: 1px solid #cccccc;
  margin-bottom: 20px;
}

@media only screen and (max-width: 658px) {
  .content-right {
    margin: 0;
  }

  h1.title {
    text-align: center;
  }

  .block-size-1-2 {
    width: auto;
  }

  .block-size-1-3 {
    width: auto;
  }

  .block-size-2-3 {
    width: auto;
  }

  .row {
    display: block;
  }
}
</style>
