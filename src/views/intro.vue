<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo img-fluid"
        src="../assets/images/FoQus-Werkt.png"
        role="figure"
      />
    </header>

    <main>
      <section role="contentinfo">
        <h3 class="header" role="heading">Succesvol ondernemen is plezierig ondernemen.</h3>
        <div class="container-vragen">
          <h3>"Heb jij voldoende focus op succes? Test het zelf door 7 vragen te beantwoorden."</h3>
        </div>
        <div class="container-progBarQ progress rounded-0">           
          <div class="progBarQ progress-bar" style="width:14%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="7" >
            <p class="me-5 mt-2">0/7</p>
          </div>
        </div>  
        <div class="container-btn">   
          <button class="btn btn-sm mt-2" id="volgendeBtn" @click="$router.push('/vragen')">
            volgende
          </button>
        </div>  
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "intro",
  
};
</script>

