<script setup>
  const props = defineProps({
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    link: {
      type: Boolean,
      required: false
    }
  })

  const name = useCookie('name')
  const setName = (val) => name.value = val
</script>

<template>
    <table class="table">
      <thead>
        <tr class="table__row">
          <th v-for="(header, index) in headers"
              :key="index" class="table__head">{{ header }}</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="(row, rowIndex) in rows"
            :key="rowIndex" class="table__row">
          <td v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :style="{display: cellIndex === 3 ? 'none' : 'table-cell'}" class="table__cell">
              <nuxt-link v-if="cellIndex === 0 && link" :to='`/user/todo/${row[3]}`' @click="setName(row[0])">
                {{cell}}
              </nuxt-link>
              <span v-else>{{cell}}</span>
            </td>
        </tr>
      </tbody>
    </table>
</template>

<style lang="sass" scoped>
.table

  &__head
    padding: 10px 20px
    background-color: rgba(grey, .2)

  &__row
    &:nth-child(even)
      background-color: rgba(blue, .1)

    & > .table__cell
      padding: 10px 20px

      a
        text-decoration: none
</style>