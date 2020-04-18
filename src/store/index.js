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
        'box-shadow': '0 10px 30px 0 rgb(107, 66, 217)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
    purpleScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248))',
      },
      boxShadow: {
        'box-shadow': '0 10px 30px 0 rgb(107, 66, 217)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
    blackScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(47, 55, 59), rgb(54, 63, 69))',
      },
      boxShadow: {
        'box-shadow': '0 10px 30px 0 rgb(30, 30, 30)',
        'color': '#d9e3e8',
      },
      fontColor: {
        'color': '#d9e3e8',
      }
    },
    cyanScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(168, 204, 253), rgb(188, 226, 252))',
      },
      boxShadow: {
        'box-shadow': '0 10px 30px 0 rgb(107, 66, 217)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
    pinkScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(255, 209, 253), rgb(250, 208, 201))',
      },
      boxShadow: {
        'box-shadow': '0 10px 30px 0 rgb(107, 66, 217)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
    whiteScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(222, 232, 237), rgb(211, 220, 226))',
      },
      boxShadow: {
        'box-shadow': '0 10px 30px 0 rgb(107, 66, 217)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
    yellowScheme: {
      background: {
        'background': 'linear-gradient(to bottom right, rgb(248, 201, 108), rgb(251, 168, 127))',
      },
      boxShadow: {
        'box-shadow': '0 10px 30px 0 rgb(107, 66, 217)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
