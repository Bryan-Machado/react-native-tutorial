import { create } from 'zustand'

const useUserStore = create((set) => ({
  users: [],

  setUsers: (newUsers) => set((state) => ({ users: newUsers })),
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser]})),
  updateUser: (editedUser) => set((state) => {
    const userFiltrado = state.user.filter(user => user.id === id)[0]
    return {users: userFiltrado}
  }),
  removeUser: (id) => set((state) => {
    const usersFilter = state.users.filter(user => user.id !== id)
    
    return {users: usersFilter} 
  })
}))

export default useUserStore

// state guarda o valor atual de todos os estadoss