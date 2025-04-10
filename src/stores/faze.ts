import { defineStore } from 'pinia'

export const useFazeClan = defineStore('faze', {
  actions: {
    getFazeNumber() {
      this.fazenumber += 10
    }
  },
  getters: {
    timesFazeNumber(): number {
      return this.fazenumber
    },
    fazekkk: () => {
      console.log(this)
      return 0
    }
  },
  state() {
    return {
      fazenumber: 1,
      group: [
        {
          name: 'rain'
        },
        {
          name: 'ropz'
        },
        {
          name: 'frozen'
        },
        {
          name: 'karrigan'
        },
        {
          name: 'broky'
        }
      ]
    }
  }
})
