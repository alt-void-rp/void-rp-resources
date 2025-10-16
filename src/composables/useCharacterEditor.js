import { reactive, onMounted } from 'vue';
import alt from '@/services/altv.js';
import { CHARACTER_E_EVENTS } from '@/shared/constants.js';

export function useCharacterEditor(){
  const alerts = reactive({
    data: null
  });

  const selectGender = (gender) => {
    alt.emit(CHARACTER_E_EVENTS.CLIENT.CHARACTER_SET_MODEL, JSON.stringify({ gender: gender }));
  };

  onMounted(() => {
    alt.on(CHARACTER_E_EVENTS.CLIENT.CHARACTER_SET_MODEL, () => {
    });

  });

  return {
    alerts,

    selectGender
  }
}
