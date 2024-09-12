<script setup>
  const props = defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search">
    <form @submit.prevent="onFilter">
      <input type="text"
             name="search"
             :value="props.modelValue"
             placeholder="Пошук"
             @input="emit('update:modelValue', $event.target.value)">
    </form>
  </div>
</template>

<style lang="sass" scoped>
.search
  form
    display: flex
    flex-direction: column
    margin-bottom: 20px

    label
      margin-bottom: 10px

    input
      max-width: 200px
      height: 20px
</style>