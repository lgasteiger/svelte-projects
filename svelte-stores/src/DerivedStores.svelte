<script>
  import { time, elasped } from './stores.js';

  const timeFormat = new Intl.DateTimeFormat('en', {
    hour12: false
    ,hour: 'numeric'
    ,minute: '2-digit'
    ,second: '2-digit'
    ,timeZone: 'America/Los_Angeles'
    ,timeZoneName: 'short'
  }); //end DateTimeFormat 
</script>

<h3>The time elapsed from when this page was first rendered: {$elasped} {$elasped === 1 ? 'second' : 'seconds'}</h3>