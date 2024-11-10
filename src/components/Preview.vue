<template>
  <div class="preview">
    <div>
      <h2 class="preview__title">Персональные данные</h2>
      <p class="preview__name">Василий, 30 лет</p>
    </div>
    <div>
      <h3 class="preview__title">Дети</h3>
      <ul class="preview__list">
        <li
          v-for="(card, index) in savedCards"
          :key="index"
          class="preview__item"
        >
          {{ card.name }}, {{ card.age }} лет
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const savedCards = ref([]);

onMounted(() => {
  const saved = localStorage.getItem('savedCards');
  if (saved) {
    savedCards.value = JSON.parse(saved);
  }
});
</script>

<style lang="scss" scoped>
.preview {
  max-width: 616px;
  width: 100%;
  margin: 30px auto 136px;
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin: 0;
  }
  &__name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin: 20px 0 60px;
  }
  &__list {
    display: inline-block;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 20px 0 0;
  }
  &__item {
    padding: 10px 20px;
    background-color: #f1f1f1;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    &:last-child {
      margin: 0;
    }
  }
}
</style>
