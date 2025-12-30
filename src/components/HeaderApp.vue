<template>
<header class="border-bottom"> 
    <nav class="navbar navbar-expand-md container" id="navi">
             
    <span id="title">dress the planet e.V.</span>
    <img alt="DTP logo" src="../assets/DTP.png"  style="max-height: 103px ; max-width: fit-content;">
     
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto gap-md-3">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Über uns</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/anmeldung" class="nav-link">Anmeldung zur Spende</router-link>
        </li>
                
      </ul>
    </div>
 </nav>
</header>
</template>   

<style scoped>
header {
  background-color: #88ca0dab;
  padding: 20px;
  height: 20vh;
  display: flex;
  border-bottom-left-radius : 8px;
  border-bottom-right-radius : 8px;
}

#navi {
  display: flex;
  justify-content: space-between; /* verteilt Links */
  align-items: center;
  padding: 10px 20px;
  

  text-align: right;
  color: #333;
}

#navi a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  transition: color 0.3s ease;
}

#navi a:hover {
  color: #ffc107; /* Bootstrap-Gelb */
}

#title {
  font-family: sans-serif;
  font-size: 1.5rem;
  font-weight: bold;  
  margin: 0;
  color: #333;
}



@media (max-width: 768px) {
  .navbar-collapse {
    background-color: #198754;
    padding: 15px;
    border-radius: 4px;
    margin-top: 10px;
  }
}


</style>

<script>

export default {
  name: 'HeaderApp'
}
</script>