import $api from "..";

export default class AuthServices {
    static async login(login, password) {
        return $api.post('/api/auth/login', { login, password })
    }

    static async registration(login, password) {
        return $api.post('/api/auth/registration', { login, password })
    }

    static async logout() {
        return $api.post('/api/logout')
    }
}