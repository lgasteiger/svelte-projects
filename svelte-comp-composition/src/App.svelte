<script>
	import SlotsExercise from './SlotsExercise.svelte';
	import SlotFallbacks from './SlotFallbacks.svelte';
	import NamedSlots from './NamedSlots.svelte';
	import SlotProps from './SlotProps.svelte';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <h2>Svelte Component Composition Exercises</h2>
	<h3>Slots Exercise</h3>
	<SlotsExercise />

	<h3>Slot Fallbacks</h3>
	<SlotFallbacks />

	<h3>Named Slots</h3>
	<NamedSlots />

	<h3>Slot Props</h3>
	<SlotProps />
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