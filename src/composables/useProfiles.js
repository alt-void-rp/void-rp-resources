import { ref, reactive, onMounted } from 'vue';
import alt from '@/services/altv.js';
import { AUTH_EVENTS } from '@/shared/constants.js';

export function useProfiles(){
  const isLoading = ref(false);

  const alerts = reactive({
    profiles: { success: null, error: null}
  });

  const clearAlerts = () => {
    alerts.profiles.success = null;
    alerts.profiles.error = null;
  };

  const getUsersMe = () => {
    alt.emit(AUTH_EVENTS.CLIENT.GET_USERS_ME, {});
  };

  const connectToGame = (data) => {
    alt.emit(AUTH_EVENTS.CLIENT.CONNECT_TO_GAME, data);
  };

  const createNewPerson = () => {
    alt.emit(AUTH_EVENTS.CLIENT.CREATE_PERSON);
  };

  onMounted(() => {
    alt.on(AUTH_EVENTS.SERVER.GET_USERS_ME_SUCCESS, (data) => {
      clearAlerts();
      alerts.profiles.success = data;
      isLoading.value = true;
    });

    alt.on(AUTH_EVENTS.SERVER.GET_USERS_ME_FAIL, (data) => {
      alerts.profiles.error = data;
      isLoading.value = false;
    });
  });


  return {
    isLoading,

    alerts,

    getUsersMe,
    connectToGame,
    createNewPerson
  }
}
