<template>
  <div class="personal">
    <h1 class="personal__title">Персональные данные</h1>
    <form class="personal__form" @submit.prevent="addCard">
      <div>
        <label class="personal__label">Имя</label>
        <input
          class="personal__input"
          placeholder="Имя"
          v-model="newCard.name"
          required
        />
      </div>
      <div>
        <label class="personal__label">Возраст</label>
        <input
          class="personal__input"
          placeholder="Возраст"
          v-model="newCard.age"
          type="number"
          required
        />
      </div>
      <div class="personal__button-wrapper">
        <label class="personal__button-text">Дети (макс. 5)</label>
        <button
          v-if="cards.length < 5"
          type="submit"
          :disabled="!newCard.name || !newCard.age"
          class="personal__button"
        >
          <img src="../assets/images/plus.svg" alt="Добавить" />
          Добавить ребенка
        </button>
      </div>
    </form>
    <ul v-if="cards.length > 0" class="personal__list">
      <li v-for="(card, index) in cards" :key="index" class="personal__card">
        <div class="personal__card-block">
          <label class="personal__card-label">Имя</label>
          <p class="personal__name">{{ card.name }}</p>
        </div>
        <div class="personal__card-block">
          <label class="personal__card-label">Возраст</label>
          <p class="personal__name">{{ card.age }}</p>
        </div>
        <button @click="removeCard(index)" class="personal__button-delete">
          Удалить
        </button>
      </li>
    </ul>
    <button
      v-if="cards.length > 0"
      @click="saveData"
      class="personal__button-save"
    >
      Сохранить
    </button>

    <p v-else>Нет сохраненных карточек.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cards = ref([]);
const newCard = ref({ name: '', age: '' });

const addCard = () => {
  if (newCard.value.name && newCard.value.age && cards.value.length < 5) {
    cards.value.push({ name: newCard.value.name, age: newCard.value.age });
    newCard.value.name = '';
    newCard.value.age = '';
  }
};

const saveData = () => {
  localStorage.setItem('savedCards', JSON.stringify(cards.value));
};

const removeCard = (index) => {
  cards.value.splice(index, 1);
  saveData();
};

onMounted(() => {
  const saved = localStorage.getItem('savedCards');
  if (saved) {
    cards.value = JSON.parse(saved);
  }
});
</script>

<style lang="scss" scoped>
.personal {
  max-width: 616px;
  width: 100%;
  margin: 30px auto 136px;

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin: 0 0 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

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
    &-delete {
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
    &-save {
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

  &__list {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 11px 0 30px;
  }

  &__card {
    display: flex;
    gap: 18px;
    &-block {
      padding: 4px 17px;
      border: 1px solid #f1f1f1;
      width: 100%;
    }
    &-label {
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: rgba(17, 17, 17, 0.48);
    }
  }

  &__name {
    margin: 2px 0 0;
    height: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #111111;
  }
}
</style>
