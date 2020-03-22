<script>
  import Nested from './Nested.svelte';
	import HtmlTags from './HtmlTags.svelte';
	import Assignments from './Assignments.svelte';
	import Declarations from './Declarations.svelte';
	import Statements from './Statements.svelte';

	export let name;
	const myName = 'lgg';
	const src = 'images/my-glock.png';
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <h2>{myName.toUpperCase()} has been learning along side you too!!</h2>

  <img src={src} alt="My Glock Image.">

	<Nested />

	<HtmlTags />

  <Assignments />

	<Declarations />

	<Statements />
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

	h2 {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>