<script setup>
import { useAuth } from '@/composables/useAuth.js';

const { login, alerts, isLoading } = useAuth();
const emit = defineEmits(['switch-to-reset']);

const handleSwitch = () => {
  emit('switch-to-reset');
};
</script>

<template>
  <div class="text-center">
    <form id="auth-form">
      <div class="mb-3">
        <h6 class="text-light">Ваш никнейм</h6>
        <input type="text" id="login_field" class="form-control text-light" placeholder="Ваш никнейм" />
      </div>
      <div class="mb-3">
        <h6 class="text-light">Ваш пароль</h6>
        <input type="password" id="password_field" class="form-control text-light" placeholder="Пароль" />
      </div>
      <button type="button" class="btn btn-grad w-100" @click="login" :disabled="isLoading">
        {{ isLoading ? 'Вход...' : 'Войти' }}
      </button>
    </form>

    <div type="button" @click="handleSwitch" class="mt-3 text-center" style="cursor: pointer;">
      <a class="text-decoration-none text-secondary text-reset-password" style="font-weight: 600;">Забыли пароль?</a>
    </div>

    <div class="mt-3 text-center" v-if="alerts.login.error">
      <h6 class="text-danger">{{ alerts.login.error }}</h6>
    </div>
  </div>
</template>
