<script setup lang="ts">
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue'

const { locale, setLocale, localeCodes } = useI18n()

const displayLocale: Record<string, string> = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
}

const auth = useAuthenticator()
const userStore = useUserStore()

function signOut() {
  userStore.signOut()
  auth.signOut()
}
</script>

<template>
  <div class="bg h-full flex flex-col gap-4 p-4 pb-24">
    <Authenticator initial-state="signUp" :social-providers="['google']" />
    <template v-if="auth.route === 'authenticated'">
      <h1 class="text-center text-2xl text-white font-bold">
        {{ $t('user') }}
      </h1>
      <div class="h-40 flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow">
        <nuxt-img src="/avatar-placeholder.png" class="min-h-0 flex-1" />
        <p class="shrink-0 text-neutral-800">
          {{ auth.user.signInDetails.loginId }}
        </p>
      </div>
      <ul class="flex flex-col gap-2">
        <Drawer>
          <template #button="{ openModal }">
            <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10" @click="openModal">
              <div class="i-tabler-language-hiragana text-secondary" />
              {{ $t('language') }}
            </li>
          </template>
          <template #title>
            <h3 class="text-xl font-bold">
              {{ $t('language') }}
            </h3>
          </template>
          <template #body>
            <ul class="flex flex-col gap-2">
              <li v-for="code in localeCodes" :key="code">
                <button class="w-full rounded p-4 text-center" :class="{ 'bg-success': locale === code }" @click="setLocale(code)">
                  {{ displayLocale[code] }}
                </button>
              </li>
            </ul>
          </template>
        </Drawer>
        <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10">
          <div class="i-tabler-bell text-secondary" />
          {{ $t('notification') }}
        </li>
        <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10">
          <div class="i-tabler-question-circle text-secondary" />
          {{ $t('help') }}
        </li>
        <li class="w-full flex cursor-pointer items-center gap-4 rounded-xl bg-white p-3 px-4 text-neutral-900 shadow hover:bg-primary/10" @click="signOut">
          <div class="i-tabler-logout text-secondary" />
          {{ $t('logout') }}
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
