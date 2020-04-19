<script>
  import ContactCard from './ContactCard.svelte';
</script>

<ContactCard>
  <span slot="name">
    P. Sherman
  </span>

  <span slot="address">
    42 Wallaby Way<br>
    Syndey, AU
  </span>

  <span slot="email">
    psherman@xbox.com
  </span>
</ContactCard>