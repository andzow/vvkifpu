import $api from "..";

export default class PostService {
    static async createPost(FormObject) {
        return $api.post('/post/create', FormObject)
    }

    static async getPostAll(query) {
        return $api.get('/post', {
            params: query
        })
    }

    static async getPostThree() {
        return $api.get('/post/three')
    }

    static async getPostNews(query) {
        return $api.get('/post/news', {
            params: query
        })
    }

    static async getPostCommunity(query) {
        return $api.get('/post/community', {
            params: query
        })
    }

    static async deletePost(id) {
        return $api.delete('/post/delete', { data: { id } })
    }

    static async updatePost(dataObject) {
        return $api.put('/post/update', dataObject)
    }

    static async fetchPostOne (name) {
        return $api.get('/post/' + name)
    }
}