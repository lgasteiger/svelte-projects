<script>
	import ClassDirective  from './ClassDirective.svelte';
	import ShorthandClassDirective from './ShorthandClassDirective.svelte';
	
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <h2>Svelte Class Concepts</h2>

	<h3>The Class Directive</h3>
  <ClassDirective />

	<h3>Shorthand Class Directive</h3>
	<ShorthandClassDirective />
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