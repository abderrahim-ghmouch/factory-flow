
import {
    createContext,
    useState
} from "react";

import * as authService from "../services/auth"

export const AuthContext = createContext(null)

export function AuthProvider({ children })
{
    const [user, setUser] = useState(() => {
        const saved = sessionStorage.getItem("user")
        return saved ? JSON.parse(saved) : null
    })

    const login = async (email, password) => {

        const data = await authService.login(email, password)
        sessionStorage.setItem("token", data.token)

        sessionStorage.setItem("user", JSON.stringify(data.info_user))
        setUser(data.info_user)
        return data.info_user
    }

const logout= async () => {
        try {
            await authService.logout()
        } catch {
        }
        sessionStorage.clear()
        setUser(null)
    }

    return (< AuthContext.Provider value={{ user, login, logout }}>{children} </AuthContext.Provider>
        
    )
}