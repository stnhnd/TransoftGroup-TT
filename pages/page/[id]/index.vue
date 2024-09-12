<script setup>
  const tableHeaders = ref(['name', 'email', 'phone'])
  const tableRows = ref([])
  const search = ref('')
  const limit = ref(3)

  const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/users')

  if (data.value) {
    const modifiedData = data.value.map((user) => [user.name, user.email, user.phone, user.id])
    tableRows.value = [...modifiedData]
  }

  if (error.value) {
    console.error('Error fetching data:', error.value)
  }

  const { page, pages, paginatedRows, changePage } = usePagination(tableRows, limit, search)
</script>

<template>
  <div class="content">
    <SearchItem v-model="search"></SearchItem>

    <TableItem :headers="tableHeaders"
               :rows="paginatedRows" link></TableItem>

    <PaginationItem :pages="pages"
                    v-model="page"
                    @change="changePage"></PaginationItem>
  </div>
</template>

<style lang="sass" scoped>
</style>