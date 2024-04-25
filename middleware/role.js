import { jwtDecode } from "jwt-decode";
import AuthController from "@/http/controllers/AuthController"

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.client) {
        const auth = await AuthController.cheackAuth()
        const data = jwtDecode(localStorage.getItem("accessToken"))
        if (auth === 401 || data.roles.some(item => item !== "ADMIN")) {
            return navigateTo('/')
        }
    }
})