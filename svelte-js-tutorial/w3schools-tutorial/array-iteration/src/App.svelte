<script>
	/**
	 * Wait before the windows loads, before the click events shall be registered. 
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
    document.getElementById("btnArrForEachDemo").addEventListener('click', testArrForEach, false);
		document.getElementById("btnArrMapDemo").addEventListener('click', testArrayMap, false);
		document.getElementById("btnArrFilterDemo").addEventListener('click', testArrayFilter, false);
		document.getElementById("btnArrReduceDemo").addEventListener('click', testArrayReduce, false);
		document.getElementById("btnArrEveryDemo").addEventListener('click', testArrayEvery, false);
		document.getElementById("btnArrSomeDemo").addEventListener('click', testArraySome, false);
		document.getElementById("btnArrayFindDemo").addEventListener('click', testArrayFind, false);
		document.getElementById("btnArrayFindIdxDemo").addEventListener('click', testArrayFindIdx, false);
	} //end registerClickEvents()

  function testArrForEach() {
    console.log("**********In testArrForEach()***********");
	  const numsArray = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array for demo => " + numsArray.join(", ");
	  console.log("Test array for demo => " + numsArray.join(", "));
		document.getElementById("arrayIterDemo").innerHTML = "Array forEach() demo: Print all the elements and indexes.<br>";
		console.log("Array forEach() demo: Print all the elements and indexes.");
		numsArray.forEach(printElementsCb);
	} //end testForEachTest()

	/**
	 * This callback shall be displayed as a global member.
	 * @callback printElementsCb
	 * @param {*} value
	 * @param {number} index
	 * @param {object} array
	 */
	function printElementsCb(value, index, array) {
		document.getElementById("arrayIterDemo").innerHTML += index + ". " + value + "<br>";
		console.log(index + ". " + value);
	} //end printElementsCb()

	function testArrayMap() {
    console.log("**********In testArrayMap()************");
		const intArray = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array for demo => " + intArray.join(", ");
	  console.log("Test array for demo => " + intArray.join(", "));
		document.getElementById("arrayIterDemo").innerHTML = "Array map() demo: Multiple all the elements by 2.<br>";
		console.log("Array map() demo: Multiple all the elements by 2.");
		const doubledArray = intArray.map(doubleElementsCb);
		doubledArray.forEach(printElementsCb);
	} //end testArrayMap()

	/**
	 * This callback shall be displayed as a global member.
	 * @callback doubleElementsCb
	 * @param {*} value
	 * @param {number} index
	 * @param {object }array
	 */
	function doubleElementsCb(value, index, array) {
		return value * 2;
	} //end doubleElementsCb()

	function testArrayFilter() {
    console.log("**********In testArrayFilter()**********");
		const numsArray = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array for demo => " + numsArray.join(", ");
	  console.log("Test array for demo => " + numsArray.join(", "));
		document.getElementById("arrayIterDemo").innerHTML = "Array filter() demo: Return all values > 18.<br>";
		console.log("Array filter() demo: Return all values > 18.");
		const filteredArray = numsArray.filter(filterIntArray);
		filteredArray.forEach(printElementsCb);
	} //end testArrayFilter()

	/**
	 * This callback shall be displayed as a global member.
	 * @callback filterIntArray
	 * @param {*} value
	 * @param {number} index
	 * @param {object} array
	 */
	function filterIntArray(value, index, array) {
    console.log("**********In filterIntArray()**********");
		return value > 18;
	} //end filterIntArray()

	function testArrayReduce() {
    console.log("**********In testArrayReduce()**********");
		const intArrayTest = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array => " + intArrayTest.join(", ");
		console.log("Test array => " + intArrayTest.join(", "));
		const intArraySum = intArrayTest.reduce(calcArraySum, 100);
		document.getElementById("arrayIterDemo").innerHTML = "Array element total with initial 100 value => " + intArraySum;
		console.log("Array element total with initial 100 value => " + intArraySum);
	} //end testArrayReduce()

	/**
	 * This callback shall be displayed globally.
	 * @callback calcArraySum
	 * @param {number} total
	 * @param {number} value
	 * @param {number} index
	 * @param {object} array 
	 */
	function calcArraySum(total, value, index, array) {
		console.log("***********In calcArraySum()**********");
		return total += value;
	} //end calcArraySum()

	function testArrayEvery() {
    console.log("***********In testArrayEvery()***********");
		const intArrayTest = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array => " + intArrayTest.join(", ");
		console.log("Test array => " + intArrayTest.join(", "));
		const isAllOver18 = intArrayTest.every(checkOver18);
		document.getElementById("arrayIterDemo").innerHTML = "Are all array elements over 18? => " + isAllOver18;
		console.log("Are all array elements over 18? => " + isAllOver18);
	} //end testArrayEvery()

	function testArraySome() {
    console.log("***********In testArraySome()************");
		const intArray = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array => " + intArray.join(", ");
		console.log("Test array => " + intArray.join(", "));
		const isSomeOver18 = intArray.some(checkOver18);
		document.getElementById("arrayIterDemo").innerHTML = "Are some array elements over 18? => " + isSomeOver18;
		console.log("Are some array elements over 18? => " + isSomeOver18);
	} //end testArraySome()

	/**
	 * This callback shall be displayed globally.
	 * @callback checkOver18
	 * @param {number} value
	 * @param {number} index
	 * @param {object} array
	 */
	function checkOver18(value, index, array) {
		console.log("**********In checkOver18**********");
		return value > 18;
	} //end checkOver18()

	function testArrayFind() {
    console.log("**********In testArrayFind()**********");
		const intArray = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array => " + intArray.join(", ");
    console.log("Test array => " + intArray.join(", "));
    const firstElement = intArray.find(checkOver18);
		document.getElementById("arrayIterDemo").innerHTML = "First array element > 18 = " + firstElement;
		console.log("First array element > 18 = " + firstElement);
	} //end testArrayFind()

	function testArrayFindIdx() {
    console.log("**********In testFindIndex()**********");
		const intArrayTest = createIntArray();
		document.getElementById("testArrayDemo").innerHTML = "Test array elements => " + intArrayTest.join(", ");
		console.log("Test array elements => " + intArrayTest.join(", "));
		const firstIdx = intArrayTest.findIndex(checkOver18);
		document.getElementById("arrayIterDemo").innerHTML = "First index of array element > 18 = " + firstIdx;
		console.log("First index of array element > 18 = " + firstIdx);
	} //end testFindIndex()

	function createIntArray() {
    console.log("**********In createIntArray()**********");
		const a = [5, 4, 9, 16, 25];
		return a;
	} //end createIntArray()
