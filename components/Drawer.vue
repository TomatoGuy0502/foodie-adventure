<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<template>
  <slot name="button" :open-modal="openModal" />
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/40" />
      </TransitionChild>

      <div class="fixed inset-0 flex items-end justify-center overflow-y-hidden">
        <TransitionChild
          as="template"
          enter="duration-200 ease-out"
          enter-from="opacity-0 translate-y-full"
          enter-to="opacity-100 translate-y-0"
          leave="duration-200 ease-in"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 translate-y-full"
        >
          <DialogPanel
            class="max-w-[450px] w-full flex flex-col gap-4 overflow-hidden rounded-t-2xl bg-white p-6 shadow-xl transition-all"
          >
            <DialogTitle
              as="h3"
              class="text-lg text-gray-900 font-medium leading-6"
            >
              <slot name="title" />
            </DialogTitle>
            <slot name="body">
              empty body
            </slot>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
