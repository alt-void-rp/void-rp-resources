<script setup>
import { onClickLoginButton } from "@/services/auth/altv";

</script>

<template>
  <form id="auth-form">
        <div class="mb-3">
            <h6 class="text-light" style="font-weight: 600;">Ваш ник</h6>
            <input type="text" id="login_field" class="form-control  text-light"
                placeholder="Ваш никнейм">
        </div>
        <div class="mb-3">
            <h6 class="text-light" style="font-weight: 600;">Ваш пароль</h6>

            <input type="password" id="password_field" class="form-control  text-light"
                placeholder="Пароль">
        </div>
        <button type="button" class="btn btn-grad w-100" @click="onClickLoginButton">Войти</button>
    </form>
</template>

<style scoped>

</style>
