import { getCurrentUser } from 'aws-amplify/auth'
import { Amplify } from 'aws-amplify'
import outputs from '~/amplify_outputs.json'

Amplify.configure(outputs)

export default defineNuxtRouteMiddleware(async () => {
  try {
    await getCurrentUser()
  }
  catch (e) {
    return navigateTo('/user')
  }
})
