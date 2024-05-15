<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { useQRCode } from '@vueuse/integrations/useQRCode'
import type { Coupon } from '~/pages/coupon.vue'

const props = defineProps<{
  coupon: Coupon | null
}>()
const couponCode = computed(() => {
  if (!props.coupon)
    return ''
  return `${props.coupon.id}-${props.coupon.name}-${props.coupon.date}`
})
const qrcode = useQRCode(couponCode, {
  width: 200,
  height: 200,
})

const isOpen = defineModel<boolean>('isOpen', { required: true })
function closeModal() {
  isOpen.value = false
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="mx-auto max-w-[450px] min-h-full flex items-center justify-center p-4"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="flex flex-col justify-center overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg text-gray-900 font-bold leading-6"
              >
                {{ coupon?.name }}
              </DialogTitle>
              <h4 class="text-neutral-700">
                {{ coupon?.brand }}<br>
                {{ coupon?.discount }}
              </h4>
              <img :src="qrcode" alt="QR Code">
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
