<script setup lang="ts">
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue'

// const auth = useAuthenticator()
// const router = useRouter()

// watchEffect(() => {
//   if (auth.route === 'authenticated')
//     router.push('/')
// })
</script>

<template>
  <div class="h-full flex flex-col gap-4 p-4 pb-24">
    <Authenticator initial-state="signUp" :social-providers="['google']">
      <template #default="{ user, signOut }">
        <h1>信箱: {{ user.signInDetails.loginId }}</h1>
        <button class="btn" @click="signOut">
          登出
        </button>
      </template>
    </Authenticator>
  </div>
</template>

<style>
[data-amplify-authenticator] {
  height: 100%;
  --amplify-components-authenticator-container-width-max: 100%;
  --amplify-components-authenticator-router-border-width: 0;
  --amplify-components-tabs-border-width: 4px;
  --amplify-components-tabs-item-border-width: 4px;
}
</style>
