<style>
  button {
    height: 4rem;
    width: 8rem;
    background-color: #aaa;
    border-color: #f1c40f;
    color: #f1c40f;
    font-size: 1.25rem;
    background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    transition: background 300ms ease-in-out;
  } /* end button */

  button:hover {
    background-position: 0;
    color: #aaa;
  } /* end button:hover */
</style>

<section class="content">
  <button on:click>
    Please Interact
  </button>
</section>