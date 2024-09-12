<script setup>
  const route = useRoute()
  const router = useRouter()

  const tableHeaders = ref(['title', 'completed'])
  const tableRows = ref([])

  const { data, error } = await useFetch(`https://jsonplaceholder.typicode.com/todos?userId=${route.params.id}`)

  if (data.value) {
    const modifiedData = data.value.map((task) => [task.title, task.completed])
    tableRows.value = [...modifiedData]
  }

  const name = useCookie('name')
</script>

<template>
    <div class="todos">
      <h1 v-if="name">{{name}}</h1>

      <button @click="router.back()">Назад</button>

      <TableItem :headers="tableHeaders"
               :rows="tableRows" :link="false"></TableItem>
    </div>
</template>

<style lang="sass" scoped>
.todos
  button 
    height: 30px
    width: 100px
    padding-left: 10px
    padding-right: 10px
    margin-bottom: 20px  
</style>