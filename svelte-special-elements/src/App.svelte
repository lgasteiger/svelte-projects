<script>
	import SvelteSelf from './SvelteSelf.svelte';
	import SvelteComp from './svelte-component/SvelteComponent.svelte';
	import SvelteWindow from './SvelteWindow.svelte';
	import WindowBindings from './WindowBindings.svelte';
//	import SvelteBody from './SvelteBody.svelte';
	import SvelteHead from './SvelteHead.svelte';
	import SvelteOptions from './svelte-options/SvelteOptions.svelte';

	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <h2>Svelte Special Elements</h2>	
	
	<h3>Svelte Self</h3>
	<SvelteSelf />

	<h3>Svelte Component</h3>
	<SvelteComp />

	<h3>Svelte Window</h3>
  <SvelteWindow /> 
<!--
	TODO: The Windows Binding exercise causes subsequent example exercises to be send to back and be covered up.
	<h3>Svelte Window Bindings</h3>
  <WindowBindings />
-->
	<h3>Svelte Body</h3>
	<p>
	  <i style="color: green">
		  TODO: Debug Svelte Body exercise. The Svelte Body example causes the behavior of Webpage scrolling to stop.
		</i>
	</p>

	<h3>Svelte Head</h3>
	<SvelteHead />

  <h3>Svelte Options</h3>
	<SvelteOptions />
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