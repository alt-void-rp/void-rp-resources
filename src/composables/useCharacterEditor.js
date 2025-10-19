import { reactive, onMounted, computed } from 'vue';
import alt from '@/services/altv.js';
import { CHARACTER_E_EVENTS } from '@/shared/constants.js';


const PARENTS = {
  dads: {
    0: "Adrian",
    1: "Alex",
    2: "Andrew",
    3: "Angel",
    4: "Anthony",
    5: "Benjamin",
    6: "Claude",
    7: "Daniel",
    8: "Diego",
    9: "Ethan",
    10: "Evan",
    11: "Gabriel",
    12: "Isaac",
    13: "John",
    14: "Joshua",
    15: "Juan",
    16: "Kevin",
    17: "Louis",
    18: "Michael",
    19: "Niko",
    20: "Noah",
    21: "Samuel",
    22: "Santiago",
    23: "Vincent"
  },
  moms: {
    0: "Amelia",
    1: "Ashley",
    2: "Audrey",
    3: "Ava",
    4: "Brianna",
    5: "Camila",
    6: "Charlotte",
    7: "Elizabeth",
    8: "Emma",
    9: "Evelyn",
    10: "Giselle",
    11: "Grace",
    12: "Hannah",
    13: "Isabella",
    14: "Jasmine",
    15: "Misty",
    16: "Natalie",
    17: "Nicole",
    18: "Olivia",
    19: "Sophia",
    20: "Violet",
    21: "Zoe"
  }
};

export function useCharacterEditor(){
  const alerts = reactive({
    parents: PARENTS,
    mom: 5,
    dad: 10,
    shapeMix: 0.5,
    skinMix: 0.5
    //dad, mom, shapeMix, skinMix
  });

  const characterParents = computed(() => ({
    dad: alerts.dad,
    mom: alerts.mom,
    shapeMix: alerts.shapeMix,
    skinMix: alerts.skinMix
  }));

  const selectPedParents = () => {
    const payload = characterParents.value;
    alt.emit(CHARACTER_E_EVENTS.CLIENT.CHARACTER_SET_PARENTS, JSON.stringify(payload));
  };

  const selectGender = (gender) => {
    alt.emit(CHARACTER_E_EVENTS.CLIENT.CHARACTER_SET_MODEL, JSON.stringify({ gender: gender }));
    selectPedParents();
  };

  const selectPoseCamera = (pose) => {
    alt.emit(CHARACTER_E_EVENTS.CLIENT.CHARACTER_CAMERA_POSE, JSON.stringify({ gender: pose }));
  };

  const onShapeMixChange = () => {
    selectPedParents();
  }

  selectPedParents();

  const nextDad = () => {
    alerts.dad += 1;
    selectPedParents();
  };

  const backDad = () => {
    alerts.dad -= 1;
    selectPedParents();
  };

  const nextMom = () => {
    alerts.mom += 1;
    selectPedParents();
  };

  const backMom = () => {
    alerts.mom -= 1;
    selectPedParents();
  };


  onMounted(() => {
    alt.on(CHARACTER_E_EVENTS.CLIENT.CHARACTER_SET_MODEL, () => {
    });

  });

  return {
    alerts,

    selectGender,
    selectPoseCamera,
    nextDad,
    backDad,
    nextMom,
    backMom,
    onShapeMixChange
  }
}
