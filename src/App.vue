<script setup lang="ts">
import { createBoard, deleteBoard, getAllBoards } from './api/board'
import SideBar from './components/SideBar.vue'
import { defineAsyncComponent, onMounted, provide, ref } from 'vue'

const CreateBoard = defineAsyncComponent(() => import('./components/CreateBoardModal.vue'))

const currentBoard = ref<string | null>(null)
const setCurrentBoard = (name: string) => (currentBoard.value = name)
provide('board', { currentBoard, setCurrentBoard })

const boards = ref<string[]>([])

onMounted(async () => {
  boards.value = await getAllBoards()
})

const isCreateBoardModalVisible = ref(false)
const showCreateBoardModal = () => (isCreateBoardModalVisible.value = true)
const hideCreateBoardModal = () => (isCreateBoardModalVisible.value = false)

const onCreateBoard = async (name: string | null) => {
  if (name) {
    const res = await createBoard(name)

    if (!res.success) {
      console.log(res.error)
    } else {
      boards.value.push(name)
    }

    hideCreateBoardModal()
  }
}

const onDeleteBoard = async (name: string) => {
  const res = await deleteBoard(name)

  if (!res.success) {
    console.log(res.error)
  } else {
    boards.value = boards.value.filter((boardName) => name != boardName)
  }

  hideCreateBoardModal()
}
</script>

<template>
  <main class="w-screen h-screen flex">
    <SideBar @show-modal="showCreateBoardModal" @delete-board="onDeleteBoard" :boards="boards" />
    <CreateBoard
      @create-board="onCreateBoard"
      @close-modal="hideCreateBoardModal"
      v-show="isCreateBoardModalVisible"
    />
  </main>
</template>
