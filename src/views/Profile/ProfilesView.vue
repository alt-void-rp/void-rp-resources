<script setup>
import { ref, Text } from 'vue' 
import "@/assets/auth/css/styles.css"
import logo from '@/assets/auth/img/logo_light.png'
import user_icon from '@/assets/profiles/img/user_icon.png'
import profile_1 from '@/assets/profiles/img/profile_1.png'

const CHARACTERS = {
    0: {
        "person": 1,
        "username": "MIRONOOUV",
        "first_name": "Алексис",   
        "last_name": "Миронооу",
        "lvl": 0,
        "credit_money": 12300,
        "cash_money": 1350,
    },
    1: {"person": 2,"username": "MIRONOOUV",},
    2: {"person": 3,"username": "MIRONOOUV",}
}


</script>


<template>
  <div class="container">

        <div class="row d-flex justify-content-center align-items-center" style="height: 90vh;">
            <div class="col-3 me-2 profile-card" v-for="character in CHARACTERS" style="height: 50vh;">

                <div>
                    <div class="row d-flex justify-content-between">
                        <div class="col-2 p-2 top-card d-flex justify-content-center">
                            <img :src="user_icon" width="30" height="30">
                        </div>
                        <div class="col-10 top-content-card shadow-sm d-flex align-items-center">
                            <h7 class="text-light">{{character.username}}</h7>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center mt-2">
                        <div class="col-12 d-flex justify-content-center">
                            <img :src="profile_1" style="width: 700px;" alt="" />
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <button class="btn btn-grad">ИГРАТЬ</button>
                        </div>
                        


                    </div>
                </div>

                
            </div>
            
        </div>
    </div>
</template>
<style scoped>
</style>
