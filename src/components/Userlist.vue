<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { computed } from '@vue/reactivity';
import   SupportUsers from './SupportUsers.vue';
import jwt_decode from "jwt-decode";
import store from '../store'
const userColumns  = ref(['name', 'Email', 'User Type', 'Status']);
let id = 1;

const users = ref([
  { id: id++, name: 'Chuck Norris', email: 'chuck_orris@mailinator.com', userType : 'Admin', status: 'Active'},
  { id: id++, name: 'Bruce Lee',  email: 'Brucelee@mailinator.com', userType : 'Admin', status: 'Active' },
  {id: id++,  name: 'Jackie Chan', email: 'JackieChan@mailinator.com', userType : 'Admin', status: 'Active' },
  { id: id++, name: 'Jet Li',  email: 'Jet Li@mailinator.com', userType : 'Admin', status: 'Active'}
]);

const searchQuery = ref('');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get('token');
if (token !== null)   {
  let decoded = jwt_decode(token);
  console.log(decoded)
  const account = decoded.variables.Account;
}
const movieName = ref<string>("Relatos Salvajes")
const country = ref<string>("Argentina")

const nameAndCountry = computed<string>(
  () => `The movie name is ${movieName.value} from ${country.value}`
)

const count = computed(() => `The token variable is ${JSON.stringify(store.state.accountInfo)}`);
</script>

<template>
  <div class="container-fluid">
  </div>
    <div class="row align-items-start">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
    <div class="col">
  {{count}}
  <!--Account Id is: {{account.value}}-->
      <support-users :userColumns="userColumns" :users="users" :filter-key="searchQuery"></support-users>
    </div>
    </div>
</template>

<style>
@import '@/assets/base.css';

</style>
