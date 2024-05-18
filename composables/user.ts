import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const { getUserIdByEmail, checkUserTodayCheckIn } = useAmplify()
  const email = ref('')
  const userId = ref('')
  const isUserCheckedIn = ref(false)
  const hasCheckUserCheckIn = ref(false)

  function signOut() {
    email.value = ''
    userId.value = ''
  }

  watchEffect(async () => {
    if (email.value && !userId.value)
      userId.value = await getUserIdByEmail(email.value)
  })

  watchEffect(async () => {
    if (userId.value && !hasCheckUserCheckIn.value) {
      isUserCheckedIn.value = await checkUserTodayCheckIn(userId.value)
      hasCheckUserCheckIn.value = true
    }
  })

  function setEmail(e: string) {
    email.value = e
  }

  function setUserId(id: string) {
    userId.value = id
  }

  return {
    email: readonly(email),
    userId: readonly(userId),
    hasCheckUserCheckIn: readonly(hasCheckUserCheckIn),
    isUserCheckedIn: readonly(isUserCheckedIn),
    setEmail,
    setUserId,
    signOut,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
