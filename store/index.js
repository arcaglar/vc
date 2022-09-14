export const state = () => ({
    selectedCategory: ''
})

export const getters = {
    getCategory(state) {
        return state.selectedCategory
    }
}

export const actions = {
    setCategory (context, payload) {
        context.commit('setCategory', payload)
    }
}

export const mutations = {
    setCategory (state, payload) {
        if (payload === state.selectedCategory) {
            state.selectedCategory = ''
        } else {
            state.selectedCategory = payload
        }
    }
}

