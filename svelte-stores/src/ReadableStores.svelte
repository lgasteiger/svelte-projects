<script>
  import { time, date } from './stores.js';

  const timeFormat = new Intl.DateTimeFormat('en', {
    hour12: false
    ,hour: 'numeric'
    ,minute: '2-digit'
    ,second: '2-digit'
    ,timeZone: 'America/Los_Angeles'
    ,timeZoneName: 'short'
  }); //end DateTimeFormat

  const dateFormat = new Intl.DateTimeFormat('en', {
    weekday: 'long'
    ,month: 'long'
    ,day: 'numeric'
    ,year: 'numeric'
  }); //end DateTimeFormat
</script>

<h1>The date: {dateFormat.format($date)}</h1>
<h2>The time: {timeFormat.format($time)}</h2>