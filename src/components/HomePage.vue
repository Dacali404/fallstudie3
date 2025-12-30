<template>
  <main class="container my-5">
    
    <section class="bg-light p-4 rounded mb-5">
      <div id="shortcut" class ="row justify-content-end align-items-center">
      <div class="col-auto">
       <p style="font-weight: bold;" class="my-0">Sie befinden sich bereits in einer Filiale?:</p>
      </div>
      <div class="col-auto">
       <button class="btn btn-warning btn-lg">
        <router-link to="/anmeldung" v-on:click="short" class="nav-link">Übergabe an der Geschäftsstelle</router-link>
      </button>
      </div> 
      </div>
    </section>

    <!-- Einstieg -->
    <section class="text-center bg-light p-4 rounded mb-5">
      <h2 class="mb-3">Gemeinsam nachhaltig helfen</h2>
      <p class="lead">
        dress the planet e.V. setzt sich für soziale und ökologische Projekte ein.
        Mit deiner Spende unterstützt du die Wiederverwendung von Textilien und hilfst Menschen in Krisengebieten.
      </p>
      <button class="btn btn-success btn-lg mt-3">
        <router-link to="/anmeldung" class="nav-link">Jetzt spenden</router-link>
      </button>
    </section>

    <!-- Kurzvorstellung -->
    <section class="row mb-5">
      <div class="col-md-6">
        <h3>Wer wir sind</h3>
        <p>
          Wir sind ein gemeinnütziger Verein, der sich für nachhaltigen Konsum
          und soziale Verantwortung einsetzt. Unser Fokus liegt auf Projekten,
          die Umwelt und Menschen gleichermaßen zugutekommen.
        </p>
      </div>

      <div class="col-md-6">
        <h3>Unsere Standorte</h3>
        <ul>
          <li v-for="standort in standorte" :key="standort.id">{{ standort.label }}</li>
        </ul>
      </div>
    </section>

    <!-- Projektbeispiele -->
    <section class="mb-5">
      <h3 class="text-center mb-4">Unsere Projekte</h3>

      <div class="row">
        <div v-for="gebiet in krisengebiete" :key="gebiet.id" class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{ gebiet.label }}</h5>
              <p class="card-text">
                {{ gebiet.beschreibung }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Spendenaufruf -->
    <section class="text-center bg-light p-4 rounded">
      <h3>Deine Spende macht den Unterschied</h3>
      <p>
        Jeder Beitrag hilft uns, unsere Projekte weiterzuführen und auszubauen.
        Transparenz und verantwortungsvoller Umgang mit Spenden sind für uns selbstverständlich.
      </p>
      <button class="btn btn-success">
        <router-link to="/anmeldung" class="nav-link">Zur Spendenseite</router-link>
      </button>
    </section>

  </main>
</template>

<script>
import { standorte, krisengebiete } from "./DatenSammlung.js";

export default {
  name: "HomePage",

data() {  
  return {
  
  shortcut: true,
  standorte: standorte,
  krisengebiete: krisengebiete
};
},  


methods: {
    short() {
      this.$router.push({
         name: 'anmeldung',
         query: { data: JSON.stringify(this.shortcut) }
         });
    }
  }

}



</script>

<style scoped>
@media (max-width: 992px) {
  #shortcut {
    justify-content: center !important;
  }
}

@media (max-width: 768px) {
  #shortcut {
    justify-content: center !important;
  }
}

@media (max-width: 576px) {
  p {
    font-size: 0.9rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  #shortcut {
    justify-content: center !important;
  }
}




</style>
