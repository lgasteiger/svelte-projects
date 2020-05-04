<svelte:options immutable />

<script>
  import ImmutableTodo from './ImmutableTodo.svelte';
  import MutableTodo from './MutableTodo.svelte';

  let todos = [
    { id: 1, done: false, text: 'Learn Svelte' }
    ,{ id: 2, done: false, text: 'Study Sapper' }
    ,{ id: 3, done: true, text: 'Learn Javascript ES6' }
  ]; //end todos list

  function toggle(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        //Return a new object
        return {
          id
          ,done: !todo.done
          ,text: todo.text
        }; //end return
      } //end if

      //Return the same object.
      return todo;
    }); //end todos map
  } //end toggle()
</script>

<h2>Immutable</h2>
{#each todos as todo}
  <ImmutableTodo 
    {todo} 
    on:click="{() => toggle(todo.id)}"
  />
{/each}

<h2>Mutable</h2>
{#each todos as todo}
  <MutableTodo
    {todo}
    on:click="{() => toggle(todo.id)}"
  />
{/each}
