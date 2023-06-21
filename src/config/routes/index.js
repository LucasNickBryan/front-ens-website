import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin'
import { MainRoutes } from './main'
import { SignInRoutes } from './sign-up'

export const RoutesConfig = () => {
    return (
        <BrowserRouter>
            <AdminRoutes />
            <MainRoutes />
            <SignInRoutes />
        </BrowserRouter>
    )
}
