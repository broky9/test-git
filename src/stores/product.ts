import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useProductStore = defineStore('product', () => {
  const productArray = reactive([
    { type: '冲压', name: '2000T' },
    { type: '冲压', name: '1000T' },
    { type: '冲压', name: '3000T' },
    { type: '焊接', name: 'b000T' },
    { type: '焊接', name: 'b200T' },
    { type: '焊接', name: 'b100T' },
    { type: '辅助', name: '空压' },
    { type: '辅助', name: '空压2' },
    { type: '辅助', name: '空压3' },
    { type: '辅助', name: '空压4' }
  ])
  return { productArray }
})
