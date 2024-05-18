import { getCurrentUser } from 'aws-amplify/auth'
import { Amplify } from 'aws-amplify'
import outputs from '~/amplify_outputs.json'

Amplify.configure(outputs)

export default defineNuxtRouteMiddleware(async () => {
  const userStore = useUserStore()

  try {
    const user = await getCurrentUser()
    if (!userStore.email)
      userStore.setEmail(user.signInDetails!.loginId!)
  }
  catch (e) {
    return navigateTo('/user')
  }
})
