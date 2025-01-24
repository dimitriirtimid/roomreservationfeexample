<script setup>
import { useRouter } from 'vue-router'
import { useBuildingStore } from '@/entities/building/store/buildingStore'
import { useConfirmationStore } from '@/stores/confirmationStore'

const buildingStore = useBuildingStore()
const confirmationStore = useConfirmationStore()
const router = useRouter()

const goToDetails = (buildingId) => {
  router.push({ name: 'building-details', params: { id: buildingId } })
}

const deleteBuilding = async (event, id) => {
  event.stopPropagation()
  const result = await confirmationStore.show(
    'Delete building',
    'Are you sure you want to delete this building?',
    { okText: 'Delete' }
  )
  if (result) buildingStore.deleteBuilding(id)
}

defineProps({
  building: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div @click="goToDetails(building.id)" class="building">
    <h3>
      {{ building.name }}
      <i @click="deleteBuilding($event, building.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ building.address }}</p>
  </div>
</template>

<style scoped>
.fas {
  color: var(--c-dangerous-action-button);
}
.fas:hover {
  color: var(--c-dangerous-action-button-highlighted);
}

.building {
  background: var(--c-list-item);
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 0.5rem;
}

.building:hover {
  background: var(--c-list-item-highlighted);
}
.building.reminder {
  border-left: 5px solid green;
}

.building h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
