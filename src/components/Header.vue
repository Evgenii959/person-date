<template>
  <header class="header">
    <div class="header__wrapper">
      <img class="header__logo" src="../assets/images/logo.svg" alt="Логотип" />
      <nav class="header__nav-wrapper">
        <router-link class="header__link" to="/">Форма</router-link>
        <router-link class="header__link" to="/preview">Превью</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 76px;
  border-bottom: 1px solid #1111111a;
}

.header__wrapper {
  width: 100%;
  padding: 10px 93px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  height: 29px;
}

.header__nav-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
    gap: 24px;
  padding: 0;
  margin: 0;
}

.header__link {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
}

.header__link:hover {
  opacity: 0.7;
}
</style>
