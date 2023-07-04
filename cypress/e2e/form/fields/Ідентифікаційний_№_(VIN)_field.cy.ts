describe('Ідентифікаційний № (VIN)', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Ідентифікаційний № (VIN)')
            .parent()
            .should('be.visible')
        cy.intercept('POST', '**/autocomplete-declarant')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(15) > div.col-md-8').type('1FADP333777ASD799').type('{backspace}').type('{backspace}').type('99')
    })
})