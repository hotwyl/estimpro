<template>
  
  <div class="container m-5 p-5">
    <!-- Seção de Brand -->
    <section class="brand-section text-center">
      <div class="container my-5">
        <h1 class="display-4">Bem-vindo à <a href="https://www.3wonline.com.br" target="_blank" style="text-decoration: none;"> {{ name }} </a></h1>
        <p class="lead">Transformando suas ideias em soluções digitais inovadoras.</p>

        <h5 class="text-center my-5">Por Que Escolher <a href="https://www.3wonline.com.br" target="_blank" style="text-decoration: none;"> {{ name }} </a>?</h5>
        <div class="row">
          <div class="col-md-4 text-center px-5">
            <p>Com mais de 10 anos de experiência, <a href="https://www.3wonline.com.br" target="_blank" style="text-decoration: none;"> {{ name }} </a> é uma referência em desenvolvimento digital e design. Nossos clientes confiam em nossa expertise para entregar soluções de alta qualidade.</p>
          </div>
          <div class="col-md-4 text-center px-5">
            <p>Oferecemos um número limitado de vagas para novos projetos a cada mês. Garanta sua oportunidade de trabalhar conosco e aproveite nosso serviço exclusivo.</p>
          </div>
          <div class="col-md-4 text-center px-5">
            <p>Ao escolher <a href="https://www.3wonline.com.br" target="_blank" style="text-decoration: none;"> {{ name }} </a>, você não está apenas contratando um serviço. Estamos comprometidos em oferecer valor extra, incluindo consultorias gratuitas e suporte contínuo.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Sobre -->
    <section class="about-section my-5">
      <div class="container">

        <h2 class="display-5 text-center my-5">Sobre Nós</h2>
        <p>Somos dedicados a fornecer soluções precisas e eficazes para freelancers e empresas que precisam calcular orçamentos e prazos para projetos. Com a nossa ferramenta, você pode facilmente definir o valor em dinheiro e o prazo estimado com base no tipo de serviço e valor da mão de obra por hora.</p>
        
        <h2 class="display-5 text-center my-5">Nosso Objetivo</h2>
        <p>Nosso objetivo é simplificar o processo de cálculo de orçamentos para que você possa focar no que realmente importa: entregar um trabalho de qualidade. Estamos comprometidos em fornecer uma interface intuitiva e uma experiência de usuário excepcional.</p>
        
        <h2 class="display-5 text-center my-5">Nossa Equipe</h2>
        <p>
          <a href="https://www.linkedin.com/in/william-camargo-50aab85b/" target="_blank" style="text-decoration: none;"><strong>William Camargo</strong></a>: 
          <small class="text-muted">Engenheiro de Software | Desenvolvedor Fullstack. Especialista em Láravel e Vue.js - </small> 
            <a href="https://www.linkedin.com/in/william-camargo-50aab85b/" target="_blank"> <i class="fa-brands fa-linkedin"></i> </a>&nbsp;
            <a href="https://github.com/hotwyl" target="_blank"> <i class="fa-brands fa-square-github"></i> </a>
        </p>

        <h2 class="display-5 text-center my-5">Entre em Contato</h2>
        <p>Se você tiver alguma dúvida ou feedback, não hesite em entrar em contato conosco.</p>
        <a href="https://www.3wonline.com.br/contact" class="btn btn-primary btn-sm my-5" target="_blank">Fale Conosco <i class="fa-solid fa-envelope"></i></a>
      </div>
    </section>
  </div>

</template>
  
  <script setup>
  // Importar quaisquer bibliotecas ou scripts necessários aqui
  import { ref } from 'vue'

const name = ref('3w Online')
  </script>
  
 