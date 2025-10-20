<script setup>
import { ref, computed } from "vue";
import { useCharacterEditor } from "@/composables/useCharacterEditor";

const { selectPoseCamera } = useCharacterEditor();

import "@/assets/character-editor/css/styles.css"

import CreateCharacter from "@/components/CharacterEditor/CreateCharacter.vue";
import faceImg from '@/assets/character-editor/img/face.png'
import manImg from '@/assets/character-editor/img/man.png'
import sideImg from '@/assets/character-editor/img/side.png'
const step = ref(0);

const pages = {
  0: CreateCharacter,
};

const currentComponent = computed(() => {
  return pages[step.value] || CreateCharacter; // fallback на случай, если step вне диапазона
});

</script>

<template>
  <div class="container-fluid text-center " style="height: 100vh;">
    <div class="row d-flex justify-content-center" style="width: 100%; height: 6.3vh;">
    </div>

    <div class="row d-flex justify-content-between" style="width: 100%; height: 85vh;">
      <div class="col-4 text-start">
        <component :is="currentComponent" />


        <div class="row d-flex justify-content-center text-center mt-2">
          <div class="col-4">
            <button
              v-if="step > 0"
              @click="step--"
              class="btn btn-grad-ce me-2"
              style="width: 100%;"
              >Назад
            </button>

            <button
            v-else
              class="btn btn-grad-ce noactive me-2"
              style="width: 100%;"
              >Назад
            </button>

          </div>
          <div class="col-4 d-flex justify-content-center">
              <div class="col-4">
                <h5
                  v-text="`0` + (step + 1)"
                  class="mt-2"
                  style="font-weight: 600; color: #e6a10f;"
                ></h5>
              </div>
              <div class="col-4">
                <h5
                class="mt-2 text-light"
                style="font-weight: 600;"
                >/
                </h5>
              </div>
              <div class="col-4 ">
                  <h5
                  class="mt-2 text-light"
                  v-text="`0` + Object.keys(pages).length"
                  style="font-weight: 600;"
                  >
                </h5>
              </div>

          </div>
          <div class="col-4">
            <button
              v-if="step < Object.keys(pages).length - 1"
              @click="step++"
              class="btn btn-grad-ce"
              style="width: 100%; border-radius: 5px;"
              >Далее
            </button>

            <button
              v-else
              class="btn btn-grad-ce noactive"
              style="width: 100%; border-radius: 5px;"
              >Далее
            </button>
          </div>
        </div>
      </div>

      <div class="col-4">

      </div>

    </div>

    <div class="row d-flex justify-content-center" style="width: 100%; height: 6.3vh;">
      <div class="col-1 d-flex justify-content-end">
        <div class="btn cam-control  d-flex align-items-center shadow"
        v-on:click="selectPoseCamera(`face`)"
        >
          <img :src="faceImg"
          width="25px">
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center">
        <div class="btn cam-control text-center d-flex align-items-center shadow"
        v-on:click="selectPoseCamera(`full-body`)"
        >
          <img :src="manImg"
          width="25px">
        </div>
      </div>
      <div class="col-1 d-flex justify-content-start">
        <div class="btn cam-control text-center d-flex align-items-center shadow"
        v-on:click="selectPoseCamera(`side`)"
        >
          <img :src="sideImg"
          width="25px">
        </div>
      </div>
    </div>

  </div>
</template>
