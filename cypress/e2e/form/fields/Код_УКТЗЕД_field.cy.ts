describe('Код УКТЗЕД', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Код УКТЗЕД')
            .parent()
            .should('be.visible')
            .find('span .select2-selection__arrow')
            .click()
        cy.intercept('POST', '**/autocomplete-declarant')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(13) > div').type('8703')
        cy.get('[id^=select2-code_uktzed-] > li').first().click()
    })
})