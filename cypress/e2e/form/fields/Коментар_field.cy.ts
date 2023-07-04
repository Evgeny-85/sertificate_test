describe('Коментар', () => {
    before(() => {
      cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
      cy.get('#form')
        .find('.left_text')
        .contains('Коментар')
        .parent()
        .should('be.visible')
      cy.intercept('POST', '**/autocomplete-declarant')
      cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(17) > div').type('asd')
    })
  })