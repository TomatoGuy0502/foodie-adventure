<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const messageInput = ref('')

const conversations = ref([
  { from: 'bot', text: '哈囉！有什麼想要問我的嗎？' },
  { from: 'user', text: '不知道午餐想吃什麼，能夠提供我一些選擇嗎？' },
  { from: 'bot', text: '好的，為你搜尋了附近的餐廳，有：鍋物-12MINI、日式料理-藝奇、中式料理-享鴨，是否符合你的需求呢？' },
])

function sendMessage() {
  if (!messageInput.value) return
  conversations.value.push({ from: 'user', text: messageInput.value })
  messageInput.value = ''
}

function clearChat() {
  conversations.value.length = 1
}
</script>

<template>
  <div class="relative h-full p-4 pb-24">
    <div class="absolute inset-x-4 top-4 flex gap-4">
      <Drawer>
        <template #button="{ openModal }">
          <button class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow" @click="openModal">
            <div class="i-tabler-shirt text-xl" />
            <p class="font-bold">
              裝扮
            </p>
          </button>
        </template>
        <template #title>
          <h3 class="text-xl font-bold">
            裝扮
          </h3>
        </template>
        <template #body>
          <div class="grid grid-cols-4 gap-4">
            <div v-for="i in 16" :key="i" class="aspect-ratio-square rounded bg-neutral-100" />
          </div>
        </template>
      </Drawer>
      <Drawer>
        <template #button="{ openModal }">
          <button class="flex flex-1 justify-center gap-2 rounded-full bg-accent p-3 px-4 text-white shadow" @click="openModal">
            <div class="i-tabler-message-circle text-xl" />
            <p class="font-bold">
              聊天
            </p>
          </button>
        </template>
        <template #title>
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold">
              聊天
            </h3>
            <button class="flex items-center text-neutral-600 text-sm p-1 gap-1" @click="clearChat">
              開始新的聊天
              <div class="i-tabler-message-2-bolt" />
            </button>
          </div>
        </template>
        <template #body>
          <div class="flex flex-col h-120">
            <div class="flex flex-col flex-1 gap-2 items-start">
              <p
                v-for="c in conversations" :key="c.text"
                class="chat-bubble"
                :class="c.from === 'bot' ? 'bg-neutral-100' : 'bg-primary-100 ml-auto'"
              >
                {{ c.text }}
              </p>
            </div>
            <div class="shrink-0 border rounded px-4 py-2 flex items-center">
              <input v-model="messageInput" type="text" class="w-full resize-none" @keypress.enter.exact="sendMessage">
              <div class="i-tabler-send-2 shrink-0 text-success w-6 h-6 p-1 cursor-pointer" @click="sendMessage" />
            </div>
          </div>
        </template>
      </Drawer>
    </div>
  </div>
</template>

<style scoped>
.chat-bubble {
  @apply max-w-9/10 rounded p-2 break-all;
}
</style>
