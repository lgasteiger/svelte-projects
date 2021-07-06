<script>
	/**
	 * Wait before the window loads, before the click events shall be registered. 
	 */
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
    document.getElementById("btnStrSort").addEventListener('click', strSortExercise, false);
		document.getElementById("btnStrRevSort").addEventListener('click', strSortReverseExer, false);
		document.getElementById("btnFindMaxInt").addEventListener('click', findArrayMax, false);
		document.getElementById("btnFindMinInt").addEventListener('click', findArrayMin, false);
		document.getElementById("btnFindMaxIntV2").addEventListener('click', findArrayMax2, false);
	  document.getElementById("btnFindMinIntV2").addEventListener('click', findArrayMin2, false);
		document.getElementById("btnSortObjArrayByYear").addEventListener('click', sortObjArrayByYear, false);
	  document.getElementById("btnSortObjArrayByType").addEventListener('click', sortObjArrayByType, false);
	} //end registerClickEvents()

	function strSortExercise() {
    console.log("**********In strSortExercise**********");
    const testArray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + testArray.join(", ");
		console.log("Original array: " + testArray.join(", "));
		testArray.sort();
    document.getElementById("updatedArray").innerHTML = "Sorted array: " + testArray.join(", ");
		console.log("Sorted array: " + testArray.join(", "));
	} //end strSortExercise()

	function strSortReverseExer() {
    console.log("**********In strSortReverseExer()**********");
		const newArray = createArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + newArray.join(", ");
		newArray.sort();
		console.log("Sorted string array: " + newArray.join(", "));
		newArray.reverse();
		document.getElementById("updatedArray").innerHTML = "Reverse sorted array: " + newArray.join(", ");
		console.log("Reverse sorted string array: " + newArray.join(", "));
	} //end strSortReverseExer()

	function findArrayMax() {
    console.log("**********In findArrayMax()***********");
		const intArrayTest = createIntArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + intArrayTest.join(", ");
    console.log("Original array: " + intArrayTest.join(", "));
		const intMax = Math.max.apply(null, intArrayTest);
		document.getElementById("numDemo").innerHTML = "Max integer in array: " + intMax;
		console.log("Max integer: " + intMax);
	} //end findArrayMax()

	function findArrayMax2() {
    console.log("**********In findArrayMax2()**********");
		const intArray = createIntArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + intArray.join(", ");
    console.log("Original array: " + intArray.join(", "));
    const arrayMax = findMaxInArray(intArray);
		document.getElementById("numDemo").innerHTML = "Max integer in array: " + arrayMax;
		console.log("Max integer in array: " + arrayMax); 
	} //end findArrayMax2()

	function findMaxInArray(intArray) {
    let len = intArray.length;
		let max = -Infinity;
		while (len--) {
      if (intArray[len] > max) {
        max = intArray[len];
			} //end if
		} //end while

		return max;
	} //end findMaxInArray()

	function findArrayMin() {
	  console.log("**********In findArrayMin()**********");
		const intArray = createIntArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + intArray.join(", ");
		console.log("Original array: " + intArray.join(", "));
		const intMin = Math.min.apply(null, intArray);
		document.getElementById("numDemo").innerHTML = "Min integer in array: " + intMin;
		console.log("Min integer in array: " + intMin);
	} //end findArrayMin()

	function findArrayMin2() {
    console.log("**********In findArrayMin2()**********");
		const intArray = createIntArray();
		document.getElementById("originalArray").innerHTML = "Original array: " + intArray.join(", ");
		console.log("Original array: " + intArray.join(", "));
    const intMin = findMinInArray(intArray);
		document.getElementById("numDemo").innerHTML = "Min integer in array: " + intMin;
		console.log("Min integer in array: " + intMin);
	} //end findArrayMin2()

	function findMinInArray(intArray) {
    console.log("**********findMinInArray**********");
    let len = intArray.length;
		let min = Infinity;
		while (len--) {
      if (intArray[len] < min) {
        min = intArray[len];
			} //end if
		} //end while

		return min;
	} //end findMinInArray()

	function sortObjArrayByYear() {
    console.log("**********In sortObjArrayByYear()**********");
		const objArrayTest = createObjArray();
		printObjArray(false, objArrayTest);
		objArrayTest.sort((a, b) => {
      return a.year - b.year;
		}); //end compare sort
		printObjArray(true, objArrayTest);
	} //end sortObjByYear()

	function sortObjArrayByType() {
    console.log("*********In sortObjArrayByType()**********");
		const objArrayTest = createObjArray();
		printObjArray(false, objArrayTest);
		objArrayTest.sort((a, b) => {
      let x = a.type.toLowerCase();
			let y = b.type.toLowerCase();
			
			if (x < y) {
        return -1;
			} //end if

			if (x > y) {
        return 1;
			} //end if

			return 0;
		}); //end compare sort

		printObjArray(true, objArrayTest);
	} //end sortObjArrayByType()

	function createArray() {
    console.log("**********In createArray()**********");
    const defaultArray = ["Banana", "Orange", "Apple", "Mango"];
		console.log("Created array: " + defaultArray.join(", "));
		return defaultArray;
	} //end createArray()

	function createIntArray() {
    console.log("**********In createIntArray()**********");
		const intArray = [40, 100, 1, 5, 25, 10];
		console.log("Integer array elements: " + intArray.join(", "));
		return intArray;
	} //end createIntArray()

	function createObjArray() {
    console.log("**********In createObjArray()**********");
		const cars = [
      {type:"Volvo", year:2016}
			,{type:"Saab", year:2001}
			,{type:"BMW", year:2010}
		] //end cars obj

		return cars;
	} //end createObjArray()

	function printObjArray(sortedFlag, objArray) {
    console.log("**********In printObjArray**********");
		let keyCount = 0;

		if (sortedFlag == false) {
      document.getElementById("originalArray").innerHTML = "Original object array => ";
			console.log("Original object array => ");
      for (let obj of objArray) {
        for (let key in obj) {
          document.getElementById("originalArray").innerHTML += key + ":" + obj[key];
					console.log(key + ":" + obj[key]);
					if (keyCount < 1) {
            document.getElementById("originalArray").innerHTML += ", ";
					  console.log(", ");
						keyCount++;
					} //end if
			  } //end for in

				document.getElementById("originalArray").innerHTML += "; ";
				console.log("; ");
		    keyCount = 0;
			} //end for of
		} else {
      document.getElementById("updatedArray").innerHTML = "Sorted object array => ";
		  console.log("Sorted object array => ");
			for (let sortedObj of objArray) {
				for (let sortedKey in sortedObj) {
				  document.getElementById("updatedArray").innerHTML += sortedKey + ":" + sortedObj[sortedKey];
				  console.log(sortedKey + ":" + sortedObj[sortedKey]);
				  if (keyCount < 1) {
            document.getElementById("updatedArray").innerHTML += ", ";
						console.log(", ");
						keyCount++;
				  } //end if
				} //end for in

				document.getElementById("updatedArray").innerHTML += "; ";
				console.log("; ");
				keyCount = 0;
			} //end for of
		} //end if
	} //end printObjArray()
