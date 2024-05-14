import { Amplify } from 'aws-amplify'
import { useAuthenticator } from '@aws-amplify/ui-vue'
import outputs from '~/amplify_outputs.json'

const router = useRouter()
Amplify.configure(outputs)
let auth: any = null

export function useAmplify () {
  function setupAuth() {
    auth = useAuthenticator()
    watchEffect(() => {
      if (auth.route !== 'authenticated')
        router.push('/auth')
    })
  }
  function signOut() {
    if (!auth) return
    auth.signOut()
  }

  return {
    setupAuth,
    signOut
  }
}