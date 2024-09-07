class HomePage{

    validarHomePage(){
        cy.get('[data-cy="calculator-submit"]').should('be.visible')

    }

    preencherAltura(alt){
    cy.get('#weight').click()
    cy.get('[data-value="0.3"]').click()
    cy.get('#packageHeight').click() // digitar a Altura
    cy.get('#packageHeight').type(alt)

    }

    preecherLargura(larg){
        cy.get('#packageWidth').click() // digitar a largura
        cy.get('#packageWidth').type(larg)
    }

    preencherComprimento(compri){
        cy.get('#packageDepth').click() // digitar o comprimento
        cy.get('#packageDepth').type(compri)
    }
    
    cepOrigem(cepO){
        cy.get('#originPostcode').click() // digitar o cep de origem
        cy.get('#originPostcode').type(cepO)
    }
    cepDestino(cepD){
        cy.get('#destinationPostcode').click() // digitar o CEP destino
        cy.get('#destinationPostcode').type(cepD)
    }

    botaoSubmit(){
        cy.get('[data-cy="calculator-submit"]').click()
    }
    
    validarNegativa(msm){
        cy.contains(msm).should('be.visible')
    }
   
} export default new HomePage;