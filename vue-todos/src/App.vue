<template>
  <div>
    <h1>Hello world!</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span :class="{ completed : todo.done }">{{todo.text}}</span>
        <button @click="removeTodo(todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      todos: [
        { id: 1, text: "Learn Angular", done: true },
        { id: 2, text: "Seek for a job", done: false },
        { id: 3, text: "Forget everything" }
      ]
    };
  },

  methods: {
    removeTodo(id) {
      const index = this.todos.findIndex(todo => todo.id === id);
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
