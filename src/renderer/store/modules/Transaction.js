const state = {
  transaction: null
}

const mutations = {
  STORE_TRANSACTION (state, tx) {
    state.transaction = tx
  },

  REMOVE_TRANSACTION (state) {
    state.transaction = null
  },

  SIGN_TRANSACTION (state, keypair) {
    state.transaction.sign(keypair)
  },

  ADD_SIGNATURE (state, signature) {
    state.transaction.signatures.push(signature)
  },

  REMOVE_SIGNATURE (state, index) {
    state.transaction.signatures.splice(index, 1)
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
