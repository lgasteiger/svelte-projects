<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
	const footerImage = './images/machine-learning-playlist.png';

	import DomEvents from './DomEvents.svelte';
	import InlineHandlers from './InlineHandlers.svelte';
	import EventModifiers from './EventModifiers.svelte';
	import ComponentEvents from './component-events/ComponentEvents.svelte';
	import EventForwarding from './event-forwarding/EventForwarding.svelte';
	import DomEventForwarding from './dom-event-forwarding/DomEventForwarding.svelte';
</script>

<main>
  <section class="heading">
	  <p>
		  This Webpage shall display Svelte Tutorial exercises from the Svelte Website.
		</p>
	</section>
	<section class="content">
	  <table>
		  <caption>
			  Svelte Tutorial Exercises
			</caption>
			<thead>
			  <tr>
				  <td>Svelte Exercise</td>
					<td>Svelte Project</td>
				</tr>
			</thead>
			<tbody>
			  <tr>
				  <td class="exerciseName">Events ==> DOM Events</td>
					<td><DomEvents /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Events ==> Inline Handlers</td>
					<td><InlineHandlers /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Events ==> Event Modifiers</td>
					<td><EventModifiers /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Events ==> Component Events</td>
					<td><ComponentEvents /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Events ==> Event Forwarding</td>
					<td><EventForwarding /></td>
				</tr>
				<tr>
				  <td class="exerciseName">Event ==> DOM Event Forwarding</td>
					<td><DomEventForwarding /></td>
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
				 alt="Footer image of Machine Learning."
			 >
			 <figcaption>
			  <a href="https://svelte.dev">
				  Svelte Info
				</a>
			 </figcaption>
		 </figure>
		 <p>
		   This Webpage is HTML5 compliant.<br />
        Last Updated: 2020-06-13
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