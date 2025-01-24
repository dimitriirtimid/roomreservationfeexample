<script setup>
import FooterSection from '@/components/FooterSection.vue'
import HeaderSection from '@/components/HeaderSection.vue'
import '@/assets/main.css'
import { useBuildingStore } from '@/entities/building/store/buildingStore'
import ConfirmationDialog from '@/components/ConfirmationDialog.vue'

const buildingStore = useBuildingStore()
buildingStore.fetchBuildings()
</script>

<template>
  <div id="wrapper">
    <HeaderSection />
    <main id="content">
      <router-view />
    </main>
    <FooterSection />
  </div>
  <ConfirmationDialog />
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Verdana, sans-serif;
}

#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content {
  flex: 1;
  padding: 20px;
}
</style>
