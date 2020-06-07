<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
	import IfBlocks from './IfBlocks.svelte';
	import ElseIfBlocks from './ElseIfBlocks.svelte';
	import EachBlocks from './EachBlocks.svelte';
	import KeyedEachBlocks from './keyed-each-blocks/KeyedEachBlocks.svelte';
  import AwaitBlocks from './AwaitBlocks.svelte';

	const footerImage = './images/machine-learning-playlist.png';
</script>

<main>
  <section class="heading">
	  <p>
		  This Webpage shall display Svelte Tutorial exercises from the Svelte Website.
		</p>
	</section>
	<section class="content">
	  <table>
	    <caption>Svelte Tutorial Exercises</caption>
		  <thead>
		    <tr>
			    <td>Svelte Exercise</td>
				  <td>Svelte Project</td>
			  </tr>
		  </thead>
		  <tbody>
		    <tr>
			    <td class="exerciseName">Logic ==> If Blocks</td>
          <td><IfBlocks user={{ loggedIn: false }} /></td>
			  </tr>
			  <tr>
			    <td class="exerciseName">Logic ==> If Else Blocks</td>
				  <td><ElseIfBlocks x={8} /></td>
			  </tr>
			  <tr>
			    <td class="exerciseName">Logic ==> Each Blocks</td>
				  <td><EachBlocks /></td>
			  </tr>
			  <tr>
			    <td class="exerciseName">Logic ==> Keyed Each Blocks</td>
				  <td><KeyedEachBlocks /></td>
			  </tr>
        <tr>
          <td class="exerciseName">Logic ==> Await Blocks</td>
          <td><AwaitBlocks /></td>
        </tr>
		  </tbody>
	  </table>
	</section>
	<footer>
	  <section class="footerDetails">
		  <figure>
        <img
          src={footerImage}
          width="125"
          height="75"
          alt="Footer of machine learning."
        >
        <figcaption>
          <a href="https://svelte.dev/">
            Svelte JS Info
          </a>
        </figcaption>
      </figure>
			<p>
        This Webpage is HTML5 compliant.<br />
        Last Updated: 2020-06-06
      </p>
		</section>
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
  }
</style>