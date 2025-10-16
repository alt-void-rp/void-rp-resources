<script setup>
import "@/assets/auth/css/styles.css"
import { useCharacterEditor } from "@/composables/useCharacterEditor";

const { selectGender } = useCharacterEditor();


</script>

<template>
  <div class="container-fluid">
    <h5 class="text-light">asdsadsa</h5>
    <button v-on:click="selectGender('mp_m_freemode_01');">male</button>
    <button v-on:click="selectGender('mp_f_freemode_01 ');">female</button>
  </div>
</template>
