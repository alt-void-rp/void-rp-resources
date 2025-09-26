<script setup>
import { ref, Text } from 'vue' 
import "@/assets/auth/css/styles.css"
import {formatMoney} from "@/services/auth/altv"
import logo from '@/assets/auth/img/logo_light.png'
import user_icon from '@/assets/profiles/img/user_icon.png'

import profile_1 from '@/assets/profiles/img/profile_1.png';
import profile_2 from '@/assets/profiles/img/profile_2.png';
import profile_3 from '@/assets/profiles/img/profile_3.png';

const profileMap = {
  1: profile_1,
  2: profile_2,
  3: profile_3
};


const CHARACTERS = {
    0: {
        "person": 1,
        "username": "MIRONOOUV",
        "first_name": "Алексис",   
        "last_name": "Миронооу",
        "lvl": 2,
        "exp": 3,
        "credit_money": 12300,
        "cash_money": 1350,
        "hours_in_game": 322
    },
    1: {"person": 2,"username": "MIRONOOUV",},
    2: {"person": 3,"username": "MIRONOOUV",}
}

const username = CHARACTERS[0].username;
const socialID = "34512321";
const hours_in_game = 322;

</script>

<template>
  <div class="container-fluid">
        <div class="row d-flex justify-content-end align-items-center" style="height: 90vh;">

            <div class="row d-flex justify-content-center align-items-center">

                <div class="col-3 profile-card shadow d-flex align-self-start" style="height: 25vh;">

                    <div class="col-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2 p-2 top-card d-flex justify-content-center">
                                <img :src="user_icon" width="20" height="20">
                            </div>
                            <div class="col-10 top-content-card shadow-sm d-flex align-items-center ">
                                <h7 class="text-light " style="font-weight: 700;">ИНФОРМАЦИЯ</h7>
                            </div>
                        </div>

                        <div class="row m-1 mt-4 ">
                            <h4 class="text-white" style="font-weight: 700;">{{username}}</h4>


                            <div class="row d-flex align-items-center">
                                <div class="col-5">
                                    <h6 class="text-light" style="font-weight: 500;">SOCIALID</h6>
                                </div>
                                <div class="col-7  text-end">
                                    <h6 class="" style="font-weight: 700; color: #7369d6;">{{socialID}}</h6>
                                </div>
                            </div>

                            <div class="row d-flex align-items-center">
                                <div class="col-5">
                                    <h6 class="text-light" style="font-weight: 500;">ЧАСОВ В ИГРЕ</h6>
                                </div>
                                <div class="col-7  text-end">
                                    <h6 class="" style="font-weight: 700; color: #7369d6;">{{hours_in_game}}</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                        

                </div>

                <div class="col-3 profile-card profile-grad shadow"  v-for="character in CHARACTERS" >
                    <div v-if="character.first_name" class="profile-content">

                        <div  class="row d-flex justify-content-between">
                            <div class="col-2 p-2 top-card d-flex justify-content-center">
                                <img :src="user_icon" width="20" height="20">
                            </div>
                            <div class="col-10 top-content-card shadow-sm d-flex align-items-center ">
                                <h7 class="text-light " style="font-weight: 700;">ПЕРСОНАЖ #{{character.person}}</h7>
                            </div>
                        </div>

                        <div  class="row mt-4">
                            <h4 class="text-light" style="font-weight: 700;">{{character.last_name.toUpperCase()}}</h4>
                            <h5 class="text-light" style="font-weight: 300;">{{character.first_name.toUpperCase()}}</h5>
                        </div>
                        

                        <div class="row d-flex justify-content-center mt-2">
                            <div class="col-12 d-flex justify-content-center" 
                            :style="{
                                        height: '400px',
                                        backgroundImage: `url(${profileMap[character.person]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }">
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-5">
                                            <div class="row d-flex align-self-start">

                                                <div class="row d-flex align-items-center justify-content-between">
                                                    <div class="col-5 text-start">
                                                        <h5 class="text-light" style="font-weight: 500;">LVL</h5>
                                                    </div>
                                                    <div class="col-7 text-end">
                                                        <h3 class="" style="font-weight: 700; color: #7369d6;">{{35}}</h3>
                                                    </div>
                                                    
                                                </div>

                                                <div class="row d-flex align-items-center justify-content-between">
                                                    <div class="col-5 text-start">
                                                        <h5 class="text-light" style="font-weight: 500;">EXP</h5>
                                                    </div>
                                                    <div class="col-7 text-end">
                                                        <h3 style="font-weight: 700; color: #7369d6;">{{character.exp}}</h3>
                                                    </div>
                                                </div>
                                                
                                            </div>

                                        </div>

                                        <div class="col-7">

                                            <div class="row d-flex justify-content-end mt-4" style="min-width: 100%;">

                                                <div class="row d-flex justify-content-end">
                                                    <div class="col-12 text-end">
                                                        <h6 class="text-light" style="font-weight: 500;">НАЛИЧКА</h6>
                                                        <h6 class="" style="font-weight: 700; color: #7369d6;">{{formatMoney(character.cash_money + 45580000)}}Р</h6>

                                                    </div>
                                                </div>

                                                <div class="row d-flex justify-content-end mt-2">
                                                    <div class="col-12 text-end ">
                                                        <h6 class="text-light" style="font-weight: 500;">СРЕДСТВА НА КАРТЕ</h6>
                                                        <h6 class="" style="font-weight: 700; color: #7369d6;">{{formatMoney(character.credit_money)}}Р</h6>
                                                    </div>
                                                </div>

                                                
                                            </div>

                                        </div>
                                        
                                        

                                        <div class="play-button mt-2 d-flex justify-content-center align-self-end">
                                            <button style=" height: 50px; font-size: 18px;" class="btn btn-grad m-2">НАЧАТЬ ИГРУ</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="!character.first_name" class="profile-content">
                        <div class="row d-flex justify-content-between ">
                            <div class="col-2 p-2 top-card d-flex justify-content-center">
                                <img :src="user_icon" width="20" height="20">

                            </div>
                            <div class="col-10 top-content-card shadow-sm d-flex align-items-center">
                                <h7 class="text-light" style="font-weight: 700;">СВОБОДНО</h7>
                            </div>
                        </div>

                        <div class="row m-2 mt-4">
                            <h4 class="text-light" style="font-weight: 700;">СВОБОДНЫЙ</h4>
                            <h5 class="text-light" style="font-weight: 300;">СЛОТ</h5>
                        </div>

                        <div class="row d-flex justify-content-center mt-2 ">
                            <div class="col-12 d-flex align-items-end justify-content-center" 
                            :style="{
                                        height: '400px',
                                        backgroundImage: `url(${profileMap[character.person]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }">

                                    <button style="width: 50px; height: 50px; font-size: 18px;" class="btn btn-grad m-2">СОЗДАТЬ ПЕРСОНАЖА</button>

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
