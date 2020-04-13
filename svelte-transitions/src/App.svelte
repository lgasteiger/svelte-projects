<script>
  import TransitionDirective from './TransitionDirective.svelte';
  import AddingParameters from './AddingParameters.svelte';
	import InAndOut from './InAndOut.svelte';
  import CustomCss from './CustomCss.svelte';
	import CustomJsTransitions from './CustomJsTransitions.svelte';
	import TransitionEvents from './TransitionEvents.svelte';
	import LocalTransitions from './LocalTransitions.svelte';
	import DeferredTransitions from './DeferredTransitions.svelte';
				
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  <table>
	  <caption>Svelte Transitions Tutorial</caption>
		<thead>
		  <tr>
			  <td>Svelte Concepts</td>
				<td>Svelte Example</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			<td>Transition Directive</td>
			<td><TransitionDirective /></td>
			</tr>
			<tr>
			  <td>Adding Parameters</td>
				<td><AddingParameters /></td>
			</tr>
			<tr>
			  <td>In and Out Transitions</td>
        <td><InAndOut /></td>
			</tr>
			<tr>
			  <td>Custom CSS Transitions</td>
				<td><CustomCss /></td>
			</tr>
			<tr>
			  <td>Custom JS Transitions</td>
				<td><CustomJsTransitions /></td>
			</tr>
			<tr>
			  <td>Transition Events</td>
				<td><TransitionEvents /></td>
			</tr>
			<tr>
			  <td>Local Transitions</td>
				<td><LocalTransitions /></td>
			</tr>
			<tr>
			  <td>Deferred Transitions</td>
				<td><DeferredTransitions /></td>
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