<script setup>
import { ref } from 'vue' 
import "@/assets/auth/css/styles.css"
import logo from '@/assets/auth/img/logo_light.png'

import FormAuth from "@/components/Auth/FormAuth.vue";
import FormResetPassword from "./FormResetPassword.vue";

let isActive = ref(false)
const onSwitchToReset = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div class="container-fluid justify-content-center bg-dark">

        <div class="row d-flex justify-content-center" style="height: 80vh;">

            <div class="col-5 d-flex justify-content-center align-items-center">
                <div class="row d-flex justify-content-center">
                    <div class="row d-flex justify-content-center text-center">
                        <img :src="logo" style="width: 150px;" alt="">
                        <p class="slogan text-light mt-3" style="font-weight: 600;">Твоя история начинается в пустоте.
                            Создай её сам.</p>
                    </div>
                    <div class="row d-flex justify-content-center mt-3">
                        <div class="col-10">

                            
                            <FormAuth 
                                v-if="!isActive"
                                @switch-to-reset="onSwitchToReset"
                            />
                            <FormResetPassword 
                                v-if="isActive"
                                @switch-to-reset="onSwitchToReset"
                            />
                            
                            

                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>
<style scoped>
#error-message:hover {
  text-decoration: underline;
}
</style>
