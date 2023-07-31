import React from 'react'
import AuthPage from './components/auth'
import { UserProvider } from '../../contexts/UserContext'

export const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g ;

export default function SignIn() {
    return (
        <UserProvider>
            <AuthPage/>
        </UserProvider>
    )
}
