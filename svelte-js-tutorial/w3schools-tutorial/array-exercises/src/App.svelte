<script>
	/**
	 * Wait before the window loads, before the click events shall be registered.  
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
    console.log("**********In registerClickEvents()**********");
		document.getElementById("btnForEachDemo").addEventListener('click', testForEach, false);
		document.getElementById("btnForDemo").addEventListener('click', testForLoop, false);
	} //end registerClickEvents()

	function testForEach() {
		console.log("**********In testForEach()**********");
		const fruitBasket = ["Bananas", "Oranges", "Apples", "Mangos"];
    let outputText = "<ul>";

		fruitBasket.forEach(loopThroughArray);
		outputText += "</ul>";
		document.getElementById("forEachDemo").innerHTML = outputText;
		console.log("outputText: " + outputText);
	} //end testForEach()

	function loopThroughArray(value) {
		console.log("**********In loopThroughArray()**********");
		let outputText = "<li>" + value + "</li>";
		document.getElementById("forEachDemo").innerHTML = outputText;
		console.log("outputText: " + outputText);
	} //end loopThroughArray()

	function testForLoop() {
		console.log("**********In testForLoop()**********");
    const fruitCup = ["Bananas", "Oranges", "Apples", "Mangos"];
		let outputText = "<ul>";
    
		for (let i = 0; i < fruitCup.length; i++) {
      outputText += "<li>" + fruitCup[i] + "</li>";
		} //end for

    outputText += "</ul>";
		document.getElementById("forDemo").innerHTML = outputText;
		console.log("outputText: " + outputText);
	} //end testForLoop()
</script>

<main>
	<section class="heading">
    <h2>Javascript Looping Arrays Elements Exercise</h2>
	</section>
	<section class="content">
    <p>
			Array.forEach() calls a function for each array element.
		</p>
		<p id="forEachDemo"
		   class="forEachDemo"
			 alt="Array forEach exercise demo"
		>
		</p>
		<p>
			<button id="btnForEachDemo"
			        class="btnForEachDemo"
							type="button"
							alt="Array for each demo button"
			>
        Test forEach()
			</button>
		</p>

		<p>
			Array For is the safest way to loop through arrays.
		</p>
		<p id="forDemo"
		   class="forDemo"
			 alt="Arry for exercise demo"
		>
		</p>
		<p>
			<button id="btnForDemo"
			        class="btnForDemo"
			        type="button"
			        alt="Array for demo button"
			>
			  Test For Loop
			</button>
		</p>
	</section>
	<footer>
		Last Updated: 2021-05-25
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