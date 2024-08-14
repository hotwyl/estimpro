<template>
  <div class="calculator-container p-5">
    <h1 class="display-4">Calculadora de Projeto</h1>
    <form @submit.prevent="handleSubmit" class="p-5">
     
      <!-- Step 1: Tipo de Serviço -->
      <div v-if="step === 1" class="step">
        <h3 class="h3">Tipo de Serviço</h3>
        <div class="mb-5">
          <label for="tipo-servico" class="form-label lead">Selecione o Tipo de Serviço que será prestado</label><br>
          <small class="text-muted">Essa informação é importante para o cálculo do valor da hora de trabalho</small>
          <select v-model="tipoServico" id="tipo-servico" class="form-select my-3 form-select-sm">
            <option value="desenvolvimento-site">Desenvolvimento de Site</option>
            <option value="desenvolvimento-sistema">Desenvolvimento de Sistema</option>
          </select>
        </div>
        <button type="button" class="btn btn-primary btn-sm" @click="nextStep">Próximo Passo <i class="fa-solid fa-arrow-right"></i></button>
      </div>

      <!-- Step 2: Valor da Mão de Obra -->
      <div v-if="step === 2" class="step">
        <h3 class="h3">Valor da Mão de Obra</h3>
        <div class="mb-3">
          <label for="valor-hora" class="form-label lead">Informe o valor da hora de trabalho (R$)</label><br>
          <small class="text-muted">Esse valor é utilizado para calcular o valor total do projeto</small>
          <input v-model.number="valorHora" type="number" id="valor-hora" class="form-control form-control-sm mt-5" required />
        </div>
        <div class="my-5">
          <small class="text-muted">Deseja calcular o valor da hora de trabalho?</small><br>
          <!-- link para abrir modal e calcuar valor dão mão de obra -->
           <a href="#" data-bs-toggle="modal" data-bs-target="#vlrMoModal">Calcular valor da hora</a>

          <!-- modal calcuo valor dão mão de obra -->
          <div class="modal fade" id="vlrMoModal" tabindex="-1" aria-labelledby="vlrMoModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"> Calcular valor da hora</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="valor-total" class="form-label">Estimativa de Remuneração mensal</label>
                    <input v-model.number="vlrMoRemuneracao"type="number" min="1" id="valor-total" class="form-control form-control-sm" required />
                  </div>
                  <div class="mb-3">
                      <label for="dias-trabalho" class="form-label">Quantidade de dias de trabalho mensal</label>
                      <input v-model.number="vlrMoHorasTrabalhoMes" type="number" min="1" id="dias-trabalho" class="form-control form-control-sm" required />
                  </div>
                  <div class="mb-3">
                      <label for="horas-diarias" class="form-label">Quantiodade de horas diárias de trabalho</label>
                      <input v-model.number="vlrMoHorasDiarias" type="number" min="1" id="horas-diarias" class="form-control form-control-sm" required />
                  </div>
                  <div class="mb-3">
                    <label for="despesas" class="form-label">Despesas mensais <small class="text-muted">(ex.: aluguel, internet, energia, agua, transporte, ferramentas, etc)</small></label>
                    <input v-model.number="vlrMoDespesas" type="number" min="1" id="despesas" class="form-control form-control-sm" required />
                  </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                  <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary btn-sm" @click="calc_vlr_hr" data-bs-dismiss="modal">Calcular</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary btn-sm" @click="prevStep"><i class="fa-solid fa-arrow-left"></i> Voltar</button>
          <button type="button" class="btn btn-primary btn-sm" @click="nextStep">Próximo Passo <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <!-- Step 3: Tempo de Desenvolvimento -->
      <div v-if="step === 3" class="step">
        <h3 class="h3">Tempo de Desenvolvimento</h3>
        <div class="my-5">
          <label for="horas-trabalho" class="form-label lead">Total de horas de trabalho a ser gasta neste projeto</label><br>
          <small class="text-muted">Esse valor é utilizado para calcular o valor total do projeto</small>
          <input v-model.number="horasTrabalho" type="number" id="horas-trabalho" class="form-control form-control-sm mt-3" required />
       
          <label for="horas-diarias" class="form-label lead">Quantidade de horas diárias a serem trabalhadas neste projeto</label><br>
          <small class="text-muted">Esse valor é utilizado para calcular o prazo de execução do projeto</small>
          <input v-model.number="horasDiarias" type="number" id="horas-diarias" class="form-control form-control-sm mt-3" required />
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary btn-sm" @click="prevStep"><i class="fa-solid fa-arrow-left"></i> Voltar</button>
          <button type="submit" class="btn btn-primary btn-sm">Calcular e Finalizar <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>


      <!-- Resultado -->
      <div v-if="resultado && step === 4" class="result mt-3">
        <h3 class="h3 mb-5">Resultado <i class="fa-solid fa-magnifying-glass"></i></h3>
        <dib class="my-5">
          <p><i class="fa-solid fa-computer"></i> <strong> Tipo de Serviço:</strong> {{ tipoServico === 'desenvolvimento-site' ? 'Desenvolvimento de Site' : 'Desenvolvimento de Sistema' }}</p>
          <p><i class="fa-regular fa-credit-card"></i> <strong> Valor Total:</strong> R$ {{ resultado.valor.toFixed(2) }}</p>
          <p><i class="fa-regular fa-clock"></i> <strong> Prazo de Execução:</strong> {{ resultado.prazo }} dias úteis</p>
          <p><i class="fa-regular fa-calendar"></i> <strong> Válidade Orçamento:</strong> {{ resultado.validade }}</p>
        </dib>
        <div class="d-flex justify-content-between mt-5">
          <button type="button" class="btn btn-outline-secondary" @click="reset"><i class="fa-solid fa-arrows-rotate"></i></button>
          <button type="button" class="btn btn-outline-info" @click="printPdf"><i class="fa-solid fa-floppy-disk"></i></button>
          <button type="button" class="btn btn-outline-primary" @click="print"><i class="fa-solid fa-print"></i></button>
          <button type="button" class="btn btn-outline-success" @click="sendWhatsApp"><i class="fa-brands fa-whatsapp"></i></button>
          <button type="button" class="btn btn-outline-secondary" @click="goHome"><i class="fa-solid fa-house"></i></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const step = ref(1)
