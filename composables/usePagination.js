export function usePagination(tableRows, limit, search) {
  const route = useRoute()
  const router = useRouter()
  const page = ref(1)

  const filteredRows = computed(() => {
    if (!search.value) {
      return tableRows.value
    }
    return tableRows.value.filter(row => row[0].toLowerCase().includes(search.value.toLowerCase()))
  })

  const pages = computed(() => Math.ceil(filteredRows.value.length / limit.value))

  const paginatedRows = computed(() => {
    if (search.value) {
      return filteredRows.value
    }

    const start = (page.value - 1) * limit.value
    const end = start + limit.value
    return filteredRows.value.slice(start, end)
  })

  watch(
    () => route.params.id || 1,
    (newId) => {
      page.value = parseInt(newId, 10)
    },
    { immediate: true }
  )

  const changePage = (pageId) => {
    router.push(`/page/${pageId}`)
  }

  return {
    page,
    pages,
    paginatedRows,
    filteredRows,
    changePage
  }
}