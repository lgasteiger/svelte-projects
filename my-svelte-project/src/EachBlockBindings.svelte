<script>
  let todos = [
    { done: false, text: 'Finish Svelte tutorial' }
    ,{ done: false, text: 'Build Auto DB app' }
    ,{ done: false, text: 'Help people around the world'}
  ];

  $: remaining = todos.filter(t => !t.done).length;

  function addTodo() {
    todos = todos.concat({ done: false, text: ''});
  } //end addTodo

  function clearTodos() {
    todos = todos.filter(t => !t.done);
  } //end clearTodos
</script>

<style>
  .done {
    opacity: 0.4;
  }

  input.todoTask {
    width: 350px;
  }
</style>

<h1>Todo List</h1>
<p><strong>{remaining}</strong> tasks remaining.</p>

{#each todos as todo}
  <div class:done={todo.done}>
    <input type=checkbox bind:checked={todo.done}>
    <input class="todoTask" disabled={todo.done} placeholder="What needs to be done?" bind:value={todo.text}>
  </div>
{/each}

<button on:click={addTodo}>
  Add Todo Task
</button>

<button on:click={clearTodos}>
  Clear Completed Tasks
</button>