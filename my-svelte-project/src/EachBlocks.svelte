<script>
  const drGreene = [
    { id: 'G_NlwfA8x0o&feature=em-uploademail', name: 'Your Daily Equation | E = mc2' } 
  ];

  const drCarroll = [
    { id: 'AeNSMJtKGc0&feature=em-uploademail', name: 'The Biggest Ideas in the Universe | Conservation'}

  ];
</script>

<h1>Famous Physicists Share their Knowledge to Help Everyone Cope</h1>

<h2>Dr. Brian Greene</h2>
{#each drGreene as episode, i}
  <li>
    <a target="_blank" href="https://www.youtube.com/watch?v={episode.id}">
      Episode {i + 1}: {episode.name}
    </a>    
  </li>
{/each}

<h2>Dr. Sean Carroll</h2>
{#each drCarroll as lecture, i}
  <li>
    <a target="_blank" href="https://www.youtube.com/watch?v={lecture.id}">
      Lecture {i + 1}: {lecture.name}
    </a>
  </li>
{/each}

<style>
  li {
    text-align: left;
  }
</style>