<template>
  <!-- Formular für Anmeldung Online -->

  <!-- Einführungstext -->
  <div id="intro" class="container mt-4">
    <h2>Kleidungs-Spende anmelden</h2>
    <p>Bitte füllen Sie das folgende Formular aus, um Ihre Kleiderspende zu registrieren. Wir danken Ihnen herzlich für Ihre Unterstützung!</p>
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
    <label class="form-label"> Telefonnummer zur Kontaktaufnahme</label>
    <input 
      type="number" 
      class="form-control" 
      v-model="form.phone"
      placeholder="012345678"
      :class="{'is-invalid': errors.phone}"
    >
    <!-- Fehlermeldung -->
    <div class="invalid-feedback">{{ errors.phone }}</div>
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


  <div class="mb-3">
    <label class="form-label">Übergabe</label>
    <select 
      class="form-select" 
      v-model="form.delivery"
      :class="{'is-invalid': errors.delivery}"
    >
      <option value="">Bitte wählen</option>
      <option value="Abholung">Abholung</option>
      <option value="Filiale">Übergabe an der Geschäftsstelle</option>
    </select>
    <!-- Fehlermeldung -->
    <div class="invalid-feedback">{{ errors.delivery }}</div>
  </div>


<!-- nur wenn Abholung gewählt -->
     <div class="mb-3" id="pickup" v-if="form.delivery === 'Abholung'">
      <label class="form-label" >Straße </label>
      <input class="form-control"
      type="text"
      v-model="form.pickupLocation"
      :class="{'is-invalid': errors.pickupLocation}"
       />
       <div class="invalid-feedback">{{ errors.pickupLocation }}</div>
      <label class="form-label mt-2" >Postleitzahl</label>
      <input class="form-control"
      type="text"
      v-model="form.pickupPostalCode"
      :class="{'is-invalid': errors.pickupPostalCode}"
       />
       <!-- Fehlermeldung -->
       <div class="invalid-feedback">{{ errors.pickupPostalCode }}</div>

    </div>

    <!-- nur wenn filiale gewählt -->
    <div class="mb-3" v-if="form.delivery === 'Filiale'">
      <label class="form-label" >Filiale </label>
      <select class="form-select"
      v-model="form.deliveryAddress"
      :class="{'is-invalid': errors.deliveryAddress}">
        <option value="">Bitte wählen</option>
        <option v-for="filiale in standorte" :key="filiale.id" :value="filiale.label">
          {{ filiale.label }}
        </option>
      </select>
      <!-- Fehlermeldung -->
      <div class="invalid-feedback">{{ errors.deliveryAddress }}</div>
      </div>
      
    <div class="row"> 
    <div class="mb-3 col-md-6">
      <label class="form-label">Wunschdatum</label>
      <input
        type="date"
        class="form-control"
        v-model="form.date"
        :class="{'is-invalid': errors.date}"
      />
      <!-- Fehlermeldung -->
      <div class="invalid-feedback">{{ errors.date }}</div>
    </div>  

    <div class="mb-3 col-md-6">
      <label class="form-label">Wunschuhrzeit</label>
      <select
        class="form-select"
        v-model="form.time"
        :class="{'is-invalid': errors.time}"
      >
        <option value="">Bitte wählen</option>
        <option v-for="time in timeSlots" :key="time" :value="time">
          {{ time }}
        </option>
      </select>
      <!-- Fehlermeldung -->
      <div class="invalid-feedback">{{ errors.time }}</div>
    </div>
    </div>
  
  <button type="submit" class="btn btn-primary">Spende einreichen</button>
</form>

</div>

</div>
</template>

<script>

import { standorte, krisengebiete, timeslots, Kategorien } from './DatenSammlung.js';

export default {
  name: 'AnmeldungApp',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        category: '',
        delivery: '',

        pickupLocation: '',
        deliveryAddress: '',
        pickupPostalCode: '',
        krisengebiet: '',
        time: '',
        date: ''

        

      },
      standorte: standorte,
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
    if (this.form.delivery === 'Abholung') {
      this.checkpostal();
    }
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
      if (!this.form.phone) e.phone = "Bitte eine Telefonnummer eingeben.";
      if (!this.form.category) e.category = "Bitte eine Kategorie auswählen.";
      if (!this.form.delivery) e.delivery = "Bitte eine Übergabeart auswählen.";
      if (!this.form.krisengebiet) e.krisengebiet = "Bitte ein Krisengebiet auswählen.";
      if (!this.form.time) e.time = "Bitte eine Uhrzeit auswählen.";
      if (this.form.delivery === 'Abholung' && !this.form.pickupLocation) {
        e.pickupLocation = "Bitte einen Abholort angeben. ";
      }
           if (this.form.delivery === 'Filiale' && !this.form.deliveryAddress) {
        e.deliveryAddress = "Bitte eine Filiale Adresse angeben. ";
      }
      if (!this.form.date) e.date = "Bitte ein Datum auswählen.";
      if (this.form.date) {
        const selectedDate = new Date(this.form.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Setze die Uhrzeit auf Mitternacht für den Vergleich
        if (selectedDate < today) {
          e.date = "Das Datum darf nicht in der Vergangenheit liegen.";
        }
      }
       
      this.errors = e;
    },

    // PLZ prüfen ob im Abholgebiet
    checkpostal() {
      if (this.form.pickupPostalCode.length > 5) {
        this.errors.pickupPostalCode = "Die Postleitzahl darf maximal 5 Ziffern enthalten.";
        return;
      }else {
      delete this.errors.pickupPostalCode;
      }
      if (this.form.pickupPostalCode.length < 5) {
        this.errors.pickupPostalCode = "Die Postleitzahl muss 5 Ziffern enthalten.";
        return;
      }else {
      delete this.errors.pickupPostalCode;
      }
      // Hole die eingegebene PLZ, mit abfangen von Leerzeichen
      if (this.form.delivery !== 'Abholung') return;
      
      const postalCode = this.form.pickupPostalCode && this.form.pickupPostalCode.trim();
      if (!postalCode) return;

      // Vergleiche erste 2 Ziffern der PLZ mit den IDs aus standorte
      const firstTwo = postalCode.substring(0, 2);
      const validFirstTwo = this.standorte.map(f => f.id);

      if (!validFirstTwo.includes(firstTwo)) {
        this.errors.pickupPostalCode = "Leider befindet sich Ihre Postleitzahl nicht im Abholgebiet. Bitte wählen Sie die Übergabe in der Filiale.";
      } else {
  delete this.errors.pickupPostalCode;
}
    }

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