<script>
  /**
	 * Wait before the window loads, before the click events shall be registered.
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
    document.getElementById("btnUpdateArray").addEventListener('click', updateArray, false);
		document.getElementById("btnAddElement").addEventListener('click', addElement, false);
	} //end registerClickEvents()

  function createArray() {
    console.log("**********In createArray()***********");
		const cars = ["Saab", "Volvo", "BMV"];
    displayArray(cars);    
		return cars;
	}	//end createArray()

	function updateArray() {
    console.log("**********In updateArray()**********");
		const cars = createArray();
		cars[0] = "Toyota";
		displayArray(cars);
	} //end updateArray()

	function addElement() {
    console.log("**********In addElement()**********");
		const cars = createArray();
		cars.push("Tesla");
		displayArray(cars);
	} //end addElement()

	function displayArray(a) {
    console.log("cars Array: " + a);
		document.getElementById("constArrayDemo").innerHTML = "cars Array: " + a;
	} //end displayArray()
</script>

<main>
  <section class="heading">
	  <h2>
		  Javascript Const Array Exercise
		</h2>
	</section>
	<section class="content">
	  <p>
		  Declaring a const array does NOT make the elements immutable.
		</p>
		
		<p id="constArrayDemo"
		   class="constArrayDemo"
			 alt="Const array demo"
		>
		</p>
    <p>
		  <button id="btnUpdateArray"
			        class="btnUpdateArray"
							type="button"
							alt="Update array button"
			>
		    Update Array Element
		  </button>
			<button id="btnAddElement"
			        class="btnAddElement"
							type="button"
							alt="Add array button"
			>
			  Add Array Element
			</button>
		</p>
	</section>
  <footer>
	  Last Updated: 2021-05-20
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