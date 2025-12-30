<template>

  <!-- Formular für Anmeldung in der Filiale -->

  <!-- Einführungstext -->
  <div id="intro" class="container mt-4">
    <h2>Kleidungs-Spende in Filiale anmelden</h2>
    <p>Bitte füllen Sie das folgende Formular aus, um Ihre Kleiderspende zu registrieren. Wir danken Ihnen herzlich für Ihre Unterstützung!</p>
    <p>Sollten Sie Unterstützung benötigen, wenden Sie sich bitte an einen Mitarbeiter!</p>
  </div>

  <!-- Formular -->
  <div id="form" class="container mt-4">
    <div>
        <form @submit.prevent="handleSubmit" >
    <div class="mb-3">
    <label class="form-label"> Vollständiger Name des Spenders</label>
    <input 
      type="text" 
      class="form-control" 
      v-model="form.name"
      :class="{'is-invalid': errors.name}"
    >
    <!-- Fehlermeldung -->
    <div class="invalid-feedback">{{ errors.name }}</div>
    </div>

  <div class="mb-3">
    <label class="form-label">Kategorie</label>
    <select 
      class="form-select" 
      v-model="form.category"
      :class="{'is-invalid': errors.category}"
    >
      <option value="">Bitte wählen</option>
      <option v-for="Kategorie in Kategorien" :key="Kategorie.id" :value="Kategorie.label">
        {{ Kategorie.label }}
      </option>
    </select>
    <!-- Fehlermeldung -->
    <div class="invalid-feedback">{{ errors.category }}</div>
  </div>


  <div class="mb-3">
    <label class="form-label">Krisengebiet</label>
    <select 
      class="form-select" 
      v-model="form.krisengebiet"
      :class="{'is-invalid': errors.krisengebiet}"
    >
      <option value="">Bitte wählen</option>
      <option v-for="krisengebiet in krisengebiete" :key="krisengebiet.id" :value="krisengebiet.label">
        {{ krisengebiet.label }}
      </option>
    </select>
    <!-- Fehlermeldung -->
    <div class="invalid-feedback">{{ errors.krisengebiet }}</div>
  </div>
    
  <button type="submit" class="btn btn-primary">Spende einreichen</button>
</form>

</div>

</div>
</template>

<script>

import { timeslots, krisengebiete, Kategorien } from './DatenSammlung.js';

export default {
  name: 'AnmeldungAppShort',
  data() {
    return {
      form: {
        name: '',
        phone: 'short',
        category: '',
        delivery: 'Filiale',

        pickupLocation: 'short',
        deliveryAddress: 'short',
        pickupPostalCode: 'short',
        krisengebiet: '',
        time: 'short',
        date: 'short'

        

      },
      
      krisengebiete: krisengebiete,
      timeSlots: timeslots,
      Kategorien: Kategorien,

      errors: {}
    }
  },
  methods: {
    // Prüfen und absenden
    handleSubmit() {
      this.validateForm();    
    
      if (Object.keys(this.errors).length === 0) {
               
        // Bei Erfolg -> Daten als JSON weitergeben
        this.$router.push({
          name: 'complete',
          query: { data: JSON.stringify(this.form) }
        });
      }
    },

    // Validierung der Eingaben
    validateForm() {
      const e = {};

      if (!this.form.name) e.name = "Bitte einen Namen eingeben.";
      
      if (!this.form.category) e.category = "Bitte eine Kategorie auswählen.";
      
      if (!this.form.krisengebiet) e.krisengebiet = "Bitte ein Krisengebiet auswählen.";
      
   
      this.errors = e;
    },

   
    

    

}
}




</script>

<style scoped>

#form {
 background-color: rgba(212, 212, 212, 0.927);
 border-radius : 8px;
padding: 8px;
}

@media (max-width: 576px) {
  #intro p {
    font-size: 0.9rem;
  }
  #intro h2 {
    font-size: 1.2rem;
  }
}


</style>