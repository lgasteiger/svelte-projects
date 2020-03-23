<script>
  import Styling from './Styling.svelte';
  import NestedComponents from './NestedComponents.svelte';
	import HtmlTags from './HtmlTags.svelte';
	import Assignments from './Assignments.svelte';
	import Declarations from './Declarations.svelte';
	import Statements from './Statements.svelte';
	import UpdatingArrays from './UpdatingArrays.svelte';

	export let name;
	const src = 'images/myGlock.png';
</script>

<main>
	<table>
	  <caption>Svelte Tutorial</caption>
		<thead>
		  <tr>
			  <td>Svelte Section</td>
				<td>Svelte Topic</td>
				<td>Svelte Example</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Adding Data</h4></td>
			  <td>
				  <h1>Hello {name}!</h1>
	        <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
				</td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Dynamic Attributes</h4></td>
				<td>
				  <img src={src} alt="My Glock Image.">
				</td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Styling</h4></td>
				<td><Styling /></td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Nested Components</h4></td>
				<td><NestedComponents /></td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
				<td><h4>HTML Tags</h4></td>
				<td><HtmlTags /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
				<td><h4>Assignments</h4></td>
				<td><Assignments /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
			  <td><h4>Declarations</h4></td>
        <td><Declarations /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
				<td><h4>Statements</h4></td>
				<td><Statements /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
				<td><h4>Updating Arrays</h4></td>
				<td><UpdatingArrays /></td>
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
		padding: 0 0 0.5em, 0;
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