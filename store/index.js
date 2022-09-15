export const state = () => ({
    selectedCategory: '',
    products: [],
    basket: []
})

export const getters = {
    getCategory(state) {
        return state.selectedCategory
    },
    getProducts(state) {
        return state.products
    },
    getBasket(state) {
        return state.basket
    }
}

export const actions = {
    setCategory (context, payload) {
        context.commit('SET_CATEGORY', payload)
    },
    setProducts (context, payload) {
        context.commit('SET_PRODUCTS', payload)
    },
    setBasket (context, payload) {
        context.commit('SET_BASKET', payload)
    },
    removeItemOnBasket (context, payload) {
        context.commit('REMOVE_ITEM', payload)
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
    },
    SET_BASKET (state, payload) {
        if (state.basket.some(e => e.id === payload.id)) {
            state.basket.forEach((item, key) => {
                if (item.id === payload.id) {
                    payload.count++
                    state.basket[key].count++
                }
            });
        } else {
            state.basket.push(payload)
        }
    },
    REMOVE_ITEM (state, payload) {
        state.basket.forEach((item, key) => {
            if (item.id === payload.id) {
                state.basket.splice(key, 1)
            }
        });
    }
}
