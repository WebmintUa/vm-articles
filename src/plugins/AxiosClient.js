import axios from 'axios';

export default class AxiosClient {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://jsonplaceholder.typicode.com/',
    });
  }

  async fetchPosts() {
    try {
      return await this.client.get('posts');
    } catch {
      return new Error();
    }
  }

  async fetchPost(id) {
    try {
      return await this.client.get(`posts/${id}`);
    } catch {
      return new Error();
    }
  }
}
