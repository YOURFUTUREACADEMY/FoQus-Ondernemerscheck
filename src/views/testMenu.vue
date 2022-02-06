<!-- TO DO this page needs to be remove before final version -->
<template>
  <h1 class="header text-center" role="heading">Test Menu</h1>
  <div>
    <main>
      <section class="">
        <button class="btn" @click="$router.push('/')">
          Naar begin
        </button>
        <button class="btn" @click="$router.push('/scorescherm')">
          Naar score 
        </button>
        <button class="btn" @click="$router.push('/storetest')">
          Naar store 
        </button>
        <button class="btn" @click="$router.push('/metertest')">
          Naar meter
        </button>
        <button class="btn" @click="$router.push('/berekeningTest')">
          Naar berekening 
        </button>
        <button class="btn" @click="$router.push('/zaptest')">
          Naar zapier
        </button>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "scorescherm",
  data() {
    return {
    }; //end return
  }, //end data
}; // end export
</script>
