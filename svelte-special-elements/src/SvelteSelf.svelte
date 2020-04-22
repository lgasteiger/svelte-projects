<script>
  import Folder from './Folder.svelte';

  let root = [
    {
      type: 'folder'
      ,name: 'Important work stuff'
      ,files: [
        {
          type: 'file'
          ,name: 'quarterly-results.xlsx'
        } //end files list element
      ] //end files list
    } //end root 1st list element
    ,{
      type: 'folder'
      ,name: 'Animal GIFs'
      ,files: [
        {
          type: 'folder'
          ,name: 'Dogs'
          ,files: [
            {
              type: 'file'
              ,name: 'treadmill.gif'
            } //end 1st files list element
            ,{
              type: 'file'
              ,name: 'rope-jumping.gif'
            } //end 2nd files list element
          ] //end files list
        } //end 1st files list element
        ,{
          type: 'folder'
          ,name: 'Goats'
          ,files: [
            {
              type: 'file'
              ,name: 'parkour.gif'
            } //end 1st files list element
            ,{
              type: 'file'
              ,name: 'rampage.gif'
            } //end 2nd files list element
          ] //end files list
        } //end 2nd files list element
        ,{
          type: 'file'
          ,name: 'cat-roomba.gif'
        } //end 3rd files list element
        ,{
          type:'file'
          ,name: 'duck-shuffle.gif'
        } //end 4th files list element
        ,{
          type: 'file'
          ,name: 'monkey-on-a-pig.gif'
        } //end 5th files list element
      ] //end file list
    } //end root 2nd list element
    ,{
      type: 'file'
      ,name: 'TODO.md'
    } //end root 3rd list element
  ]; //end root list
</script>

<Folder name="Home" files={root} expanded />