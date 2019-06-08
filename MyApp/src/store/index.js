import Vue from 'vue';
import Vuex from 'vuex';
import { checkAuth, signout, getNav, getLinks, getPost } from '~/shared/gateway';
import { UserAttributes } from '@servicestack/client';

export const state = {
    loading: false,
    links: {},
    posts: {},
    nav: null,
    userSession: null,
    userAttributes: [],
    roles: [],
    permissions: [],
  };

const mutations = {
    loading(state, loading) {
        state.loading = loading;
    },
    links(state, links) {
        state.links = links;
    },
    nav(state, nav) {
        state.nav = nav;
    },
    userSession(state, userSession) {
        state.userSession = userSession;
        state.userAttributes = userSession ? UserAttributes.fromSession(userSession) : null;
    },
    post(state, post) {
        Vue.set(state.posts, post.id, post); // Use Vue.set() to update objects/arrays so mutations can be observed
    }
}

const getters = {
    loading: state => state.loading,
    links: state => state.links,
    getPost: (state) => (id) => state.posts[id],
    nav: (state) => state.nav || {},
    userSession: (state) => state.userSession,
    userAttributes: (state) => state.userAttributes || [],
};

const actions = {
    async nuxtClientInit({ commit }, { req }) {
        var links = getLinks();
        var navItems = getNav();
        var authResponse = checkAuth();

        commit('links', await links);
        commit('nav', await navItems);
        commit('userSession', await authResponse);
    },

    async getNav({ commit }) {
        commit('loading', true);
        commit('nav', await getNav());
        commit('loading', false);
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
    },

    signin({ commit }, userSession) {
        commit('userSession', userSession);
    },

    async signout({ commit }) {
        await signout();
        commit('userSession', null);
    },
};

const createStore = () => 
    new Vuex.Store({
        state,
        mutations,
        getters,
        actions
    });

export default createStore;
