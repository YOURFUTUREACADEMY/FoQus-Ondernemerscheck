<template>
  <div>
    <header role="banner">
      <img
        class="foqusLogo"
        src="../assets/images/logo-foqus-werkt-466x320.jpg"
        role="figure"
      />
    </header>

    <main>
      <section role="contentinfo">
        <h3 role="heading">Succesvol ondernemen is plezierig ondernemen.</h3>
        <h3>"Heb jij voldoende focus op succes? Test het zelf door 7 vragen te beantwoorden."</h3>
        <div>
          <progress id="progBarQ" value="0" max="7"></progress>
          <label for="progBarQ"> 0/7 </label>
        </div>     
        <button class="volgendeBtn" @click="$router.push('/vragen')">
          volgende
        </button>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: "intro",
  
};
</script>
