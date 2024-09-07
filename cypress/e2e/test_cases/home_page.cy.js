import pages from "../pages/index_home";

describe('Validações de Comprimento - SuperFrete', () => {

  beforeEach(() => {
    // Definir a resolução padrão da tela
    cy.viewport(1366, 768);
    cy.clearCookies();
    cy.clearLocalStorage()
    cy.visit('https://web.superfrete.com/');
    cy.wait(10000)
    pages.validarHomePage();
    // Tratamento de exceções específico
     cy.on('uncaught:exception', (err) => {
        return false;
    });
  });

  it('selecionar o peso 300 gramas e efetuar o cálculo do frete', () => {
    
    pages.preencherAltura(2)
    pages.preecherLargura(11)
    pages.preencherComprimento(16)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
     
  });

  it('Deve exibir erro para Altura menor do 0.4', () => {
    pages.preencherAltura(0.3)
    pages.preecherLargura(11)
    pages.preencherComprimento(16)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
    pages.validarNegativa('Altura mínima 0.4 cm')
   
  });

  it('Deve exibir erro para Altura maior que 150 cm', () => {
    pages.preencherAltura(153)
    pages.preecherLargura(11)
    pages.preencherComprimento(16)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
    pages.validarNegativa('Comprimento máximo 150 cm.')
    
  });

  it('Deve exibir erro para Largura menor do que 8cm', () => {
    pages.preencherAltura(120)
    pages.preecherLargura(6)
    pages.preencherComprimento(16)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
    pages.validarNegativa('Largura mínima 8 cm.')
    
  });

  it('Deve exibir erro para Largura maior do que 150cm', () => {
    pages.preencherAltura(120)
    pages.preecherLargura(156)
    pages.preencherComprimento(16)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
    pages.validarNegativa('Largura máxima 150 cm.')
    
  });

  it.only('Deve exibir erro para comprimento menor do que 13cm', () => {
    pages.preencherAltura(120)
    pages.preecherLargura(11)
    pages.preencherComprimento(11)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
    pages.validarNegativa('Comprimento mínimo 13 cm.')
    
  });

  it('Deve exibir erro para comprimento maior do que 150cm', () => {
    pages.preencherAltura(120)
    pages.preecherLargura(11)
    pages.preencherComprimento(160)
    pages.cepOrigem('71926500')
    pages.cepDestino('08090-284')
    pages.botaoSubmit()
    pages.validarNegativa('Comprimento máximo 150 cm.')
    
  });


}); // fim do Describe

// observação - report Bug - ao preencher os campos com valores minimos informados no CAMPO ALTURA, ainda assim aparece o campo para digitar o email, o certo seria exibir a altura com o erro  e o sistema não ter continuidade.
