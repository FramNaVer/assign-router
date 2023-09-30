<script setup>
  import shop from '../components/shop.vue';
  import MenuBar from '../components/MenuBar.vue';
  
</script>

<template>
  <header>
    <MenuBar></MenuBar>
  </header>

  <div class="content">
    <div class="text-main">
    I hope your day is as beautiful as your are
  </div><hr>
  </div>

  <main>
    <shop></shop> 
  </main>
</template>


<style scoped>
  .text-main{
    text-align: center;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .content hr{
    justify-content: center;
    width: 600px;
    margin-left: 30%;
  }

</style>
