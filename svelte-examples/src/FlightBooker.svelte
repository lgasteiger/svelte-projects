<script>
  const tomorrow = new Date(Date.now() + 86400000);

  let start = [
    tomorrow.getFullYear()
    ,pad(tomorrow.getMonth() + 1, 2)
    ,pad(tomorrow.getDate(), 2)
  ].join('-'); //end start list

  let end = start;
  let isReturn = false;

  $: startDate = convertToDate(start);
  $: endDate = convertToDate(end);

  function bookFlight() {
    const type = isReturn ? 'return' : 'one-way';
    let message = `You have booked a ${type} flight, leaving ${startDate.toDateString()}`;
    if (type === 'return') {
      message += ` and returning ${endDate.toDateString()}`;
    } //end if

    alert(message);
  } //end bookFlight()

  function convertToDate(str) {
    const split = str.split('-');
    return new Date(+split[0], +split[1] - 1, +split[2]);
  } //end convertToDate()

  function pad(len, x) {
    x = String(x);
    while (x.length < len) {
      x = `0${x}`;
    } //end while

    return x;
  } //end pad()
</script>

<style>
  select, input, button {
    display: block;
    margin: 0.5em 0;
    font-size: inherit;
  }
</style>

<!-- https://github.com/eugenkiss/7guis/wiki#flight-booker -->
<select bind:value={isReturn}>
  <option value={false}>
    One-way flight
  </option>
  <option value={true}>
    Return flight
  </option>
</select>

<input
  type=date
  bind:value={start}
>
<input
  type=date
  bind:value={end}
  disabled={!isReturn}
>

<button
  on:click={bookFlight}
  disabled="{isReturn && (startDate >= endDate)}"
>
  Book
</button>
