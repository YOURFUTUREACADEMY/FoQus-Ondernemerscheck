<template>
  <div class="shadow p-md-5">
    <header role="banner">
      <img
        class="foqusLogo img-fluid mx-auto d-block"
        src="@/assets/images/logo_ondernemerscheck.jpg"
        role="figure"
      />
    </header>
    <router-view />
  </div>
</template>
<script>
  require('@/styles/global.css')
  export default{
    data(){
      return{
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>
