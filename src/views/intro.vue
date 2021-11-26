<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo img-fluid"
        src="../assets/images/FoQus-Werkt.png"
        role="figure"
      />
    </header>

    <main class="text-white bg-dark">
      <section class="container" role="contentinfo">
        <h3 class="header" role="heading">Succesvol ondernemen is plezierig ondernemen.</h3>
        <div class="container-vragen">
          <h3>"Heb jij voldoende focus op succes? Test het zelf door 7 vragen te beantwoorden."</h3>
        </div>
        <div class="container-progBarQ">
          <progress class="progBarQ" id="progBarQ" value="0" max="7"></progress>
          <label for="progBarQ"> 0/7 </label>
        </div>  
        <div class="container-btn">   
          <button class="btn" @click="$router.push('/vragen')">
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

