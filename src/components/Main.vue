<template>
  <div class="personal">
    <h1 class="personal__title">Персональные данные</h1>
    <UserForm :cards="cards" />
    <PersonalList :cards="cards" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PersonalList from './PersonalList.vue';
import UserForm from './UserForm.vue';

const cards = ref([]);

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
}
</style>
