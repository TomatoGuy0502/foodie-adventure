import { getCurrentUser } from 'aws-amplify/auth'
import { Amplify } from 'aws-amplify'
import outputs from '~/amplify_outputs.json'

Amplify.configure(outputs)

export default defineNuxtRouteMiddleware(async () => {
  const userStore = useUserStore()
  const { getUserIdByEmail } = useAmplify()

  try {
    const user = await getCurrentUser()
    if (!userStore.email)
      userStore.setEmail(user.signInDetails!.loginId!)
    if (!userStore.userId) {
      const userId = await getUserIdByEmail(user.signInDetails!.loginId!)
      userStore.setUserId(userId)
    }
  }
  catch (e) {
    return navigateTo('/user')
  }
})
