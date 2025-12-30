<template>
  <!-- Erfolgsseite nach Absenden des Anmeldeformulars -->
<section class="text-center bg-light p-4 rounded">
  <div class="mb-4">
    <h2>Die Anmeldung Ihrer Spende war erfolgreich!
    </h2>
    <p>Vielen Dank für Ihre Unterstützung. Ihre Spende trägt dazu bei, Menschen in Krisengebieten zu helfen und die Wiederverwendung von Textilien zu fördern.</p>
  </div>

  <!-- Zusammenfassung der eingegebenen Daten mit Prüfung des Übergabeverfahrens und des Formulars -->
  <div v-if="formData">
    <h5>Hier eine Zusammenfassung Ihrer Spende:</h5>
    <div class="row"> 
    <div class="mt-3 col-md-6"><strong>Name des Spenders:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.name }}</div>
    </div>
    <div class="row" v-if="formData.phone !== 'short'">
    <div class="mt-3 col-md-6"><strong>Telefonnummer zur Kontaktaufnahme:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.phone }}</div>
    </div>
    <div class="row">
    <div class="mt-3 col-md-6"><strong>Kategorie der gespendeten Kleidung:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.category }}</div>
    </div>
    <div class="row">
    <div class="mt-3 col-md-6"><strong>Krisengebiet:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.krisengebiet }}</div>
    </div>
    <div class="row">
    <div class="mt-3 col-md-6"><strong>Übergabeart:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.delivery }}</div>
    </div>
    <div class="row" v-if="formData.delivery === 'Abholung'">
    <div class="mt-3 col-md-6"><strong>Straße für Abholung:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.pickupLocation }}</div>
    </div>
    <div class="row" v-if="formData.delivery === 'Abholung'">
    <div class="mt-3 col-md-6"><strong>Postleitzahl für Abholung:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.pickupPostalCode }}</div>
    </div>
    <div class="row" v-if="formData.delivery === 'Filiale' && formData.deliveryAddress !== 'short'">
    <div class="mt-3 col-md-6"><strong>Filiale für Abgabe:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.deliveryAddress }}</div>
    </div>
    <div class="row" v-if="formData.date !== 'short'">
    <div class="mt-3 col-md-6"><strong>Wunschtermin:</strong></div>
    <div class="mt-3 col-md-6">{{ formData.date }} {{ formData.time }}</div>
    </div>

    
    <div id="message" class="row mt-4">
    <p v-if="formData.delivery === 'Abholung'">Wir werden uns in Kürze mit Ihnen in Verbindung setzen!</p>
    <p v-if="formData.delivery === 'Filiale' && formData.deliveryAddress !== 'short'">Ihre Spende kann jederzeit während der Öffnungszeiten in der ausgewählten Filiale abgegeben werden.</p>
    <p v-if="formData.delivery === 'Filiale' && formData.deliveryAddress === 'short'">Vielen Dank für Ihre Spende in der Filiale! Bitte nehmen Sie Platz im Wartebereich. Ein Mitarbeiter wird Ihre Spende gleich persönlich entgegennehmen.</p>
    </div>
  </div>
    
  </section>

  <div class="d-flex justify-content-center mt-4">
  <button class="btn btn-primary" @click="$router.push({ name: 'home' })">
    Zur Startseite
  </button>
  </div>
</template>


<script>
export default {
  name: 'CompleteApp',
  data() {
    return {
      formData: null
    }
  },
  // Komponenten werden aus der URL abgerufen und in formData gespeichert
  mounted() {
    if (this.$route.query.data) {
      this.formData = JSON.parse(this.$route.query.data);
      
    }
  }
}

</script>

<style scoped>

section {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
#message p {
  font-size: 0.9rem;
  font-weight: bold;
  color: #b02121;
}



</style>