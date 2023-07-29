import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { MainRoutes } from './main'
import { SignInRoutes } from './sign-up'
import { AuthProvider } from '../../contexts/AuthContext'

export const RoutesConfig = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AdminRoutes />
                <MainRoutes />
                <SignInRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}
