<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
	const footerImage = './images/machine-learning-playlist.png';

	import TextInputs from './TextInputs.svelte';
	import NumericInputs from './NumericInputs.svelte';
	import CheckboxInputs from './CheckboxInputs.svelte';
	import GroupInputs from './GroupInputs.svelte';
	//import TextAreaInputs from './TextAreaInputs.svelte';
	import SelectBindings from './SelectBindings.svelte';
	import SelectMultiple from './SelectMultiple.svelte';
	import ContentEditableBindings from './ContentEditableBindings.svelte';
	import EachBlockBindings from './EachBlockBindings.svelte';
	import MediaElements from './MediaElements.svelte';
	import DimsBindings from './DimensionsBindings.svelte';
	import ThisBindings from './ThisBindings.svelte';
</script>

<main>
	<section class="heading">
	  This Webpage shall display Svelte Bindings Tutorial exercises.
	</section>
	
	<section class="content">
	  <table>
		  <caption>Svelte Bindings Tutorial Exercises</caption>
      <thead>
			  <tr>
				  <td>Svelte Concept</td>
					<td>Svelte Project Exercise</td>
				</tr>
			</thead>
      <tbody>
			  <tr>
				  <td class="exerciseName">Bindings ==> Text Inputs</td>
					<td><TextInputs /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Numeric Inputs</td>
					<td><NumericInputs /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Checkbox Inputs</td>
				  <td><CheckboxInputs /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Binding ==> Group Inputs</td>
					<td><GroupInputs /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Binding ==> Textarea Inputs</td>
					<td>//TODO: Fix textarea bug.</td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Select Bindings</td>
					<td><SelectBindings /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Select Multiple</td>
				  <td><SelectMultiple /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Content Editable Bindings</td>
					<td><ContentEditableBindings /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Each Block Bindings</td>
					<td><EachBlockBindings /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Media Elements Bindings</td>
					<td><MediaElements /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> Dimensions Bindings</td>
					<td><DimsBindings /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Bindings ==> This Bindings</td>
					<td><ThisBindings /></td>
				</tr>
			</tbody>
		</table>
	</section>

	<footer>
	  <figure>
		  <img
        src={footerImage}
				width="125"
				height="75"
				alt="Footer image of machine learning."
			>
			<figcaption>
			  <a href="https://svelte.dev">
				  Svelte Info
				</a>
			</figcaption>
		</figure>
		<p>
		  This Webpage is HTML5 compliant.<br />
      Last Updated: 2020-06-20
		</p>
	</footer>
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