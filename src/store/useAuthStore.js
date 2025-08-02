import { create } from 'zustand'
import axiosInstance from '../utils/axiosInstance';

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  authMessage: '',

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/user/check");
      set({ authUser: res.data, authMessage: '' });
    } catch (error) {
      set({ 
        authMessage: error.response?.data?.message || error.message || 'An unexpected error occurred during authentication check.',
        authUser: null 
      });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true, authError: '' });
    try {
      const res = await axiosInstance.post("/user/signup", data);
      set({ authUser: res.data, authMessage: res.data });
      
    } catch (error) {
      set({ 
        authMessage: error.response?.data?.message || error.message || 'An unexpected error occurred during signup.' 
      });
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true, authMessage: '' });
    try {
      const res = await axiosInstance.post("/user/signin", data);
      set({ authUser: res.data, authMessage: '' });
    } catch (error) {
      set({
        authMessage: error.response?.data?.message || error.message || 'An unexpected error occurred during login.'
      });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/user/logout");
      set({ authUser: null, authMessage: '' });
    } catch (error) {
      set({
        authMessage: error.response?.data?.message || error.message || 'An unexpected error occurred during logout.'
      });
    }
  },

  resetAuthError: () => set({ authMessage: '' }),
}));