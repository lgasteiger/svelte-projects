<script>
  import Assignments from './Assignments.svelte';
	import Declarations from './Declarations.svelte';
	import Statements from './Statements.svelte';
	import UpdatingObjects from './UpdatingObjects.svelte';
		
	export let name;
</script>

<main>
	<table>
	  <caption>
		  Svelte Tutorial Exercises
		</caption>
		<thead>
		  <tr>
			  <td>Svelte Exercises</td>
				<td>Svelte Project</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td>Reactivity ==> Assignments</td>
				<td><Assignments /></td>
			</tr>
			<tr>
			  <td>Reactivity ==> Declarations</td>
				<td><Declarations /></td>
			</tr>
			<tr>
			  <td>Reactivity ==> Statements</td>
				<td><Statements /></td>
			</tr>
			<tr>
			  <td>Reactivity ==> Updating Objects</td>
        <td><UpdatingObjects /></td>
			</tr>
		</tbody>
	</table>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	table caption {
		padding: 0 0 0.5em 0;
		font-size: 1.25em;
	}

	table thead {
		background-color: #06c;
		font-weight: bold;
	}

	td {
		border: 1px solid #000;
		padding: 0.5em 1em 0.5em 1em;
		text-align: center;
	}
</style>