import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const email = ref('')
  const userId = ref('')

  function signOut() {
    email.value = ''
    userId.value = ''
  }

  function setEmail(e: string) {
    email.value = e
  }

  function setUserId(id: string) {
    userId.value = id
  }

  return {
    email: readonly(email),
    userId: readonly(userId),
    setEmail,
    setUserId,
    signOut
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
