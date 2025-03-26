<template>
  <div class="t-home">
    <form @submit.prevent>
      <t-form-generator :field="field" :formData="formData"></t-form-generator>
    </form>

    <p>text:{{ formData.text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import TFormGenerator from '../components/t-form-generator.vue'

const field = reactive({
  label: 'Инпут',
  type: 'input',
  id: '1',
  placeholder: '123',
})

const formData = reactive({
  text: '',
})
</script>

<style scoped lang="scss"></style>
