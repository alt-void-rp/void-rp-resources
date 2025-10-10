let alt = window.alt;

if (!alt) {
  // Для разработки вне alt:V
  const eventHandlers = new Map(); // eventName → Set(callbacks)

  alt = {
    /**
     * Регистрирует обработчик события
     * @param {string} eventName
     * @param {Function} callback
     */
    on(eventName, callback) {
      console.log(`[MOCK on] ${eventName}`);
      if (!eventHandlers.has(eventName)) {
        eventHandlers.set(eventName, new Set());
      }
      eventHandlers.get(eventName).add(callback);
    },

    /**
     * Отправляет событие
     * @param {string} eventName
     * @param {...any} args
     */
    emit(eventName, ...args) {
      console.log(`[MOCK emit] ${eventName}`, args);
      if (eventHandlers.has(eventName)) {
        eventHandlers.get(eventName).forEach(callback => {
          try {
            callback(...args);
          } catch (err) {
            console.error(`[MOCK] Error in handler for ${eventName}:`, err);
          }
        });
      }
    }
  };
}

export default alt;
