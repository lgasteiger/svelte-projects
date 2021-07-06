<script>
  document.addEventListener('DOMContentLoaded', registerClickEvents, false);

  function registerClickEvents() {
    console.log("**********In registerClickEvents()***********");
    document.getElementById("btnDecBinConvert").addEventListener('click', testDecToBinConvert, false);
		document.getElementById("btnBinDecConvert").addEventListener('click', testBin2DecConverter, false);
	} //end registerClickEvents()

	function testDecToBinConvert() {
    console.log("**********In testDecToBinConvert()**********");
		const intTest = -5;
		document.getElementById("initialNum").innerHTML = "The decimal number => " + intTest;
		console.log("The decimal number => " + intTest);
		dec2Bin(intTest, displayConversion);
	} //end testDecToBinConvert()

	function dec2Bin(intDec, cbDisplayer) {
    console.log("**********In dec2Bin()***********");
		const intBinConversion = (intDec >>> 0).toString(2);
		cbDisplayer(intBinConversion);
	} //end dec2Bin()

	function testBin2DecConverter() {
    console.log("**********In testBin2DecConverter()**********");
		const intTest = 101;
		bin2Dec(intTest, displayConversion);
	} //end testBin2DecConverter()

	function bin2Dec(intBin, cbDisplayer) {
    console.log("**********In bin2Dec()**********");
		const intDecConversion = parseInt(intBin, 2).toString(10);
    cbDisplayer(intDecConversion);
	} //end bin2Dec()

	/**
	 * This callback function shall be displayed globally.
	 * @callback displayConversion
	 * @param convertedOutput
	 */
	function displayConversion(convertedOutput) {
    console.log("**********In displayConversion()**********");
    document.getElementById("conversionDemo").innerHTML = "The converted binary number => " + convertedOutput;
	  console.log("The converted binary number => " + convertedOutput);
	} //end displayConversion()
</script>

<main>
  <section class="heading">
    <h2>JS Convert Between Decimal and Binary Formats</h2>
	</section>
	<section class="content">
		<p id="initialNum"
		   class="initialNum"
		   alt="Initial number"	 
		>
		</p>
    <p id="conversionDemo"
		   class="conversionDemo"
			 alt="Decimal and binary formats conversion demo"			 
		>
		</p>
		<p>
			<button id="btnDecBinConvert"
			        class="btnConvert"
							type="button"
			        alt="Decimal to binary format conversion button"
			>
				Decimal/Binary Conversion
			</button>
			<button id="btnBinDecConvert"
			        class="btnConvert"
							type="button"
							alt="Binary to decimal format conversion button"
			>
				Binary/Decimal Conversion
			</button>
		</p>
	</section>
	<footer>
		Last Updated: 2021-06-20
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