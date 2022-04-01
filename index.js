/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello from JavaScript!",
      vegetables: ["kale", "spinach", "broccoli"]
    };
  },

  methods: {
    updateMessage: function() {
      console.log("changing name");
      this.message = "updating message";
    }
    
    // addVegetable: function() {
    //   console.log(this.vegetables)
    // }
  }
};

Vue.createApp(App).mount('#app');