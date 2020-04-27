<script>
  import Todo from './Todo.svelte';

  let todos = [
    { id: 1, done: true, text: 'Wash car.' }
    ,{ id: 2, done: false, text: 'Take the dog for a walk.' }
    ,{ id: 3, done: false, text: 'Replace air and fuel filters.' }
  ]; //end todos list

  function toggle(toggled) {
    todos = todos.map(todo => {
      if (todo === toggled) {
        //Return a new object.
        return {
          id: todos.id
          ,done: !todo.done
          ,text: todo.text
        }; //end return
      } //end if

      //Return same object.
      return todo;
    }); //end todos.map
  } //end toggle
</script>

<h2>Todos</h2>
{#each todos as todo}
  <Todo {todo} on:click={() => toggle(todo)} />
{/each}