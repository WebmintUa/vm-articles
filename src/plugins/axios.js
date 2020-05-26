import AxiosClient from './AxiosClient';

const client = new AxiosClient();
const axiosPlugin = {
  // eslint-disable-next-line no-shadow
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Object.defineProperty(Vue.prototype, '$axios', {
      get() {
        return client;
      },
    });
  },
};

export default axiosPlugin;
