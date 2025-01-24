<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useBuildingStore } from '@/entities/building/store/buildingStore'
import NavigationButton from '@/components/buttons/NavigationButton.vue'
import DangerousActionButton from '@/components/buttons/DangerousActionButton.vue'
import BackButton from '@/components/buttons/BackButton.vue'
import { useConfirmationStore } from '@/stores/confirmationStore'
import { ref, onMounted } from 'vue'

const router = useRouter()
const route = useRoute()
const buildingId = route.params.id

const buildingStore = useBuildingStore()
var building = ref(null)

const confirmationStore = useConfirmationStore()

const handleDelete = async () => {
  const result = await confirmationStore.show(
    'Delete building',
    'Are you sure you want to delete this building?',
    { okText: 'Delete' }
  )
  if (result) {
    buildingStore.deleteBuilding(buildingId)
    router.push('/buildings')
  }
}

onMounted(async () => {
  await buildingStore.fetchBuildings()
  building.value = buildingStore.getBuildingById(buildingId)
  if (!building.value) router.push('/not-found')
})
</script>

<template>
  <div v-if="building">
    <h1>{{ building.name }}</h1>
    <h3>Address</h3>
    <p>{{ building.address }}</p>
    <h3>Capacity</h3>
    <p>{{ building.capacity }}</p>

    <BackButton>Back</BackButton>
    <DangerousActionButton @btn-click="handleDelete"
      >Delete</DangerousActionButton
    >
    <NavigationButton :to="`/buildings/${buildingId}/edit`"
      >Edit</NavigationButton
    >
  </div>
</template>

<style scoped>
.building {
  background: #d1cbcb;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}

.building:hover {
  background: #a8a1a1; /* Change to the desired color */
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
