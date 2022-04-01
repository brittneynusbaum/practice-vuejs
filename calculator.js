var App = {
  data: function() {
    return {
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0
    };
  },

  methods: {
    computeProduct: function() {
      this.sum = this.number1 + this.number2 + this.number3;
    }
  }

};

Vue.createApp(App).mount('#app');


