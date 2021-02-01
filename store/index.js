import nuxtStorage from 'nuxt-storage'

export const state = () => ({
  pageTitle: '',
  darkMode: nuxtStorage.localStorage.getData('darkMode') || false
})

export const mutations = {
  changePageTitle(state, payload) {
    state.pageTitle = payload
  },
  changeDarkMode(state, payload) {
    nuxtStorage.localStorage.setData('darkMode', payload)
    state.darkMode = payload
  }
}

export const actions = {
  changePageTitle({ commit }, payload) {
    commit('changePageTitle', payload)
  },
  changeDarkMode({ commit }, payload) {
    commit('changeDarkMode', payload)
  }
}
