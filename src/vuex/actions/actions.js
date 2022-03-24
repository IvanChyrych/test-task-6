import axios from 'axios';

export default{
    GET_PRODUCTS_FROM_API({
        commit
    }) {
        return axios('https://www.nbrb.by/api/exrates/rates?periodicity=0', {
                method: "GET"
            })
            .then((currencies) => {
                commit('SET_PRODUCTS_TO_STATE', currencies.data);
                return currencies;

            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    },
    ADD_TO_CART({
        commit
    }, product) {
        commit('SET_CART', product);
    },
    DELETE_FROM_CART({
        commit
    }, index) {
        commit('REMOVE_FROM_CART', index)
    },

    INCREMENT({
        commit
    }, index) {
        commit('INCREMENT_ITEM', index)
    },

    DECREMENT({
        commit
    }, index) {
        commit('DECREMENT_ITEM', index)
    },

    GET_SEARCH_VALUE_FROM_VUEX({
        commit
    }, value) {
        commit('SET_SEARCH_VALUE_TO_VUEX', value);
    },
}
