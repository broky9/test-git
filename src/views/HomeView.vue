<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

import { state, mutations } from '../stores/test'
import { useFazeClan } from '@/stores/faze'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'

const chuanshen = reactive({ a: 1 })

interface testAbc {
  name: string
  ko?: number
}

const testAbcd = { name: 1 }

console.log(useRoute())

const nameList = useFazeClan()

const productArray = useProductStore().productArray

// var productArray = reactive([
//   { type: '冲压', name: '2000T' },
//   { type: '冲压', name: '1000T' },
//   { type: '冲压', name: '3000T' },
//   { type: '焊接', name: 'b000T' },
//   { type: '焊接', name: 'b200T' },
//   { type: '焊接', name: 'b100T' },
//   { type: '辅助', name: '空压' },
//   { type: '辅助', name: '空压2' },
//   { type: '辅助', name: '空压3' }
// ])

var typeNumber = ref<any[]>([])

const changeName = () => {
  mutations.updateState('asd')
}

const onChange = () => {}

var nameState = computed(() => {
  return state.name
})

function getType() {
  productArray.forEach((a) => {
    // console.log(a.type);
    // console.log(typeNumber.value);
    typeNumber.value.findIndex((b) => {
      console.log(b, a.type)
      return b === a.type
    })
    if (
      !typeNumber.value.findIndex((b) => {
        return b === a.type
      })
    ) {
      typeNumber.value.push(a.type)
    }
  })
}

function setCookie() {
  document.cookie = encodeURI('rain已登录')
}
</script>

<template>
  <div>
    <!-- <a-carousel :after-change="onChange">
      <div>
        <img src="@/img/faze-clan/broky.jpg" style="width: 10%" />
        1
      </div>
      <div>
        2
        <img src="@/img/faze-clan/broky.jpg" style="width: 10%" />
      </div>
      <div>
        3
        <img src="@/img/faze-clan/broky.jpg" style="width: 10%" />
      </div>
      <div>
        4
        <img src="@/img/faze-clan/broky.jpg" style="width: 10%" />
      </div>
      <div>
        5
        <img src="@/img/faze-clan/broky.jpg" style="width: 10%" />
      </div>
    </a-carousel> -->
    <main>
      <TheWelcome />
    </main>
    <template v-if="true">
      Sadasdsad---------------------------------------------------------- </template
    >========================
    <div>
      <button @click="getType">getType</button>
      <button @click="changeName">asdsad</button>
      {{ productArray }}
      {{ typeNumber }}

      <ol>
        <li v-for="(item, id) in productArray" :key="id">
          {{ item.type }} -- {{ item.name }} -- {{ testAbcd }}
        </li>
      </ol>

      <div>
        {{ nameState }}
      </div>
      <div v-for="(a, index) in nameList.group" style="font-weight: bold" :key="index">
        <div v-if="a.name === 'rain'" @click="setCookie()">
          {{ a.name }}
        </div>
        <div v-else>
          {{ a.name }}
        </div>
      </div>
    </div>
  </div>
</template>
