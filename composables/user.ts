import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const email = ref('')

  function setEmail(e: string) {
    email.value = e
  }

  return {
    email: readonly(email),
    setEmail,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
