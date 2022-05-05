import { createStore } from 'vuex'
import jwt_decode from "jwt-decode";

//Get the required parameter values from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get('token');
let accountInfo = '';
interface variableObject {
  Account: string,
}

interface decodedObject {
  variables: variableObject,
}


if (token !== null) {
  let decoded : decodedObject =  jwt_decode(token);
  accountInfo = decoded.variables.Account;
}

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 1,
      token: token,
      accountInfo: accountInfo,
      brandingInfo: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store