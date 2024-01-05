import axios from "axios";
import { ApiResponse } from "../Pages/dto/Login.dto";

// HandlerLogin.ts
interface LoginCredentials {
    email: string;
    password: string;
}

export async function loginUser(credentials: LoginCredentials): Promise<ApiResponse> {
    try {


        const apiUrl = 'http://localhost:3000/auth/login';

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
