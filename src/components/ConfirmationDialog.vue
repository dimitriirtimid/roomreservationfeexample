<script setup>
import { useConfirmationStore } from '@/stores/confirmationStore'
import { storeToRefs } from 'pinia'
import DangerousActionButton from './buttons/DangerousActionButton.vue'
import CancelButton from './buttons/CancelButton.vue'

const confirmationStore = useConfirmationStore()

const { isVisible, title, message, okText, cancelText } =
  storeToRefs(confirmationStore)

const confirm = () => {
  confirmationStore.resolve(true)
}

const cancel = () => {
  confirmationStore.resolve(false)
}
</script>

<template>
  <div v-if="isVisible" class="dialog-backdrop" @click.self="cancel">
    <div class="dialog-box">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="dialog-actions">
        <DangerousActionButton @click="confirm">{{
          okText
        }}</DangerousActionButton>
        <CancelButton @click="cancel">{{ cancelText }}</CancelButton>
      </div>
    </div>
  </div>
</template>

<style>
.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background: var(--c-background);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px var(--c-box-shadow);
}
</style>
