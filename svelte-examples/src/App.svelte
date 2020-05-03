<script>
  import Counter from './Counter.svelte';
	import TemperatureConverter from './TemperatureConverter.svelte';
	import FlightBooker from './FlightBooker.svelte';
	import Timer from './Timer.svelte';
	import Crud from './Crud.svelte';		
	//import CircleDrawer from './CircleDrawer.svelte';
	import Test from './Test.svelte';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <table>
	  <caption>Svelte Examples</caption>
		<thead>
		  <tr>
			  <td>Svelte Concept</td>
				<td>Svelte Project</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td>Counter Exercise</td>
				<td><Counter /></td>
			</tr>
			<tr>
			  <td>Temperature Converter Excercise</td>
				<td><TemperatureConverter /></td>
			</tr>
			<tr>
			  <td>Flight Booker Exercise</td>
				<td><FlightBooker /></td>
			</tr>
			<tr>
			  <td>Timer Exercise</td>
				<td><Timer /></td>
			</tr>
			<tr>
			  <td>CRUD Exercise</td>
				<td><Crud /></td>
			</tr>
			<tr>
			  <td>Circle Drawer Exercise</td>
				<td>
				  <p style="color: green">
				    <i>TODO: Debug the CircleDrawer code.</i>
				  </p>
				</td>
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

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
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