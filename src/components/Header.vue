<template>
  <header class="header">
    <div class="header__wrapper">
      <img class="header__logo" src="../assets/images/logo.svg" alt="Логотип" />
      <nav>
        <ul class="header__nav">
          <li>
            <router-link class="header__link" to="/form">Форма</router-link>
          </li>
          <li>
            <router-link class="header__link" to="/preview">Превью</router-link>
          </li>
        </ul>
      </nav>
      <div></div>
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
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  height: 29px;
}

.header__nav {
  display: flex;
  gap: 24px;
}

li {
  list-style: none;
}

.header__link {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
}

.header__link::hover {
  opacity: 0.2;
}
</style>
