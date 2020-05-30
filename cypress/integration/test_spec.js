describe('CodeBreaker E2E Test', () => {
   it('guest from CodeBreaker', () => {
      cy.visit('/');
      cy.get('#codeValue').type('0123').should('have.value', '0123');
      cy.get('#tryValue').click();
      cy.get('#resValue').should('contain', 'XXXX');
   });
   it('guest from CodeBreaker', () => {
      cy.visit('/');
      cy.get('#codeValue').type('4567').should('have.value', '4567');
      cy.get('#tryValue').click();
      cy.get('#resValue').should('contain', '');
   });
   it('guest from CodeBreaker', () => {
      cy.visit('/');
      cy.get('#codeValue').type('3210').should('have.value', '3210');
      cy.get('#tryValue').click();
      cy.get('#resValue').should('contain', '____');
   });

   it('setSecret from CodeBreaker', () => {
      cy.pause();
      cy.visit('/');
      cy.get('#setValue').click();
      cy.get('#stateValue').should('contain', 'changed');
   });
   it('getSecret from CodeBreaker', () => {
      cy.visit('/');
      cy.request('http://codebreaker-node.herokuapp.com/codebreaker/getsecret').as('secret')

      cy.get('@secret').should((response) => {
         expect(response.body).to.have.property('result')
      })
   });
});