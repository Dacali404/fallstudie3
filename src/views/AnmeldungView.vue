<template>
  <div class="home">
        <div v-if="shortcut">
        <AnmeldungAppShort/>
        </div>
        <div v-else>
        <AnmeldungApp/>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src 
import AnmeldungApp from '@/components/AnmeldungApp.vue'
import AnmeldungAppShort from '@/components/AnmeldungAppShort.vue';

export default {
  name: 'AnmeldungView',
  components: {
    AnmeldungApp,
    AnmeldungAppShort
  },
  data() {
    return {
      shortcut: null
    }
  },
  mounted() {
    if (this.$route.query.data) {
      this.shortcut = JSON.parse(this.$route.query.data);
      
    }
  }
}
  

</script>
