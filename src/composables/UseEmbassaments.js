import { URL } from '@/const/const.js'
import axios from 'axios'
import { ref, watch } from 'vue'

export default function UseEmbassaments() {
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

  function getEmbassamentFromData(data) {
    if (!Array.isArray(data)) return
    data.forEach((obj) => {
      if (!embassaments.value.includes(obj.estaci)) {
        embassaments.value.push(obj.estaci)
      }
    })
  }

  return {
    data,
    loading,
    error,
    embassaments,
    getData,
    getEmbassamentFromData,
  }
}
