// GLOBAL STORE STATE
export const state = () => ({
    darkMood: true,
    firstVisit: true,
})


// GETTERS
export const getters = {
    getFirstVisit(state) {
        return state.firstVisit
    },
}


// MUTATIONS
export const mutations = {
    toggleFirstVisit(state, data) {
        state.firstVisit = data
    }
}


// ACTIONS
export const actions = {
    async fetchFirstVisit({ state }) {
        // make request
        const res = { data };
        state.firstVisit = res.data;
        return res.data;
    },
    changeFirstVisit({ commit }, payload) {
        console.log('payload', payload)
        commit(CONSTANTS.TOGGLE_FIRST_VISIT, payload);
    }
}

// CONSTANTS
const CONSTANTS = {
    TOGGLE_FIRST_VISIT: 'toggleFirstVisit'
}
