import { defineStore } from 'pinia'

export const useConfirmationStore = defineStore('confirmation', {
  state: () => ({
    isVisible: false,
    title: '',
    message: '',
    okText: '',
    cancelText: '',
    resolveFunction: null,
  }),
  actions: {
    async show(title, message, options = {}) {
      this.title = title
      this.message = message
      this.okText = options.okText || 'OK'
      this.cancelText = options.cancelText || 'Cancel'
      this.isVisible = true

      return new Promise((resolve) => {
        this.resolveFunction = resolve
      })
    },
    resolve(result) {
      if (this.resolveFunction) this.resolveFunction(result)
      this.isVisible = false
      this.resolveFunction = null
    },
  },
})
