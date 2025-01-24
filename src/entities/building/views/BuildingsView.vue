<script setup>
import BuildingItem from '@/entities/building/components/BuildingItem.vue'
import { useBuildingStore } from '@/entities/building/store/buildingStore'
import NavigationButton from '@/components/buttons/NavigationButton.vue'

const buildingStore = useBuildingStore()
</script>

<template>
  <p />
  <h1>Buildings</h1>
  <div :key="building.id" v-for="building in buildingStore.buildings">
    <BuildingItem :building="building" />
  </div>
  <NavigationButton to="/buildings/add">Add</NavigationButton>
</template>
