export const state = () => ({
    selectedCategory: 'jewelery'
})

export const getters = {
    getCategory(state) {
        return state.selectedCategory
    }
}

export const actions = {
    setCategory (context, payload) {
        console.log(payload)
        context.commit('setCategory', payload)
    }
}

export const mutations = {
    setCategory (state, payload) {
        state.selectedCategory = payload
    }
}

