import login from "../pages/index_home"

describe.only('Validações de Comprimento - SuperFrete', () => {

    beforeEach(() => {
        cy.visit('https://web.superfrete.com/');
        login.validarHomePage()
        cy.on('uncaught:exception', (err, runnable) => {
        // Adicione lógica para tratar erros específicos ou ignorar erros
        if (err.message.includes('User is not logged!')) {
          return false; // Ignorar este erro específico
        }
        return true; // Permitir que outros erros façam o teste falhar
      
      });
      
    });
     
      
    });
  
    it('Deve exibir erro para comprimento menor que 13 cm', () => {
      cy.get('input[name="length"]').type('12');
      cy.get('button[type="submit"]').click();
      cy.contains('Comprimento inválido').should('be.visible');
    });
  
    it('Deve exibir erro para comprimento maior que 150 cm', () => {
      cy.get('input[name="length"]').type('151');
      cy.get('button[type="submit"]').click();
      cy.contains('Comprimento inválido').should('be.visible');
    });
  
  