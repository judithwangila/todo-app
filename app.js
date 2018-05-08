var app = new Vue({
  el: '#app',
  data: {
    todos: [
		"My first todo item",
		"My second todo item",
		"My third todo item"
    ],
    item: 'To do item'  
},
    methods: {
    	addTodo() {
    		this.todos.push(this.item)
    		this.item ='';
    	}
    }
})