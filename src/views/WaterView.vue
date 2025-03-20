<script setup>
import { URL } from '@/const/const.js'
import axios from 'axios'
import { ref, watch } from 'vue'

const data = ref(null)
const loading = ref(true)
const error = ref(null)
const embassaments = ref([])

const getData = async () => {
  try {
    const response = await axios.get(URL)
    data.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch data'
    console.error(err)
  } finally {
    loading.value = false
  }
}
getData()

function getEmbassamentFromData(data) {
  if (!Array.isArray(data)) return
  data.forEach((obj) => {
    if (!embassaments.value.includes(obj.estaci)) {
      embassaments.value.push(obj.estaci)
    }
  })
}

watch(data, (newData) => {
  if (newData) {
    getEmbassamentFromData(newData)
  }
})

getEmbassamentFromData(data.value)
</script>
<template>
  <h1>Water</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <ul class="list-group" v-for="embassament in embassaments" :key="embassament">
      <li class="list-group-item">{{ embassament }}</li>
    </ul>
  </div>
</template>
<style scoped></style>
