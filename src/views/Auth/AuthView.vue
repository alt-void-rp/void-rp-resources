<script setup>
import "@/assets/auth/css/styles.css"
import logo from '@/assets/auth/img/logo_light.png'

import FormAuth from "@/components/Auth/FormAuth.vue";
</script>

<template>
  <div class="container-fluid justify-content-center bg-dark">

        <div class="row d-flex justify-content-center vh-100">

            <div class="col-5 d-flex justify-content-center align-items-center">
                <div class="row d-flex justify-content-center">
                    <div class="row d-flex justify-content-center text-center">
                        <img :src="logo" style="width: 250px;" alt="">
                        <p class="slogan text-light mt-3" style="font-weight: 600;">Твоя история начинается в пустоте.
                            Создай её сам.</p>
                    </div>
                    <div class="row d-flex justify-content-center mt-3">
                        <div class="col-10">

                            <FormAuth />
                            
                            

                            <div class="mt-3 text-center" id="block-error" style="display: none;">
                                <h6 class="text-danger" id="error-message"></h6>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>
<style scoped>
</style>

