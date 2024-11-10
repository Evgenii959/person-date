<template>
  <form class="form" @submit.prevent="addCard">
    <div>
      <label class="form__label">Имя</label>
      <input
        class="form__input"
        placeholder="Имя"
        v-model="newCard.name"
        required
      />
    </div>
    <div>
      <label class="form__label">Возраст</label>
      <input
        class="form__input"
        placeholder="Возраст"
        v-model="newCard.age"
        type="number"
        required
      />
    </div>
    <div class="form__button-wrapper">
      <label class="form__button-text">Дети (макс. 5)</label>
      <button
        v-if="cards.length < 5"
        type="submit"
        :disabled="!newCard.name || !newCard.age"
        class="form__button"
      >
        <img src="../assets/images/plus.svg" alt="Добавить" />
        Добавить ребенка
      </button>
    </div>
  </form>
</template>
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const newCard = ref({ name: '', age: '' });

const addCard = () => {
  if (newCard.value.name && newCard.value.age && props.cards.length < 5) {
    props.cards.push({ name: newCard.value.name, age: newCard.value.age });
    newCard.value.name = '';
    newCard.value.age = '';
  }
};
</script>

<style lang='scss'coped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  &__input {
    font-family: Montserrat, Arial, sans-serif;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 29px 16px 9px;
    background-color: transparent;
    &::placeholder {
      font-size: 14px;
      color: #111111;
    }
  }
  &__label {
    position: absolute;
    margin-top: 8px;
    margin-left: 16px;
    font-size: 13px;
    color: rgba(17, 17, 17, 0.48);
    margin-bottom: -20px;
  }
  &__button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 23px;
  }
  &__button {
    font-family: Montserrat, Arial, sans-serif;
    display: flex;
    gap: 4px;
    font-size: 14px;
    line-height: 24px;
    color: #01a7fd;
    background-color: transparent;
    border: 2px solid #01a7fd;
    border-radius: 100px;
    padding: 8px 18px;
    cursor: pointer;
    margin: 0;
    &:hover {
      opacity: 0.7;
    }
    &-text {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #111111;
      margin: 0;
    }
  }
}
</style>
