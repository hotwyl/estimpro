<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light" aria-label="Ninth navbar example">
        <div class="container">
            <router-link class="navbar-brand text-primary" to="/"><b>EstimPro</b></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample07XL">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/"> <i class="fa-solid fa-house"></i> Home</router-link>
                    <router-link class="nav-link" to="/calculadora"> <i class="fas fa-calculator"></i> Calculadora</router-link>
                    <router-link class="nav-link" to="/about"> <i class="fa-solid fa-circle-info"></i> Institucional</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<style scoped>
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }
</style>
  