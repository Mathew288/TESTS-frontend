import axios from "axios";
import { ApiResponse } from "../Pages/dto/Login.dto";

// HandlerLogin.ts
interface LoginCredentials {
    email: string;
    password: string;
}

export async function loginUser(credentials: LoginCredentials): Promise<ApiResponse> {
    try {


        const baseUrl = import.meta.env.VITE_BACKEND_URL;
        const apiUrl = `${baseUrl}/auth/login`
        const body = {
            email: credentials.email,
            password: credentials.password

        };

        const response = await axios.post(apiUrl, body);
        return response.data;
    } catch (error) {
        console.warn(error);
        throw error;
    }

}
