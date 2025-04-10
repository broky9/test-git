import { ref, customRef } from 'vue'

export default function (initValue) {
  initValue = ''
  const myInputRef = customRef((track, trigger) => {
    return {
      get() {
        track()
        return initValue
      },
      set(value) {
        initValue = value.toUpperCase()
        trigger()
      }
    }
  })

  const myTll = ref(1)

  const kil = function () {
    return 1
  }

  return { myInputRef, myTll, kil }
}
