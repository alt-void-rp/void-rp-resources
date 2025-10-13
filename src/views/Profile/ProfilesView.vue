<script setup>
import "@/assets/auth/css/styles.css"
import { useProfiles } from '@/composables/useProfiles.js';

import { formatMoney } from "@/utils/formatMoney.js"

import user_icon from '@/assets/profiles/img/user_icon.png'

import profile_1 from '@/assets/profiles/img/profile_1.png';
import profile_2 from '@/assets/profiles/img/profile_2.png';
import profile_3 from '@/assets/profiles/img/profile_3.png';

const { getUsersMe, connectToGame, alerts, isLoading } = useProfiles();

getUsersMe();

const profileMap = {
  0: profile_1,
  1: profile_2,
  2: profile_3
};
const socialID = "34512321";
const hours_in_game = 322;
</script>

<template>
  <div class="container-fluid" v-if="isLoading">
        <div class="row d-flex justify-content-end align-items-center" style="height: 90vh;">

            <div class="row d-flex justify-content-center align-items-center">

                <div class="col-3 profile-card shadow d-flex align-self-start" style="height: 25vh;">

                    <div class="col-12">
                        <div class="row d-flex justify-content-between">
                            <div class="col-2 p-2 top-card d-flex justify-content-center">
                                <img :src="user_icon" width="20" height="20">
                            </div>
                            <div class="col-10 top-content-card shadow-sm d-flex align-items-center ">
                                <h6 class="text-light " style="font-weight: 700;">ИНФОРМАЦИЯ</h6>
                            </div>
                        </div>

                        <div class="row m-1 mt-4 ">
                            <h4 class="text-white" style="font-weight: 700;">{{alerts.profiles.success[0].username}}</h4>


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

                <div class="col-3 profile-card profile-grad shadow" v-for="i in 3" :key="i">
                    <div class="profile-content">

                        <div  class="row d-flex justify-content-between">
                            <div class="col-2 p-2 top-card d-flex justify-content-center">
                                <img :src="user_icon" width="20" height="20">
                            </div>

                            <div class="col-10 top-content-card shadow-sm d-flex align-items-center mt-2">
                                <h6 v-if="alerts.profiles.success[i - 1]" class="text-light " style="font-weight: 700;">ПЕРСОНАЖ #{{i}}</h6>
                                <h6 v-else class="text-light" style="font-weight: 700;">СВОБОДНО</h6>
                            </div>


                        </div>

                        <div v-if="alerts.profiles.success[i - 1]"  class="row mt-4">
                            <h4 class="text-light" style="font-weight: 700;">{{alerts.profiles.success[i - 1].last_name.toUpperCase()}}</h4>
                            <h5 class="text-light" style="font-weight: 300;">{{alerts.profiles.success[i - 1].first_name.toUpperCase()}}</h5>
                        </div>

                        <div v-else class="row mt-4">
                            <h4 class="text-light" style="font-weight: 700;">СВОБОДНЫЙ</h4>
                            <h5 class="text-light" style="font-weight: 300;">СЛОТ</h5>
                        </div>


                        <div class="row d-flex justify-content-center mt-2">
                            <div class="col-12 d-flex justify-content-center"
                            :style="{
                                        height: '400px',
                                        backgroundImage: `url(${profileMap[i-1]})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }">
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-5">
                                            <div class="row d-flex align-self-start">

                                                <div v-if="alerts.profiles.success[i - 1]" class="row d-flex align-items-center justify-content-between">
                                                    <div class="col-5 text-start">
                                                        <h5 class="text-light" style="font-weight: 500;">LVL</h5>
                                                    </div>
                                                    <div class="col-7 text-end">
                                                        <h3 class="" style="font-weight: 700; color: #7369d6;">{{alerts.profiles.success[i - 1].lvl}}</h3>
                                                    </div>

                                                </div>

                                                <div v-if="alerts.profiles.success[i - 1]" class="row d-flex align-items-center justify-content-between">
                                                    <div class="col-5 text-start">
                                                        <h5 class="text-light" style="font-weight: 500;">EXP</h5>
                                                    </div>
                                                    <div class="col-7 text-end">
                                                        <h3 style="font-weight: 700; color: #7369d6;">{{alerts.profiles.success[i - 1].exp}}</h3>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                        <div v-if="alerts.profiles.success[i - 1]" class="col-7">

                                            <div class="row d-flex justify-content-end mt-4" style="min-width: 100%;">

                                                <div class="row d-flex justify-content-end">
                                                    <div class="col-12 text-end">
                                                        <h6 class="text-light" style="font-weight: 500;">НАЛИЧКА</h6>
                                                        <h6 class="" style="font-weight: 700; color: #7369d6;">{{formatMoney(alerts.profiles.success[i - 1].cash_money + 45580000)}}Р</h6>

                                                    </div>
                                                </div>

                                                <div class="row d-flex justify-content-end mt-2">
                                                    <div class="col-12 text-end ">
                                                        <h6 class="text-light" style="font-weight: 500;">СРЕДСТВА НА КАРТЕ</h6>
                                                        <h6 class="" style="font-weight: 700; color: #7369d6;">{{formatMoney(alerts.profiles.success[i - 1].credit_money)}}Р</h6>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>

                                        <div v-if="alerts.profiles.success[i - 1]" class="play-button mt-2 d-flex justify-content-center align-self-end">
                                            <button style=" height: 50px; font-size: 18px;" class="btn btn-grad m-2" v-on:click="connectToGame(alerts.profiles.success[i - 1])">НАЧАТЬ ИГРУ</button>
                                        </div>

                                        <div v-else class="play-button mt-2 d-flex justify-content-center align-self-end">
                                            <button style="height: 50px; font-size: 18px;" class="btn btn-grad m-2">СОЗДАТЬ ПЕРСОНАЖА</button>
                                        </div>

                                    </div>
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
