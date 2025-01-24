<script setup>
import { reactive } from 'vue'
import { useBuildingStore } from '@/entities/building/store/buildingStore'
import { useRouter } from 'vue-router'
import ActionButton from '@/components/buttons/ActionButton.vue'
import CancelButton from '@/components/buttons/CancelButton.vue'
import { validateNumericInputAsInteger } from '@/utilities/validators'

const router = useRouter()
const buildingStore = useBuildingStore()

const form = reactive({
  name: '',
  address: '',
  capacity: '',
})

const errorMessages = reactive({
  name: '',
  address: '',
  capacity: '',
})

var activeFormValidation = false

const validateForm = () => {
  if (activeFormValidation) {
    errorMessages.name = form.name ? '' : 'Name is required'
    errorMessages.address = form.address ? '' : 'Address is required'
    errorMessages.capacity =
      (form.capacity ? '' : 'Capacity is required') ||
      validateNumericInputAsInteger(form.capacity, 1, 100)
    const hasErrors =
      errorMessages.name || errorMessages.address || errorMessages.capacity
    return !hasErrors
  } else return true
}

const handleSubmit = async () => {
  activeFormValidation = true
  if (validateForm()) {
    const building = {
      name: form.name,
      address: form.address,
      capacity: form.capacity,
    }

    buildingStore.addBuilding(building)
    router.push('/buildings')
  }
}
</script>

<template>
  <h1>Add building</h1>

  <form
    @submit.prevent="handleSubmit"
    v-if="form"
    class="form-horizontal"
    novalidate
  >
    <div class="form-group">
      <label for="name">Name:</label>
      <input
        type="text"
        v-model="form.name"
        id="name"
        name="name"
        placeholder="Name"
        maxlength="20"
        @focusout="validateForm"
      />
      <span v-if="errorMessages.name" class="padding"></span>
      <span v-if="errorMessages.name" class="error-message">{{
        errorMessages.name
      }}</span>

      <label for="address">Address:</label>
      <input
        type="text"
        v-model="form.address"
        id="address"
        name="address"
        placeholder="Address"
        maxlength="40"
        @focusout="validateForm"
      />
      <span v-if="errorMessages.address" class="padding"></span>
      <span v-if="errorMessages.address" class="error-message">{{
        errorMessages.address
      }}</span>

      <label for="capacity">Capacity:</label>
      <input
        type="number"
        v-model="form.capacity"
        id="capacity"
        name="capacity"
        placeholder="Capacity"
        min="1"
        max="100"
        style="width: 10ch"
        @focusout="validateForm"
      />
      <span v-if="errorMessages.capacity" class="padding"></span>
      <span v-if="errorMessages.capacity" class="error-message">{{
        errorMessages.capacity
      }}</span>
    </div>

    <p></p>

    <ActionButton type="submit">Add</ActionButton>
    <CancelButton type="button" @click="router.back">Cancel</CancelButton>
  </form>
</template>

<style scoped>
label {
  margin-right: 5px;
  font-size: 0.9rem;
}

.form-group {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  row-gap: 0.5rem;
}

@media (max-width: 600px) {
  label {
    display: none;
  }
  .padding {
    display: none;
  }
  .form-group {
    grid-template-columns: 1fr;
  }
}
</style>
