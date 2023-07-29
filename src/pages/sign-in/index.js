import React, { useContext, useEffect } from 'react'
import AuthPage from './components/auth'
import { UserProvider } from '../../contexts/UserContext'

export default function SignIn() {
    return (
        <UserProvider>
            <AuthPage/>
        </UserProvider>
    )
}
