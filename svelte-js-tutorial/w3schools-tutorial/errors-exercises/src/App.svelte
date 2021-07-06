<script>
	/**
	 * Wait before the window loads, before executing the anonymous function to register the button click
	 * event. 
	 */
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnErrorsDemo").addEventListener('click', testValidateInput, false)
	}, false);

  function testValidateInput() {
    console.log("**********testValidateInput()**********");
    document.getElementById("errorsDemoOutput").innerHTML = "";
	  let userInput = document.getElementById("errorsDemoInput").value;
		checkInput(userInput, displayOutput);
	} //end testValidateInput()

  function checkInput(input, cbDisplayer) {
    console.log("**********In validateInput()**********");
		try {
      if (input == "") {
        throw "Input field cannot be blank. Please enter a number.";
			} //end if 
			
			if (isNaN(input)) {
        throw "Input can only be a number. Please only enter a number.";
			} //end if
			
			if (input < 5) {
        throw "Input is too low. Please only enter numbers greater than 5.";
			} //end if

			if (input > 10) {
        throw "Input is too high. Please only enter numbers less than 10.";
			} //end if

      cbDisplayer("Thank you!");
		} catch (err) {
      cbDisplayer(err);
		} //end try...catch
	} //end checkInput()

	/**
	 * This callback function shall be displayed globally.
	 * @callback displayOutput
	 * @param {string} outputMess
	 */
	function displayOutput(outputMess) {
    document.getElementById("errorsDemoOutput").innerHTML = outputMess;
	} //end displayOutput()
</script>

<main>
	<h1>JS Errors Exercises</h1>
	<p>
		Please input a number between 5 and 10:
	</p>
	<p>
		<input id="errorsDemoInput"
		       class="errorsDemo"
					 type="input"
					 alt="Errors demo input"
		>
		<button id="btnErrorsDemo"
		        class="btnDemo"
						type="button"
						alt="Errors demo button"
		>
			Process
		</button>
	</p>
	<p id="errorsDemoOutput"
	   class="errorsDemoOutput"
		 alt="Errors demo output"
	>
	</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background-color: lightgray;
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