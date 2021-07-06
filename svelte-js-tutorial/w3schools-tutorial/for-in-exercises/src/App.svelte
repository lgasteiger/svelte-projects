<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnForEachDemo").addEventListener('click', testArrayForEach, false);
	}, false);

	function testArrayForEach() {
    console.log("***********In testArrayForEach()**********");
    const testIntArray = [45, 4, 9, 16, 25];;
    document.getElementById("forEachDemo").innerHTML = "Test array elements:<br>";
		console.log("Test array elements:");
		testIntArray.forEach(printArrayElements);
	} //end testArrayForEach()

	function printArrayElements(value, index, array) {
    console.log("**********In printArrayElements()**********");
		let arrayElement = index + ". " + value + "<br>"
		document.getElementById("forEachDemo").innerHTML += arrayElement;
		console.log(arrayElement);
	} //end printArrayElements()
</script>

<main>
	<section class="heading">
    <h2>Javascript Array.forEach() Exercise</h2>
		<p>
			Calls a function once for each array element.
		</p>
		<p id="forEachDemo"
		   class="forEachDemo"
			 alt="Array for each demo"
		>
		</p>
		<p>
			<button id="btnForEachDemo"
			        class="btnDemo"
			        type="button"
							alt="Array for each demo button"				
			>
				For Each Demo
			</button>
		</p>
	</section>
	<section class="content">

	</section>
	<footer>
		Last updated: 2021-06-14
	</footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: lightgray
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