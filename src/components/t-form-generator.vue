<template>
  <label for="field.id">{{ field.label }}</label>

  <div v-if="field.type === 'input'">
    <slot name="input">
      <input
        v-model="formData.text"
        :type="field.inputType || 'text'"
        :id="field.id"
        :placeholder="field.placeholder"
      />
    </slot>
  </div>

  <div v-if="field.type === 'textarea'">
    <slot name="textarea">
      <textarea v-model="formData.text" id="field.id" placeholder="field.placeholder" />
    </slot>
  </div>

  <div v-if="field.type === 'select'">
    <slot name="select">
      <select v-model="formData.selected" :id="field.id">
        <option v-for="option in field.options" :key="option.value" :value="option.value">
          {{ option.value }}
        </option>
      </select>
    </slot>
  </div>

  <div v-if="field.type === 'checkbox'">
    <slot name="checkbox">
      <input v-model="formData.checked" type="checkbox" :id="field.id" />
      <label :for="field.id">{{ field.checkboxLabel }}</label>
    </slot>
  </div>

  <div v-if="field.type === 'button'" class="buttons">
    <button type="submit" @click="handleSubmit" class="button-save">
      <slot name="save"></slot>
    </button>

    <button type="button" @click="handleCancel" class="button-cancel">
      <slot name="cancel"></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  field: {
    type: Object,
    required: true,
  },

  formData: {
    type: Object,
    required: true,
  },
})

const handleSubmit = (formData) => {
  alert('Submitted')
}

const handleCancel = () => {
  alert('Cancelled')
}
</script>

<style scoped lang="scss">
div {
  width: fit-content;
}

input[type='text'] {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease; /* Плавное изменение цвета границы */
}

input[type='text']:focus {
  outline: none;
  border-color: #007bff; /* Синяя граница при фокусе */
}

input[type='text']::placeholder {
  color: #999; /* Светло-серый placeholder */
}

textarea {
  width: 450px;
  min-height: 60px;
  border: 1px solid #0c0e0f;
  border-radius: 5px;
  font-family: 'Inter';
  font-size: 14px;
  color: #140e0e;
}

.button-save {
  color: #28a745;
  border: 1px solid #28a745;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.button-cancel {
  color: #dc3545;
  border: 1px solid #dc3545;
  background-color: transparent;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

select {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px; /* Добавляем отступ справа для стрелки */
}

select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

select:disabled {
  background-color: #f8f9fa;
  cursor: not-allowed;
  opacity: 0.6;
}

.buttons {
  display: flex;
  gap: 10px;
}

.button-save:hover {
  background-color: #28a745;
  color: white;
}

.button-cancel:hover {
  background-color: #dc3545;
  color: white;
}
</style>
