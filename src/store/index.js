import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeScheme:{
      background: {
        'background': 'linear-gradient(to bottom right, rgb(222, 232, 237), rgb(211, 220, 226))',
      },
      boxShadow: {
        'box-shadow': '0 4px 10px 0 rgb(156,175,171)',
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
        'box-shadow': '0 10px 30px 0 rgb(137, 102, 201)',
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
        'box-shadow': '0 10px 30px 0 rgb(128, 165, 202)',
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
        'box-shadow': '0 10px 30px 0 rgb(202, 158, 177)',
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
        'box-shadow': '0 10px 30px 0 rgb(156,175,171)',
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
        'box-shadow': '0 10px 30px 0 rgb(199, 134, 67)',
        'color': '#383838',
      },
      fontColor: {
        'color': '#383838',
      }
    },
    progressTime: {
      startDay: 29,
      startHour: 23,
      startMin: 57,
    }
  },
  mutations: {
    decrementDay(state){
      state.progressTime.startDay--;
    },
    decrementHour(state){
      state.progressTime.startHour--;
    },
    decrementMin(state){
      state.progressTime.startMin--;
    },
    resetHour(state){
      state.progressTime.startHour = 23;
    },
    resetMin(state){
      state.progressTime.startMin = 59;
    },
  },
  actions: {
    decrementDay(context) {
      context.commit('decrementDay');
    },
    decrementHour(context) {
      context.commit('decrementHour');
    },
    decrementMin(context) {
      context.commit('decrementMin');
    },
    resetHour(context) {
      context.commit('resetHour');
    },
    resetMin(context) {
      context.commit('resetMin');
    },
  },
  modules: {
  }
})
