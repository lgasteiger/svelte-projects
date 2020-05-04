<script>
  import HackerNews from './hacker-news/HackerNews.svelte';
  import ImmutableData from './immutable-data/ImmutableData.svelte';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <h2>Svelte Miscellaneous Exercises</h2>
	<h3>Hacker News Example</h3>
	<HackerNews />

	<h3>Immutable Data Example</h3>
  <ImmutableData />
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