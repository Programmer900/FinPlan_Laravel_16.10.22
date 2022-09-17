export const mutations = {
  showSearch(state) {
    console.log('store showSearch')
    state.visible = true
  },
  closeSearch(state) {
    console.log('store closeSearch')
    state.visible = false
  }
}
