import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useBuildingStore = defineStore('building', {
  state: () => ({
    buildings: [],
    loaded: false,
  }),
  actions: {
    async fetchBuildings(options = { refresh: false }) {
      if (!this.loaded || options.refresh) {
        try {
          const response = await axios.get('/api/buildings')
          this.buildings = response.data
        } catch (error) {
          console.error('Failed to load buildings:', error)
        }
      }
    },
    async deleteBuilding(id, options = { showSuccessToast: true }) {
      try {
        await axios.delete(`/api/buildings/${id}`)
        if (options.showSuccessToast) toast.success('Building deleted')
      } catch (error) {
        toast.error('Error deleting building, please retry', { timeout: 3000 })
        console.error('Failed to delete building:', error)
      } finally {
        await this.fetchBuildings()
      }
    },
    async addBuilding(building, options = { showSuccessToast: true }) {
      try {
        await axios.post(`/api/buildings`, building)
        if (options.showSuccessToast) toast.success('Building stored')
      } catch (error) {
        toast.error('Error saving building, please retry', { timeout: 3000 })
        console.error('Failed to add building:', error)
      } finally {
        await this.fetchBuildings()
      }
    },
    async updateBuilding(building, options = { showSuccessToast: true }) {
      try {
        await axios.put(`/api/buildings/${building.id}`, building)
        if (options.showSuccessToast) toast.success('Building updated')
      } catch (error) {
        toast.error('Error saving building, please retry', { timeout: 3000 })
        console.error('Failed to update building:', error)
      } finally {
        await this.fetchBuildings()
      }
    },
    async loadTestData(options = { showSuccessToast: true }) {
      const currentBuildingIds = this.buildings.map((e) => e.id)
      for (const id of currentBuildingIds)
        await this.deleteBuilding(id, { showSuccessToast: false })

      for (const building of testData)
        await this.addBuilding(building, { showSuccessToast: false })

      if (options.showSuccessToast) toast.success('Test data loaded')
    },
  },
  getters: {
    getBuildingById: (state) => (id) => state.buildings.find((e) => e.id == id),
  },
})

const testData = [
  {
    id: '1',
    name: 'Big Tower',
    address: 'Main street 1',
    capacity: 30,
  },
  {
    id: '2',
    name: 'Small Tower',
    address: 'Second street 33',
    capacity: 10,
  },
  {
    id: '3',
    name: 'Beach plaza',
    address: 'Ocean view 333',
    capacity: 15,
  },
  {
    id: '4',
    name: 'Mountain lodge',
    address: 'Hilltop 1',
    capacity: 20,
  },
  {
    id: '5',
    name: 'City hall',
    address: 'Downtown 1',
    capacity: 50,
  },
]
