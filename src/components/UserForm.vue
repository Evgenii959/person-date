<template>
  <div class="personal">
    <h1 class="personal__title">Персональные данные</h1>
    <form class="personal__form" @submit.prevent="addCard">
      <InputField
        label="Имя"
        placeholder="Введите имя"
        v-model="newCard.name"
        required
      />
      <InputField
        label="Возраст"
        placeholder="Введите возраст"
        type="number"
        v-model="newCard.age"
        required
      />
    </form>
    <ul>
      <li v-for="(card, index) in cards" :key="index">
        {{ card.name }} - {{ card.age }} лет
      </li>
    </ul>
      <div class="personal__button-block">
        <label class="personal__button-text">Дети (макс. 5)</label>
        <div class="personal__button-wrapper">
          <img src="../assets/images/plus.svg" />
          <button :disabled="cards.length === 0" class="personal__button" type="submit">
            Добавить ребенка
          </button>
        </div>
      </div>

    <h3>Сохраненные данные</h3>
    <ul v-if="savedCards.length > 0">
      <li v-for="(card, index) in savedCards" :key="index">
        {{ card.name }} - {{ card.age }} лет
      </li>
    </ul>
    <p v-else>Нет сохраненных карточек.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputField from './InputField.vue';

const cards = ref([]);
const savedCards = ref([]);
const newCard = ref({ name: '', age: '' });

const addCard = () => {
  if (newCard.value.name && newCard.value.age) {
    cards.value.push({ name: newCard.value.name, age: newCard.value.age });
    newCard.value.name = '';
    newCard.value.age = '';
  }
};

const saveData = () => {
  savedCards.value = [...cards.value];
  cards.value = [];
};
</script>

<style lang="css" scoped>
.personal {
  max-width: 616px;
  width: 100%;
  margin-top: 30px;
  margin: 30px auto 0;
}

.personal__title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin: 0 0 20px;
}

.personal__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.personal__button-block {
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
}
.personal__button-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin: 0;
}
.personal__button-wrapper {
  padding: 8px 20px;
  border: 2px solid #01a7fd;
  border-radius: 100px;
  display: flex;
}
.personal__button {
  font-size: 14px;
  line-height: 24px;
  color: #01a7fd;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-left: 4px;
}
</style>
