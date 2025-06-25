import { NextResponse, NextRequest } from 'next/server'
import { auth } from './auth'


const authMiddleware = auth((req) => {
    const { nextUrl } = req
    const isLogged = !!req.auth

    // Define which routes require authentication
    const protectedRoutes = ['/dashboard']
    const isProtectedRoute = protectedRoutes.some(route => 
        nextUrl.pathname.startsWith(route)
    )

    if(nextUrl.pathname.startsWith("/api/auth")) {
        return
    }
    
    // Redirect unauthenticated users trying to access protected routes
    if (!isLogged && isProtectedRoute) {
        return NextResponse.redirect(new URL('/signin', nextUrl))
    }
    
    // Redirect authenticated users away from login/register pages
    const authPages = ['/', '/signup', '/signin']
    const isAuthPage = authPages.includes(nextUrl.pathname)
    
    if (isLogged && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', nextUrl))
    }
    
    return NextResponse.next()
})

export default authMiddleware

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}