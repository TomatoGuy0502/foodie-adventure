<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const conversationIndex = ref(0)

const conversation = [{
  story: '你聽說遠方有一個神秘的城鎮，據說那裡的美食無與倫比，能夠讓人品嚐到前所未有的美味。決心一探究竟，你踏上了前往那座城鎮的旅程。',
  options: ['你決定穿越一片古老的森林，探索其中的秘密', '你選擇跟隨一位傳說中的食物專家，尋找一個被遺忘的古老食譜', '你決定搭乘一艘小船，沿著一條神秘的河流前進，相信它會帶領你抵達目的地'],
}, {
  story: `你決定搭乘一艘小船，沿著一條神秘的河流前進。河水清澈見底，岸邊茂密的樹木投下陰影，使得整個旅程充滿了神秘感。你順著河流前進，不久後，小船進入了一個潛藏在樹叢中的幽暗洞穴`,
  options: ['你決定停下來，檢查洞穴內是否有什麼值得一探的秘密', '你選擇繼續前進，相信這條河流會帶領你通往美食城鎮', '你決定返回岸邊，尋找其他更安全的道路前進'],
}, {
  story: `你決定停下來，檢查洞穴內是否有什麼值得一探的秘密。你離開小船，踏入了洞穴深處。洞穴內一片漆黑，但你透過手中的火把照亮了前方。不久，你發現了一個被遺忘已久的古老寶藏，其中包含了許多神秘的寶物和一本古老的食譜`,
  options: ['你決定翻閱食譜，看看能否找到有關美食城鎮的線索', '你選擇收集寶藏，帶著它們繼續前進', '你決定離開洞穴，重新回到小船上，繼續沿著河流前進'],
}, {
  story: `你決定翻閱食譜，看看能否找到有關美食城鎮的線索。你打開古老的食譜，上面記載著各種稀有的食材和烹飪方法。翻閱著翻閱，你終於找到了一段有關美食城鎮的描述。你立即收拾好食譜和寶藏，回到小船上，繼續沿著河流前進。隨著日落的餘暉照耀著水面，你心中充滿了期待和興奮，相信很快就能抵達美食城鎮，品嚐到前所未有的美味佳餚。\n你抵達了美食城鎮，這個城鎮以它的獨特美食聞名於世。從街角小攤到高級餐廳，處處都是誘人的美味。你可以自由探索這個城鎮，品嚐各種美食，開啟你的美食冒險之旅！`,
}]

function handleNextStory(option: number) {
  // eslint-disable-next-line no-console
  console.log(conversation[conversationIndex.value].options?.[option])
  conversationIndex.value++
}
const userStore = useUserStore()
const { userCheckIn, getUserCheckInsOfThisWeek, getUserCheckIns } = useAmplify()

function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days)
  return date
}
function toDateString(date: Date) {
  return date.toISOString().slice(0, 10)
}
const fakeDate = ref((new Date()).toISOString().slice(0, 10))
async function handleFakeCheckIn() {
  await userCheckIn(userStore.userId, fakeDate.value)
  console.log(`${fakeDate.value}打卡完畢`)
}
async function handleGetUserCheckInsThisWeek() {
  const res = await getUserCheckInsOfThisWeek(userStore.userId)
  console.log(res)
}
async function handleGetUserCheckIns() {
  const res = await getUserCheckIns(userStore.userId)
  console.log(res)
}
</script>

<template>
  <div class="forest h-full flex flex-col p-4 pb-20 font-cubic">
    <div v-if="!userStore.hasCheckUserCheckIn" class="grid flex-1 place-items-center">
      載入中
    </div>
    <div v-else-if="!userStore.isUserCheckedIn" class="flex flex-1 flex-col gap-4">
      <div class="rounded-xl bg-white p-4 py-2 text-neutral-800 shadow-xl">
        <div class="flex items-center gap-2">
          <div class="h-1 flex-1 rounded bg-neutral-600" />
          <div class="i-tabler-map-pin-2 text-neutral-600" />
          <span class="text-neutral-600">{{ conversationIndex }} / 3</span>
          <div class="h-1 flex-1 rounded bg-neutral-600" />
        </div>
        <p class="whitespace-pre-wrap">
          {{ conversation[conversationIndex].story }}
        </p>
        <div class="my-2.5 h-1 rounded bg-neutral-600" />
      </div>
      <template v-if="conversationIndex <= 2">
        <p class="text-center">
          {{ $t('adventurePage.what_is_your_choice') }}
        </p>
        <ol class="flex flex-col gap-2">
          <li
            v-for="(option, i) in conversation[conversationIndex].options"
            :key="option"
            class="cursor-pointer rounded bg-white/50 p-2 px-4 shadow backdrop-blur-sm transition hover:shadow-lg"
            @click="handleNextStory(i)"
          >
            {{ i + 1 }}. {{ option }}
          </li>
        </ol>
      </template>
      <button v-else class="flex items-center justify-center gap-2 rounded-full bg-primary/80 p-2 text-white font-bold shadow-xl backdrop-blur-sm hover:bg-primary/90">
        領取禮物
        <div class="i-tabler-gift" />
      </button>
    </div>
    <div v-else class="grid flex-1 place-items-center">
      你已經完成今天的探險囉！
    </div>
    <div class="fixed left-5 top-5 flex flex-col gap-4">
      選定： {{ fakeDate }}
      <select v-model="fakeDate">
        <option v-for="i in 10" :key="i" :value="toDateString(addDays(new Date(), -i + 1))">
          {{ toDateString(addDays(new Date(), -i + 1)) }}
        </option>
      </select>
      <button class="btn" @click="handleFakeCheckIn">
        打卡
      </button>
      <button class="btn" @click="handleGetUserCheckIns">
        顯示所有打卡狀態
      </button>
      <button class="btn" @click="handleGetUserCheckInsThisWeek">
        顯示本週打卡狀態
      </button>
    </div>
    <!-- <nuxt-img class="" src="/forest-bg-2.png" alt="forest-bg" /> -->
  </div>
</template>

<style scoped>
.forest {
  background-image: url('/forest-bg-2.png');
  background-size: contain;
  background-position: center bottom 80px;
  background-repeat: no-repeat;
}
</style>
