<template>
<HeaderApp></HeaderApp>
<body>
<router-view/>
</body>
<FooterApp></FooterApp>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 75vh;
}
</style>

<script>

import HeaderApp from './components/HeaderApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  components: {
    HeaderApp,
    FooterApp
    }
}
</script>