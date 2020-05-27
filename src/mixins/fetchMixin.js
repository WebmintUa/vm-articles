import AxiosClient from '@/plugins/AxiosClient';

const client = new AxiosClient();

export default {
  computed: {
    $articlesAxios() {
      return client;
    },
  },
};
