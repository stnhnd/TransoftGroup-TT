<template>
  <ul>
    <li v-for="page of pages"
        :key="page"
        @click="onClick(page)">
      <nuxt-link :to="`/page/${page}`">{{ page }}</nuxt-link>
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    pages: Number,
    modelValue: [String, Number],
  })

  const emit = defineEmits(['update:modelValue', 'change'])

  const onClick = (page) => {
    emit('update:modelValue', page)
    emit('change', page)
  }
</script>

<style lang="sass" scoped>
  ul
    display: flex
    align-items: center
    padding-left: 0
    width: 100%

    li
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer

      a
        display: flex
        padding: 10px
        margin-right: 5px
        text-decoration: none
        color: black
        background-color: rgba(grey, .1)

        &.router-link-exact-active
          font-weight: 800
          background-color: rgba(grey, .2)
</style>