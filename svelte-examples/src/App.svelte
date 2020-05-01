<script>
  import Counter from './Counter.svelte';
	import TemperatureConverter from './TemperatureConverter.svelte';
	
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <h2>Svelte Examples</h2>

	<h3>Counter Exercise</h3>
	<Counter />

	<h3>Temperature Converter Excercise</h3>
	<TemperatureConverter />
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
</style>