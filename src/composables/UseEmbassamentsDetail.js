import { ref } from 'vue'
import axios from 'axios'

export function useEmbassamentDetail(buildedUrl) {
  const data = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchData = async () => {
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
  fetchData()
  return { data, loading, error }
}
