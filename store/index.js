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
        context.commit('SET_CATEGORY', payload)
    },
    setProducts (context, payload) {
        context.commit('SET_PRODUCTS', payload)
    }
}

export const mutations = {
    SET_CATEGORY (state, payload) {
        if (payload === state.selectedCategory) {
            state.selectedCategory = ''
        } else {
            state.selectedCategory = payload
        }
    },
    SET_PRODUCTS (state, payload) {
        state.products = payload
    }
}

