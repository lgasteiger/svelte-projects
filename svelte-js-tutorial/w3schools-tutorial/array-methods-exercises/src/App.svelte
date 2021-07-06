<script>
	/**
	 * Wait before the windows loads, before the click events shall be registered.
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
    document.getElementById("btnToStringDemo").addEventListener('click', toStringExercise, false);
		document.getElementById("btnJoinDemo").addEventListener('click', joinExercise, false);
		document.getElementById("btnPopDemo").addEventListener('click', popExercise, false);
		document.getElementById("btnPushDemo").addEventListener('click', pushExercise, false);
	  document.getElementById("btnShiftDemo").addEventListener('click', shiftExercise, false);
		document.getElementById("btnUnshiftDemo").addEventListener('click', unshiftExercise, false);
		document.getElementById("btnSpliceDemo1").addEventListener('click', spliceExer1, false);
		document.getElementById("btnSpliceDemo2").addEventListener('click', spliceExer2, false);
		document.getElementById("btnSpliceDemo3").addEventListener('click', spliceExer3, false);
		document.getElementById("btnSliceDemo1").addEventListener('click', sliceExer1, false);
		document.getElementById("btnSliceDemo2").addEventListener('click', sliceExer2, false);
		document.getElementById("btnSliceDemo3").addEventListener('click', sliceExer3, false);
	} //end registerClickEvents()

  function toStringExercise() {
    console.log("**********In toStringExercise()**********");
		const fruitBowl = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitBowl.join(", ");
    document.getElementById("arrayMethodsDemo").innerHTML = "toString() demo: " + fruitBowl.toString();
	  console.log("toString() demo: " + fruitBowl.toString());
	} //end toStringExercise()

	function joinExercise() {
	  console.log("**********In joinExercise()*********");
		const fruitBowl = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitBowl.join(", ");
		document.getElementById("arrayMethodsDemo").innerHTML = "join() demo: " + fruitBowl.join(" * ");
    console.log("join() demo: " + fruitBowl.join(" * "));
	} //end joinExercise()

	function popExercise() {
    console.log("**********In popExercise() Stack Example***********");
		const fruitArray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitArray.join(", ");
		const poppedElem = fruitArray.pop();
		console.log("Popped element: " + poppedElem);
		document.getElementById("arrayMethodsDemo").innerHTML = "pop() demo, stack example: " + fruitArray.join(", ");
		console.log("pop() demo, stack example: " + fruitArray.join(", "));
	} //end popExercise()

	function pushExercise() {
    console.log("**********In pushExercise() Stack Example**********");
		const fruitTray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitTray.join(", ");
		const arraySize = fruitTray.push("Kiwi");
		console.log("New array size: " + arraySize);
		document.getElementById("arrayMethodsDemo").innerHTML = "push() demo, stack example: " + fruitTray. join(", ");
		console.log("push() demo, stack example: " + fruitTray.join(", "));
	} //end pushExercise()

	function shiftExercise() {
    console.log("**********In shiftExercise(), Queue Example**********");
		const fruitBowl = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitBowl.join(", ");
		const shiftedOutElem = fruitBowl.shift();
		console.log("Shifted out element: " + shiftedOutElem);
		document.getElementById("arrayMethodsDemo").innerHTML = "shift() demo, queue example: " + fruitBowl.join(", ");
		console.log("shift() demo, queue example: " + fruitBowl.join(", "));
	} //end shiftExercise()

	function unshiftExercise() {
    console.log("**********In unshiftExercise(), Queue Example***********");
		const fruitTray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitTray.join(", ");
		const arraySize = fruitTray.unshift("Lemon");
		console.log("New array size: " + arraySize);
		document.getElementById("arrayMethodsDemo").innerHTML = "unshift() demo, queue example: " + fruitTray.join(", ");
		console.log("unshift() demo, queue example: " + fruitTray.join(", "));
	} //end unshiftExercise()

	function spliceExer1() {
    console.log("**********In sliceExer1()**********");
		const fruitArray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitArray.join(", ");
		const removedElements = fruitArray.splice(2, 0, "Lemon", "Kiwi");
		console.log("Deleted elements: " + removedElements.join(", "));
		document.getElementById("arrayMethodsDemo").innerHTML = "splice() exercise 1 demo: " + fruitArray.join(", "); 
    console.log("splice() exercise 1 demo: " + fruitArray.join(", "));
	} //end spliceExer1()

	function spliceExer2() {
    console.log("**********In spliceExer2()**********");
		const fruitTable = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitTable.join(", ");
		const removedElements = fruitTable.splice(2, 2, "Lemon", "Kiwi");
		console.log("Deleted elements: " + removedElements.join(", "));
		document.getElementById("arrayMethodsDemo").innerHTML = "splice() exercise 2 demo: " + fruitTable.join(", ");
		console.log("splice() exercise 2 demo: " + fruitTable.join(", "));
	} //end spliceExer2()

	function spliceExer3() {
    console.log("**********In sliceExer3()**********");
		const fruitArray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitArray.join(", ");
		const deletedElem = fruitArray.splice(0, 1);
		console.log("Deleted element: " + deletedElem);
		document.getElementById("arrayMethodsDemo").innerHTML = "splice() exercise 3 demo: " + fruitArray.join(", ");
		console.log("splice() exercise 3 demo: " + fruitArray.join(", "));
	} //end spliceExer3()

	function sliceExer1() {
    console.log("**********In sliceExer1()**********");
		const fruitArray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitArray.join(", ");
		const newArray = fruitArray.slice(1);
		document.getElementById("arrayMethodsDemo").innerHTML = "slice() exercise 1 demo: " + newArray.join(", ");
    console.log("slice() exercise 1 demo: " + newArray.join(", "));
	} //end sliceExer1()

	function sliceExer2() {
    console.log("**********In sliceExer2()**********");
		const fruitBasket = createArray();
    const deletedElement = fruitBasket.splice(2, 0, "Lemon");
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitBasket.join(", ");
		console.log("fruitArrayUpdate: " + fruitBasket.join(", "));
		const slicedArray = fruitBasket.slice(3);
    document.getElementById("arrayMethodsDemo").innerHTML = "slice() exercise 2 demo: " + slicedArray.join(", ");
		console.log("slicedArray: " + slicedArray.join(", "));
	} //end sliceExer2()

	function sliceExer3() {
    console.log("**********In sliceExer3()**********");
		const fruitArray = createArray();
		const deletedElement = fruitArray.splice(2, 0, "Lemon");
		document.getElementById("originalArray").innerHTML = "Original array: " + fruitArray.join(", ");
		const slicedArray = fruitArray.slice(1, 3);
		document.getElementById("arrayMethodsDemo").innerHTML = "slice() exercise 3 demo: " + slicedArray.join(", ");
		console.log("slicedArray: " + slicedArray.join(", "));
	} //end sliceExer3()

	function createArray() {
    console.log("**********In createArray()***********");
		const fruitBasket = ["Banana", "Orange", "Apple", "Mango"];
		console.log("fruitBasket array: " + fruitBasket.join(", "));
		return fruitBasket;
	} //end createArray()
</script>

<main>
	<section class="heading">
    <h1>Javascript Array Methods Exercises</h1>
	</section>
	<section class="content">
		<p id="originalArray"
		   class="originalArray"
			 alt="Original array"
		>
		</p>
		<p id="arrayMethodsDemo"
		   class="arrayMethodsDemo"
			 alt="Array methods demo"
		>
		</p>
    <p>
			<button id="btnToStringDemo"
			        class="btnDemo"
							type="button"
							alt="toString demo button"
			>
        toString() Demo
			</button>
			<button id="btnJoinDemo"
			        class="btnDemo"
							type="button"
							alt="Join demo button"
			>
				join() Demo
			</button>
			<button id="btnPopDemo"
			        class="btnDemo"
							type="button"
							alt="Pop demo button"
			>
        pop() Demo
			</button>
			<button id="btnPushDemo"
			        class="btnDemo"
							type="button"
							alt="Push demo button"
			>
				push() Demo
			</button>
		</p>
		<p>
			<button id="btnShiftDemo"
			        class="btnDemo"
							type="button"
							alt="Shift demo button"
			>
				shift() Demo
			</button>
			<button id="btnUnshiftDemo"
			        class="btnDemo"
							type="button"
							alt="Unshift demo button"
			>
        unshift() Demo
			</button>
		</p>
		<p>
			<button id="btnSpliceDemo1"
			        class="btnDemo"
							type="button"
							alt="Splice demo 1 button"
			>
				splice() Demo 1
			</button>
			<button id="btnSpliceDemo2"
			        class="btnDemo"
							type="button"
							alt="Splice demo 2 button"
			>
				splice() Demo 2
			</button>
			<button id="btnSpliceDemo3"
			        class="btnDemo"
							type="button"
							alt="Splice demo 3 buton"
			>
				splice() Demo 3
			</button>
		</p>
		<p>
			<button id="btnSliceDemo1"
			        class="btnDemo"
							type="button"
							alt="Slice demo 1 button"
			>
				slice() Demo 1
			</button>
			<button id="btnSliceDemo2"
			        class="btnDemo"
							type="button"
							alt="Slice demo 2 button"
			>
				slice() Demo 2
			</button>
			<button id="btnSliceDemo3"
			        class="btnSliceDemo3"
							type="button"
							alt="Slice demo 3 button"
			>
				slice() Demo 3
			</button>
		</p>
	</section>
	<footer>
		Last Updated: 2021-05-31
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