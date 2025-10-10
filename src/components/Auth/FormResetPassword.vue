<script setup>
import { onMounted } from 'vue';
import { useAuth } from '@/composables/useAuth.js';
import icon_back from '@/assets/auth/img/icon_back.png';

const {
  isOtpActive,
  isNewPasswordActive,
  alerts,
  isLoading,
  requestPasswordReset,
  verifyOtp,
  setNewPassword,
  goBackFromOtp,
  goBackFromNewPassword
} = useAuth();

const emit = defineEmits(['switch-to-reset']);

// OTP автофокус
onMounted(() => {
  const inputs = document.querySelectorAll('.otp-input');
  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      if (e.target.value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
});
</script>

<template>
  <!-- Шаг 1: Email -->
  <div v-if="!isOtpActive">
    <div class="text-center mb-4">
      <h4 class="text-light">Восстановление пароля</h4>
      <h6 class="text-light" style="font-size: 14px;">Введите почту которую вы указали при регистрации.</h6>
    </div>
    <div class="mb-3">
      <h6 class="text-light" style="font-weight: 600;">Почта</h6>
      <input type="text" id="email_field" class="form-control text-light" placeholder="Ваша почта" />
    </div>

    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-3 col-lg-2 col-md-3 col-sm-4 col-xs-h6 text-center">
        <button type="button" class="btn btn-back" @click="emit('switch-to-reset')">
          <img :src="icon_back" style="width: 25px;" />
        </button>
      </div>
      <div class="col-9 col-lg-10 col-md-9 col-sm-8 col-xs-6 text-center">
        <button
          type="button"
          class="btn btn-grad w-100"
          @click="requestPasswordReset"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Отправка...' : 'Восстановить пароль' }}
        </button>
      </div>
    </div>

    <div class="mt-3 text-center" v-if="alerts.reset.error">
      <h6 class="text-danger">{{ alerts.reset.error }}</h6>
    </div>
    <div class="mt-3 text-center" v-if="alerts.reset.success">
      <h6 class="text-success">{{ alerts.reset.success }}</h6>
    </div>
  </div>

  <!-- Шаг 2: OTP -->
  <div v-if="isOtpActive && !isNewPasswordActive">
    <div class="text-center mb-4">
      <h4 class="text-light">Восстановление пароля</h4>
      <h6 class="text-light" style="font-size: 14px;">Вам на почту отправленно письмо с кодом!</h6>
    </div>

    <form>
      <div class="t-otp">
        <input
          v-for="i in 6"
          :key="i"
          :id="`d${i}`"
          class="otp-input btn btn-dark text-light"
          type="text"
          inputmode="numeric"
          maxlength="1"
          pattern="[0-9]*"
        />
      </div>
    </form>

    <div class="row mt-3 d-flex justify-content-center">
      <div class="col-2 text-center">
        <button type="button" class="btn btn-back" @click="goBackFromOtp">
          <img :src="icon_back" style="width: 25px;" />
        </button>
      </div>
      <div class="col-10 text-center">
        <button
          type="button"
          class="btn btn-grad w-100"
          @click="verifyOtp"
          :disabled="isLoading"
        >
          Продолжить
        </button>
      </div>
    </div>

    <div class="mt-3 text-center" v-if="alerts.otp.error">
      <h6 class="text-danger">{{ alerts.otp.error }}</h6>
    </div>
  </div>

  <!-- Шаг 3: Новый пароль -->
  <div v-if="isOtpActive && isNewPasswordActive">
    <div class="text-center mb-4">
      <h4 class="text-light">Восстановление пароля</h4>
      <h6 class="text-light" style="font-size: 14px;">Введите новый пароль.</h6>
    </div>
    <div class="mb-3">
      <h6 class="text-light" style="font-weight: 600;">Пароль</h6>
      <input
        type="password"
        id="new_password_field"
        class="form-control text-light"
        placeholder="Новый пароль"
      />
      <h6 class="text-light mt-3" style="font-weight: 600;">Повтор пароля</h6>
      <input
        type="password"
        id="repeat_new_password_field"
        class="form-control text-light"
        placeholder="Повторите новый пароль"
      />
    </div>
    <div class="row mt-3 d-flex justify-content-center">
      <div class="col-2 text-center">
        <button type="button" class="btn btn-back" @click="goBackFromNewPassword">
          <img :src="icon_back" style="width: 25px;" />
        </button>
      </div>
      <div class="col-10 text-center">
        <button type="button" class="btn btn-grad w-100" @click="setNewPassword">
          Продолжить
        </button>
      </div>
    </div>
    <div class="mt-3 text-center" v-if="alerts.newPassword.error">
      <h6 class="text-danger">{{ alerts.newPassword.error }}</h6>
    </div>
  </div>
</template>

<style scoped>
.t-otp {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
.otp-input {
  width: 50px !important;
  height: 50px;
  text-align: center;
  font-size: 18px;
  transition : 0.3s;
}
</style>