const tipoServico = ref('desenvolvimento-site')
const vlrMoRemuneracao = ref(1000)
const vlrMoHorasTrabalhoMes = ref(20)
const vlrMoHorasDiarias = ref(8)
const vlrMoDespesas = ref(500)

const valorHora = ref(10)
const horasTrabalho = ref(0)
const valorTotal = ref(0)
const horasDiarias = ref(8)
const calcularValorHora = ref(false)
const prazo = ref(0)
const resultado = ref(null)

const nextStep = () => {
  if (step.value === 1 && !tipoServico.value || !tipoServico.value > 0 || tipoServico.value === 'default') {
    
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, selecione o tipo de serviço.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return
  }

  if (step.value === 2 && !valorHora.value || !valorHora.value > 0 || valorHora.value === 'default') {
   
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, informe o valor da hora de trabalho.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return
  }

  step.value++
}

const prevStep = () => {
  step.value--
}

const dataCom15DiasUTC = () => {
  const dataAtual = new Date()
  const dataMais15 = new Date(dataAtual.setDate(dataAtual.getDate() + 15))
  return {
    dataAtual: new Date(dataAtual),
    dataAtualUTC: new Date(dataAtual).toLocaleDateString(),
    dataMais15: new Date(dataMais15),
    dataMais15UTC: new Date(dataMais15).toLocaleDateString()
  }
}


