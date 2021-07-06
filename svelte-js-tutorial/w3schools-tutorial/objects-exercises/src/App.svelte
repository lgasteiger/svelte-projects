<script>
	/**
	 * Wait before the window loads, before the click events shall be registered. 
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
		console.log("**********In registerClickEvents()**********");
    document.getElementById("btnFullName").addEventListener('click', getFullName, false);
	} //end registerClickEvents()

  function createObj() {
		console.log("**********In createObj()**********");
    const person = {
			firstName: "Elon"
			,lastName: "Musk"
			,id: 5566
			,fullName: function() {
        return this.firstName + " " + this.lastName;
			} //end fullname()
		}; //end person object

		return person;
	} //end createObj()

	function getFullName() {
		console.log("*********In getFullName**********");
    const objPerson = createObj();
		document.getElementById("jsObjDemo").innerHTML = "Full name: " + objPerson.fullName;
		console.log("Full name: " + objPerson.fullName);
	} //end getFullName
</script>

<main>
  <section class="heading">
    <h2>Javascript Objects</h2>
	</section>
	<section class="content">
    <p>
			An object method is a function definition, stored as a property value.
		</p>
		<p id="jsObjDemo"
		   class="jsObjDemo"
		   alt="Javascript object exercise demo"
		>
		</p>
		<button id="btnFullName"
		        class="btnFullName"
						type="button"
						alt="Get full name button"
		>
      Get Full Name
		</button>
	</section>
	<footer>
		Last Updated: 2021-05-23
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