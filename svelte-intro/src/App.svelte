<script>
	import Basics from './Basics.svelte';
	//import AddingData from './AddingData.svelte';
	//import NestedComp from './nested-comp/NestedComp.svelte';

	export let name;
</script>

<main>
  <table>
	  <caption>Svelte Tutorial Exercies</caption>
	  <thead>
		  <tr>
			  <td>Svelte Exercise</td>
				<td>Svelte Project</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td>Introduction => Basic</td>
				<td><Basics /></td>
			</tr>
			<tr>
			  <td></td>
			</tr>
		</tbody>
	</table>
</main>

<style>
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
		background-color: #06C;
		font-weight: bold;
	}

	td {
		border: 1px solid #000;
		padding: 0.5em 1em 0.5em 1em;
		text-align: center;
	}
</style>