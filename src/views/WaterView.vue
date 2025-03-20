<script setup>
import { watch } from 'vue'
import UseEmabassaments from '../composables/UseEmbassaments'
import { RouterLink } from 'vue-router'

const { data, loading, error, embassaments, getData, getEmbassamentFromData } = UseEmabassaments()

getData()
getEmbassamentFromData(data.value)

watch(data, (newData) => {
  if (newData) {
    getEmbassamentFromData(newData)
  }
})

</script>

<template>
  <h1>Water</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="container">
    <ul class="list-group" v-for="embassament in embassaments" :key="embassament">
      <li class="list-group-item list-group-item-action list-group-item-primary mt-2">
        <RouterLink :to="`water/${embassament}`">{{ embassament }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
