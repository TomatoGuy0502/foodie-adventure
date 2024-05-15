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

[data-amplify-authenticator] {
  height: 100%;
  --amplify-components-authenticator-container-width-max: 100%;
  --amplify-components-authenticator-router-border-width: 0;
  --amplify-components-tabs-border-width: 4px;
  --amplify-components-tabs-item-border-width: 4px;
}

@keyframes bounce-x {
  0%,
  100% {
    transform: translateX(0%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(15%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
