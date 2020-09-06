<script>
  let todos = [
    {
      done: false
      ,text: 'Finish Svelte Tutorial'
    }
    ,{
      done: false
      ,text: 'Build an app'
    }
    ,{
      done: false
      ,text: 'World Peace'
    }
  ]; //end todos list

  function add() {
    todos = todos.concat({
      done: false
      ,text: ''
    }); //end todos.concat()
  } //end add()

  function clear() {
    todos = todos.filter(t => !t.done);
  } //end clear()

  $: remaining = todos.filter(t => !t.done).length;
</script>

<style>
  .done {
    opacity: 0.4;
  } /* end .done */
</style>

<section class="content">
  <h1>Todo List</h1>

  {#each todos as todo}
    <div class:done={todo.done}>
      <input
        type="checkbox"
        bind:checked={todo.done}
      >
      <input
        placeholder="What needs to be done?"
        value={todo.text}
        size="30"
      >
    </div>
  {/each}

  <p>
    {remaining} remaining Todo {remaining > 1 ? 'tasks' : 'task'}.
  </p>

  <button on:click={add}>
    Add New Task
  </button>
  <button on:click={clear}>
    Clear Completed Tasks
  </button>
</section>