<template>
  <ul v-if="cards.length > 0" class="card">
    <li v-for="(card, index) in props.cards" :key="index" class="card__item">
      <div class="card__block">
        <label class="card__label">Имя</label>
        <p class="card__name">{{ card.name }}</p>
      </div>
      <div class="card__block">
        <label class="card__label">Возраст</label>
        <p class="card__name">{{ card.age }}</p>
      </div>
      <button @click="removeCard(index)" class="card__delete">Удалить</button>
    </li>
  </ul>
  <button
    v-if="cards.length > 0"
    @click="saveData"
    class="card__save"
  >
    Сохранить
  </button>
  <p v-else>Нет сохраненных карточек.</p>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const saveData = () => {
  localStorage.setItem('savedCards', JSON.stringify(props.cards));
};

const removeCard = (index) => {
  props.cards.splice(index, 1);
  saveData();
};
</script>

<style lang="scss" scoped>
.card {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 11px 0 30px;
  &__item {
    display: flex;
    gap: 18px;
  }
  &__block {
    padding: 4px 17px;
    border: 1px solid #f1f1f1;
    width: 100%;
  }
  &__label {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
  }
  &__name {
    margin: 2px 0 0;
    height: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #111111;
  }
  &__delete {
    font-family: Montserrat, Arial, sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: #01a7fd;
    padding: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
  &__save {
    font-family: Montserrat, Arial, sans-serif;
    padding: 14px 22px;
    background-color: #01a7fd;
    border-radius: 100px;
    border: 0;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
