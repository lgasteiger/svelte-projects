<script>
  import WritableStores from './WritableStores.svelte';
	import AutoSubscriptions from './AutoSubscriptions.svelte';
	import ReadableStores from './ReadableStores.svelte';
	import DerivedStores from './DerivedStores.svelte';
	import CustomStores from './CustomStores.svelte';
	import StoreBindings from './StoreBindings.svelte';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <table>
	  <caption>Svelte Stores Tutorial</caption>
		<thead>
		  <tr>
			  <td>Svelte Stores Concepts</td>
				<td>Svelte Example</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td>Writable Stores</td>
				<td><WritableStores /></td>
			</tr>
			<tr>
			  <td>Auto Subscriptions</td>
				<td><AutoSubscriptions /></td>
			</tr>
			<tr>
			  <td>Readable Stores</td>
				<td><ReadableStores /></td>
			</tr>
			<tr>
			  <td>Derived Stores</td>
				<td><DerivedStores /></td>
			</tr>
			<tr>
			  <td>Custom Stores</td>
				<td><CustomStores /></td>
			</tr>
			<tr>
			  <td>Store Bindings</td>
				<td><StoreBindings /></td>
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
		padding: 0 0 0 0.5em 0;
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