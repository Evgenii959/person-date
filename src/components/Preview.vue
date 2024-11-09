<template>
  <div>
    <h2>Превью</h2>
    <div>
      <h3>Пользователь</h3>
      <p>ФИО: {{ user.fullName }}</p>
      <p>Возраст: {{ user.age }}</p>

      <h3>Дети</h3>
      <ul>
        <li v-for="(child, index) in children" :key="index">
          {{ child.name }} - {{ child.age }} лет
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const user = computed(() => JSON.parse(route.query.user || '{}'));
const children = computed(() => JSON.parse(route.query.children || '[]'));
</script>