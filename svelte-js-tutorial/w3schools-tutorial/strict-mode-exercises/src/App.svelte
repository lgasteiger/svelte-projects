<script>
  /**
	 * Wait before the window loads, before the click event is registered.
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

	function registerClickEvents() {
    console.log("**********In registerClickEvents()**********");
		document.getElementById("btnReadOnlyPropDemo").addEventListener('click', testReadOnlyProp, false);
		document.getElementById("btnGetOnlyPropDemo").addEventListener('click', testGetOnlyProp, false);
		document.getElementById("btnVarDeclareDemo").addEventListener('click', testVarDeclare, false);
		document.getElementById("btnObjDeclareDemo").addEventListener('click', testObjDeclare, false);
		document.getElementById("btnThisDemo").addEventListener('click', testThisKeyword, false);
	} //end registerClickEvents()

	function testVarDeclare() {
    console.log("**********In testVarDeclare()**********");
    const h2Value = 'With "use strict":';
		const h3Value = "Using a variable without declaring it, is not allowed."
		displayHeadings(h2Value, h3Value, displayH2, displayH3);
		myVar = 3.14;
	} //end testVarDeclare()

	function testObjDeclare() {
    console.log("**********In testObjDeclare()**********");
		const h2Data = 'With "use strict":';
		const h3Data = "Using an object without declaring it, is not allowed."
		displayHeadings(h2Data, h3Data, displayH2, displayH3);
		myObj = {
      p1:10
			,p2:20
		}; //end obj x
	} //end testObjDeclare()

	function testThisKeyword() {
    console.log("**********In testThisKeyword()**********");
		const h2Data = 'With "use strict":';
		const h3Data = 'Inside functions, the "this" keyword is no longer the global object if not specified:';
	  displayHeadings(h2Data, h3Data, displayH2, displayH3);
		alert(this);
	} //end testThisKeyword()

  function displayHeadings(strH2, strH3, cbDisplayH2, cbDisplayH3) {
    console.log("**********In displayHeadings()**********");
		cbDisplayH2(strH2);
		cbDisplayH3(strH3);
	} //end displayHeadings()

	/**
	 * This callback function shall be displayed globally.
	 * @callback displayH2
	 * @param {string} strHeading 
	 */
	function displayH2(strHeading) {
    console.log("**********In displayH2()**********");
		document.getElementById("h2Output").innerHTML = strHeading;
	} //end displayH2()

	/**
	 * This callback function shall be displayed globally.
	 * @callback displayH3
	 * @param strHeading
	 */
	function displayH3(strHeading) {
    console.log("**********In displayH3()**********");
		document.getElementById("h3Output").innerHTML = strHeading;
	} //end displayH3()

	function testReadOnlyProp() {
		console.log("**********In testReadOnlyProp()**********");
    const obj = {};
	  Object.defineProperty(obj, "x", {
      value      : 0
		  ,writeable : false
	  });

		obj.x = 3.14;
	} //end testUseStrict()

	function testGetOnlyProp() {
    console.log("**********In testGetOnlyProp()**********");
	  const obj = {
      get x() {
        return 0;
			}
		}; //end obj
 
    obj.x = 3.14;
	} //end testGetOnlyProp()

	function testEvalScope() {
    console.log("**********In testEvalScope()**********");
    eval ("let x = 2;");
		alert (x);
	} //end testEvalScope()
</script>

<main>
	<h1>JS Use Strict Mode Exercises</h1>
	<h2 id="h2Output"
	    class="h2Output"
	    alt="Heading 2 output"		
	>
	</h2>
	<h3 id="h3Output"
	    class="h3Output"
			alt="Heading 3 output"
	>
	</h3>

	<p id="useStrictDemo"
	   class="useStrictDemo"
		 alt="Javascript use strict demo"
	>
	</p>

	<p>
    <button id="btnVarDeclareDemo"
		        class="btnDemo"
						type="button"
						alt="Javascript use strict variable declaration demo button"
		>
      Var Declare Demo
		</button>
		<button id="btnObjDeclareDemo"
		        class="btnDemo"
						type="button"
						alt="Javascript use strict object declaration demo button"
		>
      Obj Declare Demo
		</button>
		<button id="btnDelVarDemo"
		        class="btnDemo"
		        type="button"
						alt="Javascript use strict delete variable demo button"				
		>
			Del Var Demo
		</button>
	</p>
	<p>
		<button id="btnReadOnlyPropDemo"
	          class="btnDemo"
					  type="button"
					  alt="Javascript use strict read only property demo button"
	  >
		  Read Only Demo
	  </button>
    <button id="btnGetOnlyPropDemo"
	          class="btnDemo"
					  type="button"
					  alt="Javascript use strict get only property demo button"
	  >
      Get Only Demo
	  </button>
		<button id="btnEvalScopeDemo"
	          class="btnDemo"
					  type="button"
					  alt="Javascript use strict "
	  >
      Eval Scope Demo
	  </button>
		<button id="btnThisDemo"
		        class="btnDemo"
						type="button"
						alt="Javascript use strict this keyword demo"
		>
      this Keyword Demo
		</button>
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