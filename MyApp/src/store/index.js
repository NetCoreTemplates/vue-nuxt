import Vue from "vue";
import Vuex from "vuex";
import { getLinks, getPost } from "~/shared/gateway";
import { setTimeout } from "timers";

const state = {
    loading: false,
    links: {},
    posts: {}
};

const mutations = {
    loading(state, loading) {
        state.loading = loading;
    },
    links(state, links) {
        state.links = links;
    },
    post(state, post) {
        Vue.set(state.posts, post.id, post); // Use Vue.set() to update objects/arrays so mutations can be observed
    }
}

const getters = {
    loading: state => state.loading,
    links: state => state.links,
    getPost: (state) => (id) => state.posts[id]
};

const actions = {
    async nuxtClientInit({ commit }, { req }) {
        var links = await getLinks();
        //remove first 3 keys to simulate loading stale data on initial load
        Object.keys(links).slice(0,3).forEach(key => delete links[key]);
        commit('links', links);
    },

    async getLinks({ commit }) {
        commit('loading', true);
        commit('links', await getLinks());
        commit('loading', false);
    },

    async getPost({ commit }, id) {
        commit('loading', true);
        commit('post', await getPost(id));
        commit('loading', false);
    }
};

const createStore = () => 
    new Vuex.Store({
        state,
        mutations,
        getters,
        actions
    });

export default createStore;
