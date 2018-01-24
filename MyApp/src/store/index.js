import Vuex from "vuex";
import { getLinks } from "~/shared/gateway";

const state = {
    links: {}
}

const mutations = {
    links(state, links) {
        state.links = links
    }
}

const getters = {
    links: state => state.links
}

const actions = {
    async nuxtClientInit({ commit }, { req }) {
        var links = await getLinks()
        //remove first 3 keys to simulate loading stale data on first load
        Object.keys(links).slice(0,3).forEach(key => delete links[key])
        commit('links', links)
    },

    async getLinks({ commit }) {
        commit('links', await getLinks())
    }
}

const createStore = () => 
    new Vuex.Store({
        state,
        mutations,
        getters,
        actions
    })

export default createStore;
