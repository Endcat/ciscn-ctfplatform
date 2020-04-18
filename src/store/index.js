import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeScheme:{
      background: {
        'background': 'linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248))',
      },
      boxShadow: {

      },
    },
    purpleScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248))',
      },
      boxShadow: {

      },
    },
    blackScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(47, 55, 59), rgb(54, 63, 69))',
      },
      boxShadow: {

      },
    },
    cyanScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(168, 204, 253), rgb(188, 226, 252))',
      },
      boxShadow: {

      },
    },
    pinkScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(255, 209, 253), rgb(250, 208, 201))',
      },
      boxShadow: {

      },
    },
    whiteScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(222, 232, 237), rgb(211, 220, 226))',
      },
      boxShadow: {

      },
    },
    yellowScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(248, 201, 108), rgb(251, 168, 127))',
      },
      boxShadow: {

      },
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
