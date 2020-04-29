<script>
  import { onMount } from 'svelte';

  let characters = [
    "Congrats!"
    ,"Let's party!!"
    ,"It only gets better!!!"
  ]; //end characters list

  let confetti = new Array(100).fill().map((_, i) => {
    return {
      character: characters[i % characters.length]
      ,x: Math.random() * 100
      ,y: -20 - Math.random() * 100
      ,r: 0.1 + Math.random() * 1
    }; //end return
  }).sort((a, b) => a.r - b.r); //end sorted confetti Array

  onMount(() => {
    let frame;

    function loop() {
      frame = requestAnimationFrame(loop);

      confetti = confetti.map(emoji => {
        emoji.y += 0.7 * emoji.r;
        if (emoji.y > 120) {
          emoji.y = -20;
        } //end if

        return emoji;
      }); //end confetti map
    } //end loop()

    loop();

    return () => cancelAnimationFrame(frame);
  }); //end onMount()
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  span {
    position: absolute;
    font-size: 5vw;
  }
</style>

{#each confetti as c}
  <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">
    {c.character}
  </span>
{/each}