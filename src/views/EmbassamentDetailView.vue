<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { normalizeUrl, buildUrl, getMonth } from '@/helpers/helpers.js'
import { URL_DETAIL } from '@/const/const.js'
import { useEmbassamentDetail } from '@/composables/UseEmbassamentsDetail'

const route = useRoute()
const embassament = ref(route.params.detail)
const normalizedEmb = normalizeUrl(embassament.value)
const buildedUrl = buildUrl(URL_DETAIL, normalizedEmb)

const { data, loading, error } = useEmbassamentDetail(buildedUrl)

watch(buildedUrl, (newData) => {
  if (newData) {
    console.log(newData)
  }
})
</script>

<template>
<h1 class="text-center">Embassament: {{ embassament }}</h1>
<p class="text-center">Nivells d'aigua corresponent als últims 100 dies</p>
<div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else class="container">
    <ul class="list-group" v-for="(detail, index) in data" :key="detail.dia">
      <li class="list-group-item list-group-item-action list-group-item-primary mt-2">
        <p><span style="font-weight: bold;">Dia {{ index }}:</span> {{ detail.dia.substring(8, 10) }} de {{ getMonth(detail.dia.substring(5, 7)) }} de {{ detail.dia.substring(0, 4) }}</p>
        <p><span style="font-weight: bold;">Nivell absolut sobre el nivell del mar:</span></p>
      </li>
    </ul>
  </div>
</template>
