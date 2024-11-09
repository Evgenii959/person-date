<template>
  <div>
    <label class="personal__label">{{ label }}</label>
    <input
      class="personal__input"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-model="inputValue"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const inputValue = ref(props.modelValue);

watch(inputValue, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>

<style scoped>
.personal__input {
  position: relative;
  width: 100%;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 26px 16px 6px;
  background-color: transparent;
}

.personal__input::placeholder {
  font-size: 14px;
  color: #111111;
}

.personal__label {
  position: absolute;
  margin-top: 8px;
  margin-left: 16px;
  font-size: 13px;
  color: rgba(17, 17, 17, 0.48);
  margin-bottom: -20px;
}
</style>
