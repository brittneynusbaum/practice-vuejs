/* global Vue */

var App = {
  data: function() {
    return {
      message: "Hello Vue!",
      todos: [
        
      ],
    };
  },
  
  methods: {
    // ...
    loadTodos: function() { 
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        });
    }
  }
};

Vue.createApp(App).mount('#app');