</script>

<main>
	<section class="heading">
    <h1>Array Sort Exercises</h1>
	</section>
	<section class="content">
		<p id="originalArray"
		   class="originalArray"
			 alt="Original array for test">
		</p>
		<p id="updatedArray"
		   class="updatedArray"
			 alt="Updated array after test"
		>
		</p>
		<p id="numDemo"
		   class="numDemo"
			 alt="Numbers to display"
		>
		</p>
    <p>
			<button id="btnStrSort"
			        class="btnArraySort"
							type="button"
							alt="String sort button"
			>
        String Sort
			</button>
			<button id="btnStrRevSort"
			        class="btnArraySort"
							type="button"
							alt="String reverse sort button"
			>
				String Reverse Sort
			</button>
		</p>
		<p>
			<button id="btnFindMaxInt"
			        class="btnNums"
							type="button"
							alt="Find max integer button"
			>
				Find Max Integer
			</button>
			<button id="btnFindMaxIntV2"
			        class="btnNums"
			        type="button"
							alt="Find max integer version 2 button"				
			>
				Find Max Integer, Version 2
			</button>
			<button id="btnFindMinInt"
			        class="btnNums"
							type="button"
							alt="Find min integer button"
			>
				Find Min Integer
			</button>
			<button id="btnFindMinIntV2"
			        class="btnFindMinIntV2"
							type="button"
							alt="Find min integer version 2 button"
			>
				Find Min Integer, Version 2
			</button>
		</p>
		<p>
			<button id="btnSortObjArrayByYear"
			        class="btnArraySort"
							type="button"
							alt="Sort object array by year button"
			>
				Sort Object Array By Year
			</button>
		  <button id="btnSortObjArrayByType"
			        class="btnArraySort"
							type="button"
							alt="Sort object array by type button"
			>
				Sort Object Array By Type
			</button>
		</p>
	</section>
	<footer>
		Last Updated: 2021-06-06
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