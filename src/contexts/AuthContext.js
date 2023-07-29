import { createContext, useState } from "react";
import AuthServices from "../services/Auth.services";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [isLoggedUser, setIsLoggedUser] = useState(false)
    let service = AuthServices

    const signin = (data) => {

        if (!isLoggedUser) {
            service.signin(data)
                .then((res) => {
                    console.log("TOKEN ", res.data);
                    // localStorage.setItem("access_token", res.data);
                    setIsLoggedUser(true)
                },
                    err => {
                        console.log("ERROR ", err.message);
                    }
                )
        }
    }

    return (
        <AuthContext.Provider value={{ isLoggedUser, signin }}>
            {children}
        </AuthContext.Provider>
    )
}