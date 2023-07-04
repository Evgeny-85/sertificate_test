describe('Нормативні документи', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Нормативні документи')
            .parent()
            .should('be.visible')
        cy.intercept('POST', '**/autocomplete-declarant')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(12) > div').type('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17, 18, 20, 30, 31')
    })
})