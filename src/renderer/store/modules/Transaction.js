const state = {
  transaction: null
}

const mutations = {
  STORE_TRANSACTION (state, tx) {
    state.transaction = tx
  },
  REMOVE_TRANSACTION (state) {
    state.transaction = null
  }
}

const getters = {
  transaction: state => state.transaction
}

export default {
  state,
  mutations,
  getters
}