const calc_vlr_hr = () => {

  if (!vlrMoRemuneracao.value || !vlrMoHorasTrabalhoMes.value || !vlrMoHorasDiarias.value || !vlrMoDespesas.value) {
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, preencha todos os campos para calcular o valor da hora.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return
  }

  const valorRemuneracao = vlrMoRemuneracao.value
  const horasMensal = vlrMoHorasTrabalhoMes.value
  horasDiarias.value = vlrMoHorasDiarias.value
  const despesas = vlrMoDespesas.value

  const diasUteis = Math.ceil(horasMensal / horasDiarias.value)
  const valorHoraCalculado = (valorRemuneracao + despesas) / (horasMensal * diasUteis)

  valorHora.value = valorHoraCalculado

  Swal.fire({
    title: 'Valor da Hora Calculado!',
    text: `O valor da hora de trabalho foi calculado em R$ ${valorHora.value.toFixed(2)}`,
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}

const calcular = () => {

  if (!horasTrabalho.value > 0 ) {
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, informe o total de horas de trabalho.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return
  }

  if (!horasDiarias.value > 0 ) {
    Swal.fire({
      title: 'Erro!',
      text: 'Por favor, informe a quantidade de horas diárias de trabalho.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    return
  }

  try {
    let valor = 0
    let valorHoraCalculado = 0
    let diasUteis = 0

    if (!valorHora.value) {
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, informe o valor da hora de trabalho.',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }

    diasUteis = Math.ceil(horasTrabalho.value / horasDiarias.value)

    if (calcularValorHora.value) {
      if (valorTotal.value && horasTrabalho.value) {
        valorHoraCalculado = valorTotal.value / horasTrabalho.value
        resultado.value = {
          valor: valorTotal.value,
          valorHoraCalculado: valorHoraCalculado.toFixed(2),
          prazo: prazo.value,
          validade: dataCom15DiasUTC().dataAtualUTC
        }
      } else {
        Swal.fire({
          title: 'Erro!',
          text: 'Por favor, informe o valor total do projeto e as horas de trabalho para calcular o valor da hora.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        return
      }
    } else {
      valor = valorHora.value * horasTrabalho.value
      resultado.value = {
        valor: valor,
        valorHoraCalculado: valorHora.value.toFixed(2),
        prazo: diasUteis,
        validade: dataCom15DiasUTC().dataAtualUTC
      }
          
    }

    Swal.fire({
      title: 'Resultado Calculado!',
      text: `O orçamento terá um custo de R$ ${resultado.value.valor.toFixed(2)} reais, com um prazo de ${resultado.value.prazo} dias úteis. Válido até ${resultado.value.validade}`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })

    step.value++
  
  } catch (error) {
    Swal.fire({
      title: 'Erro!',
      text: 'Ocorreu um erro ao calcular o valor.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
  }
}

const handleSubmit = () => {
  calcular()
}

const reset = () => {
  tipoServico.value = 'desenvolvimento-site'
  valorHora.value = 10
  horasTrabalho.value = 0
  valorTotal.value = 0
  horasDiarias.value = 8
  calcularValorHora.value = false
  prazo.value = 0
  resultado.value = null
  step.value = 1
}

const printPdf = () => {
  const doc = new jsPDF();

  const servico = tipoServico.value === 'desenvolvimento-site' ? 'Desenvolvimento de Site' : 'Desenvolvimento de Sistema'

  
  // Configuração da fonte e estilo
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text('Proposta Personalizada para o Seu Projeto', 10, 10);
  
  // Adiciona um parágrafo de introdução com rapport
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text('Prezado(a),', 10, 20);

  
  doc.text(
    'Foi um prazer conhecer você e discutir suas necessidades de ' + servico + '. ' +
    'Entendemos a importância de solução específica para o seu negócio e estamos comprometidos em oferecer ' +
    'uma solução que não só atende, mas supera suas expectativas.',
    10,
    30,
    { maxWidth: 180 }
  );


  // Adiciona um parágrafo que usa reciprocidade e compromisso
  doc.text(
    'Como parte do nosso compromisso em entregar valor excepcional e assegurar que você obtenha o melhor resultado, preparamos um orçamento detalhado para o projeto.\n' +
    'Abaixo estão os detalhes da nossa proposta:',
    10,
    50,
    { maxWidth: 180 }
  );

  // Adiciona os detalhes do orçamento em um formato de tabela simples
  doc.autoTable({
    startY: 65,
    head: [['Tipo de Serviço', 'Valor Total', 'Prazo de Execução', 'Validade']],
    body: [
      [
        servico,
        resultado.value?.valor.toFixed(2) || 'N/A',
        resultado.value?.prazo + ' dias úteis' || 'N/A',
        resultado.value?.validade || 'N/A'
      ]
    ],
    theme: 'striped',
    margin: { top: 10 }
  });

  // Adiciona um parágrafo que utiliza prova social e autoridade
  doc.text(
    'Nossa equipe é composta por especialistas com vasta experiência na área e um histórico comprovado de sucesso com clientes semelhantes ao seu.\n' +
    'Veja alguns dos depoimentos e casos de sucesso em nosso site.',
    10,
    doc.autoTable.previous.finalY + 10,
    { maxWidth: 180 }
  );

  // Adiciona um parágrafo final que usa escassez e um chamado à ação
  doc.text(
    'Estamos oferecendo essa proposta com um desconto exclusivo para novos clientes, mas essa oferta é limitada e válida apenas até ' + resultado.value?.validade + '.\n' +
    'Não perca a chance de transformar seu projeto em um grande sucesso!\n' +
    'Entre em contato conosco hoje mesmo para discutir os próximos passos.',
    10,
    doc.autoTable.previous.finalY + 30,
    { maxWidth: 180 }
  );

  // Adiciona informações de contato
  doc.text(
    '\n\n\nAtenciosamente,\n\nEstimPro\nGrupo 3w Online\nwww.3wonline.com.br',
    10,
    doc.autoTable.previous.finalY + 50,
    { maxWidth: 180 }
  );

  doc.save('orcamento.pdf')
}

const print = () => {
  const doc = new jsPDF();

  const servico = tipoServico.value === 'desenvolvimento-site' ? 'Desenvolvimento de Site' : 'Desenvolvimento de Sistema'

  
  // Configuração da fonte e estilo
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text('Proposta Personalizada para o Seu Projeto', 10, 10);
  
  // Adiciona um parágrafo de introdução com rapport
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text('Prezado(a),', 10, 20);

  
  doc.text(
    'Foi um prazer conhecer você e discutir suas necessidades de ' + servico + '. ' +
    'Entendemos a importância de solução específica para o seu negócio e estamos comprometidos em oferecer ' +
    'uma solução que não só atende, mas supera suas expectativas.',
    10,
    30,
    { maxWidth: 180 }
  );


  // Adiciona um parágrafo que usa reciprocidade e compromisso
  doc.text(
    'Como parte do nosso compromisso em entregar valor excepcional e assegurar que você obtenha o melhor resultado, preparamos um orçamento detalhado para o projeto.\n' +
    'Abaixo estão os detalhes da nossa proposta:',
    10,
    50,
    { maxWidth: 180 }
  );

  // Adiciona os detalhes do orçamento em um formato de tabela simples
  doc.autoTable({
    startY: 65,
    head: [['Tipo de Serviço', 'Valor Total', 'Prazo de Execução', 'Validade']],
    body: [
      [
        servico,
        resultado.value?.valor.toFixed(2) || 'N/A',
        resultado.value?.prazo + ' dias úteis' || 'N/A',
        resultado.value?.validade || 'N/A'
      ]
    ],
    theme: 'striped',
    margin: { top: 10 }
  });

  // Adiciona um parágrafo que utiliza prova social e autoridade
  doc.text(
    'Nossa equipe é composta por especialistas com vasta experiência na área e um histórico comprovado de sucesso com clientes semelhantes ao seu.\n' +
    'Veja alguns dos depoimentos e casos de sucesso em nosso site.',
    10,
    doc.autoTable.previous.finalY + 10,
    { maxWidth: 180 }
  );

  // Adiciona um parágrafo final que usa escassez e um chamado à ação
  doc.text(
    'Estamos oferecendo essa proposta com um desconto exclusivo para novos clientes, mas essa oferta é limitada e válida apenas até ' + resultado.value?.validade + '.\n' +
    'Não perca a chance de transformar seu projeto em um grande sucesso!\n' +
    'Entre em contato conosco hoje mesmo para discutir os próximos passos.',
    10,
    doc.autoTable.previous.finalY + 30,
    { maxWidth: 180 }
  );

  // Adiciona informações de contato
  doc.text(
    '\n\n\nAtenciosamente,\n\nEstimPro\nGrupo 3w Online\nwww.3wonline.com.br',
    10,
    doc.autoTable.previous.finalY + 50,
    { maxWidth: 180 }
  );

  // Gera e abre o PDF
  doc.output('dataurlnewwindow', { filename: 'orcamento.pdf' });
}


const sendWhatsApp = () => {
  // Mensagem adaptada para uma linguagem simples e direta
  const message = `Olá!\n\nAqui está o orçamento para o seu projeto:\n\nTipo de Serviço: ${tipoServico.value === 'desenvolvimento-site' ? 'Desenvolvimento de Site' : 'Desenvolvimento de Sistema'}\nValor Total: R$ ${resultado.value?.valor.toFixed(2)}\nPrazo: ${resultado.value?.prazo} dias úteis\n\nValidade: até ${resultado.value?.validade}\n\nQualquer dúvida ou se precisar de mais informações, estou à disposição!\n\n\Atenciosamente,\n\nEstimPro\nGrupo 3w Online\nwww.3wonline.com.br`;

  // Cria o link para enviar a mensagem via WhatsApp
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

  // Abre o link em uma nova aba
  window.open(url, '_blank');
}

const goHome = () => {
  window.location.href = '/'
}
</script>

<style scoped>

</style>
