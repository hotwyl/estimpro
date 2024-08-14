<template>
    <div class="container my-5 py-5">
      <!-- Seção de Introdução -->
      <section class="intro-section py-5 text-center">
        <div class="container">
          <h1 class="display-4">Bem-vindo ao <span class="text-primary">EstimPro</span>!</h1>
          <p class="lead">Utilize o <span class="text-primary">EstimPro</span> para calcular seus projetos. Sua ferramenta definitiva para calcular o valor e o prazo dos seus projetos freelance com precisão e eficiência.</p>
          <p class="mb-4">Com o <b>EstimPro</b>, você pode estimar rapidamente os custos do seu projeto, calcular a mão de obra necessária e planejar o tempo de execução, tudo em um só lugar. Nossa interface intuitiva e funcionalidades avançadas ajudam você a tomar decisões informadas e a gerenciar seus projetos com confiança.</p>
          <a href="#features" class="btn btn-primary btn-sm">Descubra as Funcionalidades <i class="fa-solid fa-arrow-down"></i></a>
        </div>
      </section>
  
      <!-- Seção de Funcionalidades -->
      <section id="features" class="features-section py-5">
        <div class="container">
          <h2 class="display-5 text-center mb-4">O Que o <span class="text-primary">EstimPro</span> Oferece</h2>
          <div class="row">
            <div class="col-md-4 text-center">
              <h3 class="h4">Cálculo de Valor do Projeto</h3>
              <p>Determine o valor total do seu projeto com base nas horas de trabalho e no custo da mão de obra. Simples e rápido.</p>
            </div>
            <div class="col-md-4 text-center">
              <h3 class="h4">Cálculo da Mão de Obra</h3>
              <p>Calcule o valor da hora de trabalho com base no custo total do projeto e nas horas trabalhadas, se necessário.</p>
            </div>
            <div class="col-md-4 text-center">
              <h3 class="h4">Planejamento do Tempo de Execução</h3>
              <p>Estime o prazo de execução do projeto em dias úteis com base nas horas diárias de trabalho. Melhore seu planejamento e gestão de tempo.</p>
            </div>
          </div>
          <div class="text-center mt-4">
            <router-link class="btn btn-primary btn-sm" to="/calculadora">Experimente o EstimPro <i class="fa-solid fa-play"></i></router-link>
          </div>
        </div>
      </section>
  
      <!-- Seção de Testemunhos -->
      <section id="testimonials" class="testimonials-section py-5 bg-light">
        <div class="container">
          <h2 class="display-5 text-center mb-4">O Que Nossos Usuários Dizem</h2>
          <div class="row">
            <div class="col-md-3">
              <div class="testimonial">
                <blockquote class="blockquote">
                  <p>"Fácil de usar e extremamente útil. Com o <span class="text-primary">EstimPro</span>, posso estimar custos e prazos rapidamente, o que me ajuda a planejar melhor meus projetos."</p>
                  <footer class="blockquote-footer">Renata Souza</footer>
                </blockquote>
              </div>
            </div>
            <div class="col-md-3">
              <div class="testimonial">
                <blockquote class="blockquote">
                  <p>"A aplicação transformou a forma como eu calculo meus projetos. Agora consigo estimar com precisão e planejar melhor meu tempo."</p>
                  <footer class="blockquote-footer">Ana Costa</footer>
                </blockquote>
              </div>
            </div>
            <div class="col-md-3">
              <div class="testimonial">
                <blockquote class="blockquote">
                  <p>"O <span class="text-primary">EstimPro</span> mudou a maneira como eu calculo meus projetos. É uma ferramenta essencial para qualquer freelancer que busca eficiência e precisão."</p>
                  <footer class="blockquote-footer">Lucas Martins</footer>
                </blockquote>
              </div>
            </div>
            <div class="col-md-3">
              <div class="testimonial">
                <blockquote class="blockquote">
                  <p>"Muito fácil de usar e com cálculos precisos. A melhor ferramenta para freelancers que precisam de agilidade e precisão."</p>
                  <footer class="blockquote-footer">Carlos Almeida</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  </script>
  
  <style scoped>
  .intro-section {
    background-color: #f8f9fa;
  }
  
  .features-section {
    background-color: #ffffff;
  }
  
  .testimonials-section {
    background-color: #e9ecef;
  }
  
  .contact-section {
    background-color: #ffffff;
  }
  
  .testimonial {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #ffffff;
  }
  </style>
  