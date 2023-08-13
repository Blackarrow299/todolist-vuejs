<script setup lang="ts">
import { createBoard } from '@/api/board'
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'closeModal'): void
  (e: 'createBoard', name: string | null): void
}>()

const boardName = ref<string | null>(null)
</script>

<template>
  <div
    class="rounded-lg w-[400px] px-4 border border-gray-100 bg-slate-50 shadow absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pb-4"
  >
    <header class="pt-8 mb-4 px-4 text-center w-full">
      <h1 class="text-2xl font-extrabold text-slate-800">Create board</h1>
    </header>
    <input
      v-model="boardName"
      class="py-3 px-4 border w-full rounded-lg border-gray-200 outline-none"
      placeholder="Board name"
    />
    <button
      @click="$emit('createBoard', boardName)"
      class="w-full bg-slate-500 text-white rounded-lg py-3 font-bold mt-2 hover:bg-slate-400"
    >
      Create
    </button>
    <button
      @click="$emit('closeModal')"
      class="w-full bg-slate-200 text-slate-800 rounded-lg py-3 font-bold mt-2 hover:bg-slate-100"
    >
      Cancel
    </button>
  </div>
</template>
