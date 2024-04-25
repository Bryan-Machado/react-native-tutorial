import { create } from 'zustand'

const useUserLoggedStore = create((set) => ({
  nome: '',
  email: '',
  avatar: '',
  token: '',
  isLogged: false,

  login: (nome, email, avatar, token) => set((state) => ({ nome, email, avatar, token, isLogged: true })),
  logOut: () => set((state) => ({
        nome: '',
        email: '',
        avatar: '',
        token: '',
        isLogged: false,
    })),
}))

export default useUserLoggedStore

// state guarda o valor atual de todos os estadoss