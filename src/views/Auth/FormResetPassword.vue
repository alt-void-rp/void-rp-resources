<script setup>
import "@/assets/auth/css/otpStyles.css"

import { isOtp } from "@/services/auth/altv";
import { onClickResetPasswordButton, switchOtpForm } from "@/services/auth/altv";
import { otpValidate, digitValidate, tabChange} from "@/services/auth/otpForm"

import icon_back from '@/assets/auth/img/icon_back.png'


const emit = defineEmits(['switch-to-reset']);

</script>

<template>
    <div v-if="!isOtp">

    
        <div class="text-center mb-4">
            <h4 class="text-light">Восстановление пароля</h4>
            <p class="text-light" style="font-size: 14px;">Введите почту которую вы указали при регистрации.</p>
        </div>
        <div class="mb-3">
            <h6 class="text-light" style="font-weight: 600;">Почта</h6>
            <input type="text" id="email_field" class="form-control  text-light"
                placeholder="Ваша почта">
        </div>
        
        <div class="row ">
            <div class="col-2 text-center">
                <button type="button" class="btn btn-back" @click="emit('switch-to-reset')"><img :src="icon_back" style="width: 25px;"></button>
            </div>
            <div class="col-10 text-center">
                <button type="button" class="btn btn-grad w-100" @click="onClickResetPasswordButton">Восстановить пароль</button>
            </div>
        </div>

        <div class="mt-3 text-center" id="reset-pass-block-error" style="display: none;">
            <h6 class="text-danger" id="reset-pass-error-message"></h6>
        </div>
    </div>



    <div v-if="isOtp">
        <div class="text-center mb-4">
            <h4 class="text-light">Восстановление пароля</h4>
            <p class="text-light" style="font-size: 14px;">Вам на почту отправленно письмо с кодом!</p>
        </div>

        <form>
            <div class="t-otp">
                <input
                    id="d1"
                    class="otp-input btn btn-light text-light"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    autocomplete="one-time-code"
                    @input="otpValidate($event.target)"
                    maxlength="6"
                    required
                />
                <input
                    id="d2"
                    class="otp-input btn btn-light text-light"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="digitValidate($event.target)"
                    @keyup="tabChange(2)"
                    maxlength="1"
                />
                <input
                    id="d3"
                    class="otp-input btn btn-light text-light"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="digitValidate($event.target)"
                    @keyup="tabChange(3)"
                    maxlength="1"
                />
                <div class="me-2"></div>
                <input
                    id="d4"
                    class="otp-input btn btn-light text-light"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="digitValidate($event.target)"
                    @keyup="tabChange(4)"
                    maxlength="1"
                />
                <input
                    id="d5"
                    class="otp-input btn btn-light text-light"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="digitValidate($event.target)"
                    @keyup="tabChange(5)"
                    maxlength="1"
                />
                <input
                    id="d6"
                    class="otp-input btn btn-light text-light"
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    @input="digitValidate($event.target)"
                    @keyup="tabChange(6)"
                    maxlength="1"
                />
                </div>
        </form>
        <div class="row mt-3 d-flex justify-content-center">
            <div class="col-2 text-center">
                <button type="button" class="btn btn-back" @click="switchOtpForm"><img :src="icon_back" style="width: 25px;"></button>
            </div>
            <div class="col-10 text-center">
                <button type="button" class="btn btn-grad w-100">Продолжить</button>
            </div>
        </div>
    </div>



</template>

<style scoped>

</style>
