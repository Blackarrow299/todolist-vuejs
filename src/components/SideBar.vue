<script setup lang="ts">
import { getAllBoards } from '@/api/board'
import { onMounted, ref } from 'vue'

const { boards } = defineProps<{ boards: string[] }>()
defineEmits<{
  (e: 'showModal'): void
  (e: 'deleteBoard', name: string): void
}>()
</script>

<template>
  <div class="w-[20%] bg-slate-800 h-full flex items-center flex-col pt-5 px-4">
    <h2 class="text-white w-full font-bold mb-3">Boards</h2>
    <div class="space-y-2 w-full mb-8">
      <div
        class="bg-sky-700 py-3 w-full text-white text-center rounded text-sm font-bold"
        v-for="board in boards"
        :key="board"
      >
        {{ board }}
        <button
          @click="$emit('deleteBoard', board)"
          class="text-xs font-bold bg-red-500 py-0.5 px-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>

    <button
      @click="$emit('showModal')"
      class="bg-slate-500 px-8 py-3 text-sm font-bold text-white rounded w-full hover:bg-slate-400"
    >
      Create board
    </button>
  </div>
</template>