</script>

<main>
  <section class="heading">
    <h1>Javascript Array Iteration Exercises</h1>
	</section>
	<section class="content">
    <h2>JS Array.forEach() Example</h2>
		<p>
			Calls a function once for each array element.
		</p>
		<p id="testArrayDemo"
		   class="testArrayDemo"
		   alt="Test array for demo"	 
		>
		</p>
		<p id="arrayIterDemo"
		   class="arrayDemo"
		   alt="Array iteration demo"
		>
		</p>
		<p>
			<button id="btnArrForEachDemo"
			        class="btnArray"
							type="button"
							alt="Array for each demo button"
			>
				Array For Each Demo
			</button>
			<button id="btnArrMapDemo"
			        class="btnArray"
							type="button"
							alt="Array map demo button"
			>
				Array Map Demo
			</button>
			<button id="btnArrFilterDemo"
			        class="btnArray"
							type="button"
							alt="Array filter demo button"
			>
				Array Filter Demo
			</button>
		</p>
		<p>
			<button id="btnArrReduceDemo"
			        class="btnArray"
			        type="button"
							alt="Array reduce demo button"				
			>
				Array Reduce Demo
			</button>
			<button id="btnArrEveryDemo"
			        class="btnArray"
							type="buton"
							alt="Array every demo button"
			>
				Array Every Demo
			</button>
			<button id="btnArrSomeDemo"
			        class="btnArray"
							type="button"
							alt="Array some demo button"
			>
        Array Some Demo
			</button>
		</p>
		<p>
			<button id="btnArrayFindDemo"
			        class="btnArray"
							type="button"
							alt="Array find demo button"
			>
				Array Find Demo
			</button>
			<button id="btnArrayFindIdxDemo"
			        class="btnArray"
							type="button"
							alt="Array find index demo button"
			>
				Array Find Index Demo
			</button>
		</p>
	</section>
	<footer>
		Last Updated: 2021-06-13
	</footer>
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