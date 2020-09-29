<script>
  //These values are bound to properties of the video.
  let time = 0;
  let duration;
  let paused = true;
  let showControls = true;
  let showControlsTimeout;

  function handleMousemove(e) {
    //Make the controls visible, but fade out after 2.5 sections of inactivity.
    clearTimeout(showControlsTimeout);
    showControlsTimeout = setTimeout(() => showControls = false, 2500);
    showControls = true;

    //Mouse not down.
    if (!(e.buttons & 1)) {
      return;
    } //end if

    //Video not loaded yet.
    if (!duration) {
      return;
    } //end if

    const { left, right } = this.getBoundingClientRect();
    time = duration * (e.clientX - left) / (right - left);
  } //end handleMousemove()

  function handleMousedown(e) {
    //We cannot rely on the built-in click event, because it fires after a drag.
    //As a result, we have to listen for clicks ourselves.

    function handleMouseup() {
      if (paused) {
        e.target.play();
      } else {
        e.target.paused();
      } //end if

      cancel();
    } //end handleMouseup

    function cancel() {
      e.target.removeEventListener('mouseup', handleMouseup);
    } //end cancel()

    e.target.addEventListener('mouseup', handleMouseup);
    setTimeout(cancel, 200);
  } //end handleMousedown()

  function format(seconds) {
    if (isNaN(seconds)) {
      return '...';
    } //end if

    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    
    if (seconds < 10) {
      seconds = '0' + seconds;
    } //end if

    return `${minutes}:${seconds}`;
  } //end format()
</script>

<style>
  div {
    position: relative;
  } /* end div */

  .controls {
    position: absolute;
    top: 0;
    width: 100%;
    transition: opacity 1s;
  } /* end .controls */

  .info {
    display: flex;
    width: 100%;
    justify-content: space-between;
  } /* end .info */

  span {
    padding: 0.2em 0.5em;
    color: white;
    text-shadow: 0 0 8px black;
    font-size: 1.4em;
    opacity: 0.7;
  } /* end span */

  .time {
    width: 3em;
  } /* end .time */

  .time:last-child {
    text-align: right;
  } /* end .time:last-child */

  progress {
    display: block;
    width: 100%;
    height: 10px;
    -webkit-appearance: none;
    appearance: none;
  } /* end progress */

  progress::-webkit-progress-bar {
    background-color: rgba(0,0,0,0.2);
  } /* end progress::-webkit-progress-bar */

  progress::-webkit-progress-value {
    background-color: rgba(255,255,255,0.6);
  } /* end progress::-webkit-progress-value */

  video {
    width: 100%;
  } /* end video */
</style>

<section class="content">
  <h1>Caminandes: Llamigos</h1>
  
  <p>
    From <a hred="https://cloud.blender.org/open-projects">Blender Open Projects</a>.
    CC-BY
  </p>

  <div>
    <video
      poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
      src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
      on:mousemove={handleMousemove}
      on:mousedown={handleMousedown}
      bind:currentTime={time}
      bind:duration
      bind:paused
    >
    </video>

    <div
      class="controls"
      style="opacity: {duration && showControls ? 1 : 0}"
    >
      <progress 
        value="{(time / duration || 0)}"
      />
      
      <div class="info">
        <span class="time">
          {format(time)}
        </span>
        <span>
          Click anywhere to {paused ? 'Play' : 'Pause'} / Drag to Seek
        </span>
        <span class="time">
          {format(duration)}
        </span>
      </div>
    </div>
  </div>
</section>