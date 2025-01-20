import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token'),
        error: null
    }),
    
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    
    actions: {
        async login(credentials) {
            try {
                this.error = null
                const response = await axios.post('login', credentials)
                this.token = response.data.token
                this.user = response.data.user
                localStorage.setItem('token', this.token)
                
                // Set the bearer token for all subsequent requests
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
                
                return response
            } catch (error) {
                this.error = error.response?.data?.message || 'Authentication failed'
                throw error
            }
        },
        
        async logout() {
            try {
                await axios.post('/api/logout')
                this.token = null
                this.user = null
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
            } catch (error) {
                throw error
            }
        },
        
        async getUser() {
            try {
                const response = await axios.get('/api/user')
                this.user = response.data
                return response
            } catch (error) {
                throw error
            }
        }
    }
}) 