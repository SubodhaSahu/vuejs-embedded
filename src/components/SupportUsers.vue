<script setup lang="ts">
import { ref, computed } from "@vue/reactivity";
 const props = defineProps({
    userColumns: Array,
    users: Array,
    filterKey: String
})
interface SimpleObject {
   a: string 
   b: string 
}

const sortKey = ref('')
const sortOrders = ref(props.userColumns!.reduce((o, key) => ((o[key] = 1), o), {}))

const filteredData = computed(() => {
  let users  = props.users!;
  let filterKey = props.filterKey!;
  if (filterKey) {
    filterKey = filterKey.toLowerCase();
    users = users.filter((user : any) => {
      return Object.keys(user).some((key) => {
        return String(user[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }

  const key = sortKey.value
  if (key) {
    const order = sortOrders.value[key]
    users = users.slice().sort((a, b) => {
      a = a[key]
      b = b[key]
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }

  return users
})

function sortBy(key : any) {
  sortKey.value = key
  sortOrders.value[key] *= -1
}


function capitalize(str : string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const signleUser  = ref('');

</script>

<template>
 <div class="container-fluid">
    <div class="row align-items-start">
    <div class="col">
      <table class="table table-bordered">
        <thead>
          <tr>
              <th 
               v-for="(coumln, index) in userColumns" :key="index"
               @click="sortBy(index)"
          :class="{ active: sortKey == index }">
          {{ capitalize(coumln) }}
          <span class="arrow" :class="sortOrders[index] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
          </tr>
        </thead>
        <tbody>
          <tr 
          v-for="(signleUser, index) in filteredData" :key="index"
            class="todo">
            <th scope="row">{{signleUser.id}}</th>
            <td>{{ signleUser.name }}</td>
             <td>{{ signleUser.email }}</td>
              <td>{{ signleUser.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>