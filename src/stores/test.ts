import { reactive, readonly } from "vue";


const initState = reactive({
    name : 'kl'
})

export const state = readonly(initState);

export const mutations = {
    updateState(c: any) {
        initState.name = c
    }
}