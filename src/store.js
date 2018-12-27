import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const mutations = {};

export const actions = {};

export const defaultState = {
    transactions: [
      {address: "1JHwenDp9A98XdjfYkHKyiE3R99Q72K9X4", amount: 2.5},
      {address: "1Unoc4af6gCq3xzdDFmGLpq18jbTW1nZD9", amount: 1.2}
    ],
    amount: '',
    walletAddress: '',
    walletAddressFieldError: '',
    amountFieldError: '',
    btcAvailable: 10,
    btcSent: 0,
    formVisibleOnMobile: false,
    btcPrice: '',
};

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions
})