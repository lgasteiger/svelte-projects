<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
	const footerImage = './images/machine-learning-playlist.png';

	import TextInputs from './TextInputs.svelte';
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