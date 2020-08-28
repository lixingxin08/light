<template>
  <div class="supervisionhome" style="background-color: #FFFFFF;">
    <div class="flexrow" >
      <is-left></is-left>
      <is-list></is-list>
    </div>
  </div>
</template>
<script>
  import isLeft from '../supervision/content/left.vue'
  import isList from './list.vue'
  export default {
    components: {
      isLeft: isLeft,
      isList:isList
    }

  }
</script>
