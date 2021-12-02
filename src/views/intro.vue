<template>
  <main>
    <h1 class="header text-center" role="heading">
      Succesvol ondernemen is plezierig ondernemen.
    </h1>
    <h2 class="container-vragen d-flex justify-content-center align-items-center">
      "Heb jij voldoende focus op succes? Test het zelf door 7 vragen te
      beantwoorden."
    </h2>
    <div class="container-progBarQ progress rounded-0">
      <div
        class="progBarQ progress-bar"
        style="width: 14%"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="7"
      >
        <p class="me-5 mt-2">0/7</p>
      </div>
    </div>
    <div class="container-btn">
      <button
        class="btn btn-sm mt-2"
        id="volgendeBtn"
        @click="$router.push('/vragen')"
      >
        volgende
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "intro",
};
</script>

