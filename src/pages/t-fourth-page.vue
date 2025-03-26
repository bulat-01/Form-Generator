<template>
  <div class="t-fourth-page">
    <form @submit.prevent>
      <t-form-generator :field="field" :formData="formData"></t-form-generator>
    </form>

    <p>{{ formData.checked }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import TFormGenerator from '../components/t-form-generator.vue'

const field = reactive({
  label: 'checkbox',
  type: 'checkbox',
  id: '1',
})

const formData = reactive({
  checked: '',
})
</script>

<style scoped lang="scss"></style>
