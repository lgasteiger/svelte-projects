<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
	const footerImage = './images/machine-learning-playlist.png';

  function getTodaysDate() {
		const todaysDate = new Date().toISOString().slice(0, 10);
		return todaysDate;
	} //end getTodaysDate
</script>

<main>
	<section class="heading">
	  This Webpage shall display Svelte Lifecycle Tutorial Exercises.
	</section>
	
	<section class="content">
	  <table>
		
		</table>
	</section>
	
	<footer>
	  <figure>
		  <img
        src={footerImage}
				width="125"
				height="75"
				alt="Footer Image of Machine Learning."
			>
			<figcaption>
			  <a href="https://svelte.dev">
				  Svelte Tutorial
				</a>
			</figcaption>
		</figure>
    <p>
		  This Webpage is HTML5 compliant.<br>
			Last Updated: {getTodaysDate()}
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