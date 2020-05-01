<script>
  let c = 0;
  let f = 32;

  function setBothFromC(value) {
    c = +value;
    f = +(32 + (9/5) * c).toFixed(1);
  } //end setBothFromC()

  function setBothFromF(value) {
    f = +value;
    c = +((5/9) * (f - 32)).toFixed(1);
  } //end setBothFromF()
</script>

<style>
  input {
    width: 5em;
  }
</style>

<!-- https://github.com/eugenkiss/7guis/wiki#temperature-converter -->

<input
  value={c}
  on:input="{e => setBothFromC(e.target.value)}"
  type=number
>
  degrees C is equal (=) to  

<input
  value={f}
  on:input="{e => setBothFromF(e.target.value)}"
  type=number
>
  degrees F