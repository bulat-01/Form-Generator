<template>
  <div class="t-third-page">
    <form @submit.prevent>
      <t-form-generator :field="field" :formData="formData"></t-form-generator>
    </form>

    <p>Selected:{{ formData.selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import TFormGenerator from '../components/t-form-generator.vue'

const field = reactive({
  label: 'Выпадающий список',
  type: 'select',
  id: '1',
  options: [
    {
      value: 'A',
    },
    {
      value: 'B',
    },
    {
      value: 'C',
    },
  ],
})

const formData = reactive({
  selected: '',
})
</script>

<style scoped lang="scss">
.t-home {
  margin: 0 auto;
}
</style>
