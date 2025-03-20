<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { normalizeUrl, buildUrl, getMonth } from '@/helpers/helpers.js'
import { URL_DETAIL } from '@/const/const.js'
import axios from 'axios'

const route = useRoute()
const embassament = ref(route.params.detail)
const normalizedEmb = normalizeUrl(embassament.value)
const buildedUrl = buildUrl(URL_DETAIL, normalizedEmb)

const data = ref([])
const loading = ref(true)
const error = ref(null)

const getData = async () => {
  try {
    const response = await axios.get(buildedUrl)
    data.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch data'
      console.error(err)
  } finally {
    loading.value = false
  }
}

getData()

</script>
<template>
<h1>Embassament: {{ embassament }}</h1>
<div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="container">
    <ul class="list-group" v-for="(detail, index) in data" :key="detail.dia">
      <li class="list-group-item list-group-item-action list-group-item-primary mt-2">
        <p><span style="font-weight: bold;">Dia {{ index }}:</span> {{ detail.dia.substring(8, 10) }} de {{ getMonth(detail.dia.substring(5, 7)) }} de {{ detail.dia.substring(0, 4) }}</p>
      </li>
    </ul>
  </div>
</template>
