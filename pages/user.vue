<script setup lang="ts">
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue'

const auth = useAuthenticator()
</script>

<template>
  <div class="bg h-full flex flex-col gap-4 p-4 pb-24">
    <Authenticator initial-state="signUp" :social-providers="['google']" />
    <template v-if="auth.route === 'authenticated'">
      <h1 class="text-center text-2xl text-white font-bold">
        用戶設定
      </h1>
      <div class="h-40 flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow">
        <nuxt-img src="/avatar-placeholder.png" class="min-h-0 flex-1" />
        <p class="shrink-0 text-neutral-800">
          {{ auth.user.signInDetails.loginId }}
        </p>
      </div>
      <ul class="flex flex-col gap-2">
        <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10">
          <div class="i-tabler-bell text-secondary" />
          通知
        </li>
        <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10">
          <div class="i-tabler-question-circle text-secondary" />
          幫助
        </li>
        <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10" @click="auth.signOut">
          <div class="i-tabler-logout text-secondary" />
          登出
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.bg {
  background: linear-gradient(to bottom, #826e4f 150px, #f5fafa 150px);
}
</style>
