<script>
	import IfBlocks from './IfBlocks.svelte';
</script>

<main>
  <table>
	  <caption>Svelte Tutorial Exercises</caption>
		<thead>
		  <tr>
			  <td>Svelte Exercise</td>
				<td>Svelte Project</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td class="exerciseName">Logic ==> If Blocks</td>
        <td><IfBlocks user={{ loggedIn: false }}/></td>
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

	.exerciseName {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
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