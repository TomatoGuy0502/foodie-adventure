<script setup lang="ts">
import '@aws-amplify/ui-vue/styles.css'
import { Amplify } from 'aws-amplify'
import outputs from './amplify_outputs.json'
import { appName } from '~/constants'

Amplify.configure(outputs)

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body {
  height: 100dvh;
  margin: 0;
  padding: 0;
  background-color: #ddd;
}

#__nuxt {
  max-width: 450px;
  @apply bg-gray-50 relative p-0 m-auto h-100dvh;
}
</style>
