<template>
  <main>
    <h1 class="header text-center" role="heading">
      Succesvol ondernemen is plezierig ondernemen.
    </h1>
    <p class="introTekst container-vragen d-flex justify-content-center align-items-center">
      "Heb jij voldoende focus op succes? Test het zelf door 7 vragen te
      beantwoorden."
    </p>
    <div class="container-progBarQ progress rounded-0">
      <div
        class="progBarQ progress-bar"
        style="width: 14%"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="7"
      >
        <p class="mx-auto mt-3">0/7</p>
      </div>
    </div>
    <div class="container-btn d-flex justify-content-end">
      <button
        class="btn btn-lg mt-2 me-2"
        id="volgendeBtn"
        @click="$router.push('/vragen')"
      >
        Test het zelf
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "intro",
};
</script>

