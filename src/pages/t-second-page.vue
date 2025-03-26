<template>
  <div class="t-second-page">
    <form @submit.prevent>
      <t-form-generator :field="field">
        <template #save>
          Сохранить
        </template>

        <template #cancel>
          Отменить
        </template>
      </t-form-generator>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import TFormGenerator from '../components/t-form-generator.vue'

const field = reactive({
  label: 'Кнопки сохранить и отменить',
  type: 'button',
  id: '1',
})


</script>

<style scoped lang="scss">
.t-home {
  margin: 0 auto;
}
</style>
