import { useAuthStore } from '../stores/auth'

export default function auth(to, from, next) {
    const authStore = useAuthStore()
    
    if (!authStore.isAuthenticated) {
        next('/login')
    } else {
        next()
    }
} 