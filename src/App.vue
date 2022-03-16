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
      if(this.$OTAP === 3){
        alert("Zap - Ontwikkeling is uitgeschakeld, als het nodig zet deze aan. Vergeet deze niet uit te zetten na testen van wijzigingen!");
      }
    }
  }
</script>

<style scoped>
</style>
