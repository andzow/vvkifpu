import $api from "..";

export default class ApplicationService {
    static async createApplication(FormObject) {
        return $api.post('/api/application', FormObject)
    }

    static async findApplication(query) {
        return $api.get('/api/application', {
            params: query
        })
    }

    static async updateApplication(dataObject) {
        return $api.put('/api/application/update', dataObject)
    }

    static async deleteApplication(id) {
        return $api.delete('/api/application/delete', { data: { id } })
    }

    static async deleteAllApplication() {
        return $api.delete('/api/application/deleteAll')
    }
}