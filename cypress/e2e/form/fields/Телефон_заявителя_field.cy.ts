describe('Телефон заявителя field', () => {
    before(() => {
      cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
      cy.get('#form')
        .find('.left_text')
        .contains('Телефон заявителя')
        .parent()
        .should('be.visible')
      cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(5) > div').type('0996483487')
    })
  })