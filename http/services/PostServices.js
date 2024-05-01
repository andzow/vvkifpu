import $api from "..";

export default class PostService {
    static async createPost(FormObject) {
        return $api.post('/api/post/create', FormObject)
    }

    static async getPostAll(query) {
        return $api.get('/api/post', {
            params: query
        })
    }

    static async getPostThree() {
        return $api.get('/api/post/three')
    }

    static async getPostNews(query) {
        return $api.get('/api/post/news', {
            params: query
        })
    }

    static async getPostCommunity(query) {
        return $api.get('/api/post/community', {
            params: query
        })
    }

    static async deletePost(id) {
        return $api.delete('/api/post/delete', { data: { id } })
    }

    static async updatePost(dataObject) {
        return $api.put('/api/post/update', dataObject)
    }

    static async fetchPostOne (name) {
        return $api.get('/api/post/' + name)
    }
}