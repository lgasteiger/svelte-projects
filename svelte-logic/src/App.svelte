<script>
	import IfBlocks from './IfBlocks.svelte';
	import ElseIfBlocks from './ElseIfBlocks.svelte';
	import EachBlocks from './EachBlocks.svelte';
	import KeyedEachBlocks from './keyed-each-blocks/KeyedEachBlocks.svelte';

	const footerImage = './images/machine-learning-playlist.png';
	const headerImage = './images/data-science-4.jpeg';
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
        Last Updated: 2020-05-11
      </p>
		</section>
	</footer>
</main>

<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.exerciseName {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	table caption {
		padding: 0 0 0.5em 0;
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

  body {
    font: 100% arial, helvetica, sans-serif;
    background: #ccc;
  } /* end body */

  .heading {
    background: url('./images/data-science-4.jpeg') left/275px 95px no-repeat;
    color:rgb(110,24,2);
    text-align: center;
    padding: 75px;
  } /* end .heading */

  .content p {
    font-family: 'Nunito Sans', sans-serif;
  } /* end .content */  

  h2 {
    text-shadow: -2px 2px 2px #fff;
    padding: 0.15em 0 0.25em 0.5em;
    border-radius: 100px;
    border: 3px solid #fff;
    background: #06c;
    margin: 1em 32.85em 0.5em 0;
  } /* end h2 */

  a {
    transition: 0.5s;
  } /* end a */

  footer {
    text-align: center;
    clear: both;
  } /* footer */

  footer figure {
    padding: 5em 0 0 0;
  } /* footer figure */

  footer figure a {
    color: rgb(110,24,2);
    text-decoration: none;
    border-bottom: 0.2em solid rgb(110,24,2);
    transition: 0.5s;
  }

  footer figure a:hover {
    border-color: #000;
    color: #fc0;
    background: rgb(110,24,2);
    border-radius: 1em;
    padding: 0.3em;
  }

  footer p {
    transform: scale(0.75);
  }

  footer p:before {
    content: "*** ";
    background: rgb(110,24,2);
    color: #fc0;
  }

  footer p:after {
    content: " ***";
    background: rgb(110,24,2);
    color: #fc0;
  }
</style>