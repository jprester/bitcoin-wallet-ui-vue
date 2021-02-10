import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const mutations = {
  setAmount: (state, payload) => {
    state.amount = payload.amount;
  },
  setAddress: (state, payload) => {
    state.walletAddress = payload.address;
  },
  addTransaction: (state, payload) => {
    state.transactions.push(payload);
    state.btcAvailable = state.btcAvailable - payload.amount;
  },
  setPrice: (state, payload) => {
    state.btcPrice = payload.btcPrice;
  },
  setErrorMessage: (state, payload) => {
    state.errorMessage = payload.errorMessage;
  },
};

export const actions = {
  setAmount: ({ commit }, payload) => {
    commit("setAmount", payload);
  },
  setAddress: ({ commit }, payload) => {
    commit("setAddress", payload);
  },
  addTransaction: ({ commit }, payload) => {
    commit("addTransaction", payload);
  },
  setPrice: ({ commit }, payload) => {
    commit("setPrice", payload);
  },
  setErrorMessage: ({ commit }, payload) => {
    commit("setErrorMessage", payload);
  },
};

export const defaultState = {
  transactions: [],
  amount: "",
  walletAddress: "",
  walletAddressFieldError: "",
  amountFieldError: "",
  btcAvailable: 10,
  btcSent: 0,
  formVisibleOnMobile: false,
  btcPrice: 0,
  errorMessage: "",
};

export default new Vuex.Store({
  state: defaultState,
  mutations,
  actions,
});
