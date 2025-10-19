<script setup>
import { ref } from 'vue';
import "@/assets/character-editor/css/styles.css"

import { useCharacterEditor } from "@/composables/useCharacterEditor";

const { selectGender, nextDad, backDad, backMom, nextMom, onShapeMixChange, alerts } = useCharacterEditor();

import manImg from '@/assets/character-editor/img/man.png'
import womanImg from '@/assets/character-editor/img/woman.png'

import nextArw from '@/assets/character-editor/img/next_arrow.png'
import backArw from '@/assets/character-editor/img/back_arrow.png'

const selectedGender = ref("man")

function selectGenderUI(gender) {
  selectedGender.value = gender
}

</script>

<template>
  <div class="container-fluid text-center d-flex align-items-center" style="height: 100vh;">
    <!--button class="btn btn-back" v-on:click="selectGender('mp_m_freemode_01');">male</button>
    <button class="btn btn-back" v-on:click="selectGender('mp_f_freemode_01');">female</button>
    <button class="btn btn-back" v-on:click="selectPoseCamera('side');">side</button>
    <button class="btn btn-back" v-on:click="selectPoseCamera('face');">face</button>
    <button class="btn btn-back" v-on:click="selectPoseCamera('full-body');">full-body</button--->

      <div class="row d-flex justify-content-between" style="width: 100%;">
        <div class="col-4 text-start">
          <div class="preview-text text-light text-start">
            <h1>СОЗДАНИЕ</h1>
            <h1>ПЕРСОНАЖА</h1>
            <h6 >Добро пожаловать в редактор персонажа</h6>
            <h4>Основные</h4>
          </div>


          <div class="forms">
            <div class="mt-2">
              <h6 class="text-light">Имя персонажа</h6>
              <input type="first_name" id="first_name_field" class="form-control form-control-ce text-light" placeholder="Олег" />
            </div>

            <div class="mt-2">
              <h6 class="text-light">Фамилия персонажа</h6>
              <input type="last_name" id="last_name_field" class="form-control form-control-ce text-light" placeholder="Нечипоренко" />
            </div>

            <div class="mt-2">
              <h6 class="text-light">Твой возраст</h6>
              <input type="age" id="age_field" class="form-control form-control-ce text-light" placeholder="23" />
            </div>

          </div>

          <div class="row gender-forms mt-2">
            <h6 class="text-light">Твой пол</h6>
            <div class="col-6">
              <div class="row d-flex align-items-center">
                <div class="col-6">
                  <h6 class="text-light mt-2">Парень</h6>
                </div>
                <div class="col-6">
                  <img
                    :src="manImg"
                    alt="Мужской персонаж"
                    class="gender-img p-2"
                    :class="{ selected: selectedGender === 'man' }"
                    @click="selectGenderUI('man');selectGender('mp_m_freemode_01');"
                  />
                </div>
              </div>
            </div>
            <div class="col-6 ">
              <div class="row d-flex align-items-center justify-content-end">
                <div class="col-6">
                    <img
                    :src="womanImg"
                    alt="Женский персонаж"
                    class="gender-img p-2"
                    :class="{ selected: selectedGender === 'woman' }"
                    @click="selectGenderUI('woman');selectGender('mp_f_freemode_01');"
                  />
                </div>
                <div class="col-6">
                  <h6 class="text-light mt-2">Девушка</h6>
                </div>
              </div>

            </div>
          </div>

          <h6 class="text-light mt-2">Выбор родителей</h6>
          <div class="row mt-2 parent-block m-1 d-flex justify-content-center">
              <div class="col-3 d-flex justify-content-center" >
                <img
                  class="p-2 "
                  style="width: 80px; border-radius: 16px;"
                  :src="`/character-editor/img/parents/dad/${alerts.parents.dads[alerts.dad]}.webp`"
                  :alt="alerts.dad"
                />
              </div>
              <div class="col-9 d-flex align-items-center justify-content-center">
                  <div class="col-3 text-center" v-if="alerts.dad > 0">
                    <img class="arrow-btn"
                     style="width: 16px;"
                    :src="backArw"
                    v-on:click="backDad()"
                    >
                  </div>
                  <div class="col-6 text-center">
                    <h6
                    style="font-size: 10px;"
                    class="text-secondary"
                    >Выбор отца</h6>
                    <h5 class="text-light" v-text="alerts.parents.dads[alerts.dad]"></h5>
                  </div>
                  <div class="col-3 text-center">
                    <img class="arrow-btn" style="width: 16px;"
                    :src="nextArw"
                    v-if="alerts.dad < 23"
                    v-on:click="nextDad()"
                    >
                  </div>
              </div>
          </div>

          <div class="row mt-2 parent-block m-1 d-flex justify-content-center">
              <div class="col-3 d-flex justify-content-center" >
                <img
                  class="p-2 "
                  style="width: 80px; border-radius: 16px;"
                  :src="`/character-editor/img/parents/mom/${alerts.parents.moms[alerts.mom]}.webp`"
                  :alt="alerts.mom"
                />
              </div>
              <div class="col-9 d-flex align-items-center justify-content-center">
                  <div class="col-3 text-center" v-if="alerts.mom > 0">
                    <img class="arrow-btn"
                     style="width: 16px;"
                    :src="backArw"
                    v-on:click="backMom()"
                    >
                  </div>
                  <div class="col-6 text-center">
                    <h6
                    style="font-size: 10px;"
                    class="text-secondary"
                    >Выбор матери</h6>
                    <h5 class="text-light" v-text="alerts.parents.moms[alerts.mom]"></h5>
                  </div>
                  <div class="col-3 text-center">
                    <img class="arrow-btn" style="width: 16px;"
                    :src="nextArw"
                    v-if="alerts.mom < 21"
                    v-on:click="nextMom()"
                    >
                  </div>
              </div>
          </div>

          <h6 class="text-light mt-2">Смешивание параметров тела: {{ alerts.shapeMix.toFixed(1) }}</h6>

          <div class="row d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <div class="slider-wrapper">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  v-model.number="alerts.shapeMix"
                  @input="onShapeMixChange"
                  class="slider"
                  :style="{ '--value': alerts.shapeMix, '--max': 1 }"
                />
              </div>
            </div>

          </div>

          <h6 class="text-light mt-2">Смешивание цвета кожи: {{ alerts.skinMix.toFixed(1) }}</h6>

          <div class="row d-flex justify-content-center">
            <div class="col-12 d-flex justify-content-center">
              <div class="slider-wrapper">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  v-model.number="alerts.skinMix"
                  @input="onShapeMixChange"
                  class="slider"
                  :style="{ '--value': alerts.skinMix, '--max': 1 }"
                />
              </div>
            </div>

          </div>


        </div>

        <div class="col-4">
        </div>
      </div>

  </div>
</template>
