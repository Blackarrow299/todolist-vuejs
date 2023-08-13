<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import { defineAsyncComponent, ref } from 'vue'

const isCreateBoardModalVisible = ref(false)

const showCreateBoardMoadl = () => (isCreateBoardModalVisible.value = true)
const hideCreateBoardModal = () => (isCreateBoardModalVisible.value = false)

const CreateBoard = defineAsyncComponent(() => import('./components/CreateBoardModal.vue'))
</script>

<template>
  <main class="w-screen h-screen flex">
    <SideBar @show-modal="showCreateBoardMoadl" />
    <CreateBoard @close-modal="hideCreateBoardModal" v-show="isCreateBoardModalVisible" />
  </main>
</template>
