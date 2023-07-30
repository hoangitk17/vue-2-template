/**
 * @param {Error} error
 * @param {Vue} context
 */
function handleError(error) {
  console.log(error);
}

export default {
  install(Vue) {
    Vue.prototype.$handleError = handleError;
  },
};
