// src/composables/useAuth.js
import { ref, reactive, onMounted } from 'vue';
import alt from '@/services/altv.js';
import { EVENTS } from '@/shared/constants.js';

export function useAuth() {
  // Состояние форм
  const isResetActive = ref(false);
  const isOtpActive = ref(false);
  const isNewPasswordActive = ref(false);
  const isLoading = ref(false);

  // Алерты
  const alerts = reactive({
    login: { error: null },
    reset: { error: null, success: null },
    otp: { error: null },
    newPassword: { error: null }
  });

  const clearAlerts = () => {
    alerts.login.error = null;
    alerts.reset.error = null;
    alerts.reset.success = null;
    alerts.otp.error = null;
    alerts.newPassword.error = null;
  };

  // Валидация пароля
  const validatePassword = (password, repeat) => {
    const errors = [];
    if (!password) errors.push('Пароль не может быть пустым.');
    if (password !== repeat) errors.push('Пароли не совпадают.');
    if (password.length < 8) errors.push('Пароль должен содержать не менее 8 символов.');
    if (!/[A-ZА-ЯЁ]/.test(password)) errors.push('Заглавная буква.');
    if (!/[a-zа-яё]/.test(password)) errors.push('Строчная буква.');
    if (!/\d/.test(password)) errors.push('Цифра.');
    if (!/[!@#$%^&*]/.test(password)) errors.push('Спецсимвол (!@#$%^&*).');
    return { isValid: errors.length === 0, errors };
  };

  // --- МЕТОДЫ ---
  const login = () => {
    const username = document.getElementById('login_field')?.value.trim();
    const password = document.getElementById('password_field')?.value.trim();

    if (!username || !password) {
      alerts.login.error = 'Заполните все поля';
      return;
    }

    isLoading.value = true;
    clearAlerts();
    alt.emit(EVENTS.CLIENT.LOGIN, JSON.stringify({ username, password }));
  };

  const requestPasswordReset = () => {
    const email = document.getElementById('email_field')?.value.trim();
    if (!email) {
      alerts.reset.error = 'Введите email';
      return;
    }

    isLoading.value = true;
    clearAlerts();
    alt.emit(EVENTS.CLIENT.RESET_PASSWORD, JSON.stringify({ email }));
  };

  const verifyOtp = () => {
    const otpInputs = document.querySelectorAll('.otp-input');
    const otpCode = Array.from(otpInputs).map(el => el.value.trim()).join('');

    if (otpCode.length !== 6) {
      alerts.otp.error = 'Введите 6-значный код';
      return;
    }

    isLoading.value = true;
    clearAlerts();
    alt.emit(EVENTS.CLIENT.OTP_VALIDATE, JSON.stringify({ otp_code: otpCode }));
  };

  const setNewPassword = () => {
    const newPass = document.getElementById('new_password_field')?.value.trim();
    const repeatPass = document.getElementById('repeat_new_password_field')?.value.trim();

    const validation = validatePassword(newPass, repeatPass);
    if (!validation.isValid) {
      alerts.newPassword.error = validation.errors[0];
      return;
    }

    // Успешно — сбрасываем форму
    isNewPasswordActive.value = false;
    isOtpActive.value = false;
    alerts.reset.success = 'Пароль успешно изменён!';
    setTimeout(() => {
      alerts.reset.success = null;
      isResetActive.value = false; // возврат к логину
    }, 2000);
  };

  // --- НАВИГАЦИЯ ---
  const switchToReset = () => {
    isResetActive.value = !isResetActive.value;
    isOtpActive.value = false;
    isNewPasswordActive.value = false;
    clearAlerts();
  };

  const switchToOtp = () => {
    isOtpActive.value = true;
    isNewPasswordActive.value = false;
  };

  const switchToNewPassword = () => {
    isNewPasswordActive.value = true;
  };

  const goBackFromOtp = () => {
    isOtpActive.value = false;
    isNewPasswordActive.value = false;
  };

  const goBackFromNewPassword = () => {
    isNewPasswordActive.value = false;
  };

  // --- ОБРАБОТКА СОБЫТИЙ ОТ СЕРВЕРА ---
  onMounted(() => {
    // Успешный вход
    alt.on(EVENTS.SERVER.LOGIN_SUCCESS, (data) => {
      console.log('asd');
      isLoading.value = false;
      if (data.success) {
        window.location.href = '/profiles/';
      }
    });

    // Ошибка входа
    alt.on(EVENTS.SERVER.LOGIN_FAIL, (data) => {
      isLoading.value = false;
      alerts.login.error = data.message || 'Неверный логин или пароль';
    });

    // Успешный запрос сброса → переход к OTP
    alt.on(EVENTS.SERVER.RESET_SUCCESS, (data) => {
      console.log('🔍 RESET_SUCCESS получил данные:', data);
      isLoading.value = false;
      if (data.success) switchToOtp();
    });

    // Ошибка сброса
    alt.on(EVENTS.SERVER.RESET_FAIL, (data) => {
      isLoading.value = false;
      alerts.reset.error = data.message || 'Ошибка при сбросе пароля';
    });

    // Успешный OTP → переход к новому паролю
    alt.on(EVENTS.SERVER.OTP_SUCCESS, (data) => {
      isLoading.value = false;
      if (data.success) switchToNewPassword();
    });

    // Ошибка OTP
    alt.on(EVENTS.SERVER.OTP_FAIL, (data) => {
      isLoading.value = false;
      alerts.otp.error = data.message || 'Неверный код';
    });
  });

  return {
    // Состояния
    isResetActive,
    isOtpActive,
    isNewPasswordActive,
    isLoading,

    // Алерты
    alerts,

    // Методы
    login,
    requestPasswordReset,
    verifyOtp,
    setNewPassword,
    switchToReset,
    goBackFromOtp,
    goBackFromNewPassword,

    // Вспомогательное
    validatePassword
  };
}
