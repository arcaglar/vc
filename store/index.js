export const state = () => ({
    selectedCategory: '',
    products: []
})

export const getters = {
    getCategory(state) {
        return state.selectedCategory
    },
    getProducts(state) {
        return state.products
    }
}

export const actions = {
    setCategory (context, payload) {
        context.commit('setCategory', payload)
    },
    setProducts (context, payload) {
        context.commit('setProducts', payload)
    }
}

export const mutations = {
    setCategory (state, payload) {
        if (payload === state.selectedCategory) {
            state.selectedCategory = ''
        } else {
            state.selectedCategory = payload
        }
    },
    setProducts (state, payload) {
        state.products = payload
    }
}

