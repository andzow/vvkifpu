import PostService from "../services/PostServices";

export default class PostController {
  static async createPost(FormObject) {
    try {
      const response = await PostService.createPost(FormObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async getPostAll(query) {
    try {
      const response = await PostService.getPostAll(query);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async getPostThree() {
    try {
      const response = await PostService.getPostThree();
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async getPostNews(query) {
    try {
      const response = await PostService.getPostNews(query);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async getPostCommunity(query) {
    try {
      const obj = { name: query };
      const response = await PostService.getPostCommunity(obj);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async deletePost(id) {
    try {
      const response = await PostService.deletePost(id);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async updatePost(dataObject) {
    try {
      const response = await PostService.updatePost(dataObject);
      return response.status;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }

  static async fetchPostOne(name) {
    try {
      const response = await PostService.fetchPostOne(name);
      return response.data;
    } catch (e) {
      console.log(e.response?.data?.message);
      return e.response.status;
    }
  }
}
