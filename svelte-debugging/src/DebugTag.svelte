<script>
  let user = {
    firstname: 'Ada'
    ,lastname: 'Lovelace'
  }; //end user variable
</script>

<input bind:value={user.firstname}>
<input bind:value={user.lastname}>

{(console.log(user), '')}

<!--
For stepping through code with pauses in execution.
{@debug user}
-->

<h1>Hello {user.firstname}!</h1>