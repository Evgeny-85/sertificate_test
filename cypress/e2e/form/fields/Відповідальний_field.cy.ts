describe('Відповідальний', () => {
    before(() => {
      cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
      cy.get('#form')
        .find('.left_text')
        .contains('Відповідальний')
        .parent()
        .should('be.visible')
      cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(18) > div > input').should('have.attr', 'readonly')
    })
  })