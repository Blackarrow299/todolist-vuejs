<script setup lang="ts">
defineEmits(['showModal'])
</script>

<template>
  <div class="w-[20%] bg-slate-800 h-full flex items-center flex-col pt-5 px-16">
    <button
      @click="$emit('showModal')"
      class="bg-slate-500 px-8 py-3 text-sm font-bold text-white rounded w-full hover:bg-slate-400"
    >
      Create board
    </button>
  </div>
</template>
