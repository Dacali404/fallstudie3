<template>
  <footer class="bg-light border-top mt-auto">
  <div class="container py-3 d-flex justify-content-between flex-wrap">
    <span class="text-muted">© 2025 Alexander Spengler - Fallstudie IPWA01-01</span>
    <div>
      <RouterLink to="/impressum+Datenschutz" class="me-3 text-decoration-none">
        Datenschutz und Impressum
      </RouterLink>
          </div>
  </div>
</footer>

</template>

<script>
export default {
  name: 'FooterApp'
}
</script>

<style scoped>
footer {
  background-color: #f5f5f5;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
}

@media (max-width: 576px) {
  footer {
    font-size: 0.8rem;
  }
}
</style>
