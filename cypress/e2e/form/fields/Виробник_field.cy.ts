describe('Виробник', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Виробник')
            .parent()
            .should('be.visible')
            .find('span .select2-selection__arrow')
            .click()
        cy.intercept('POST', '**/autocomplete-declarant')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(14) > div').type('"FORD MOTOR CO." - США')
        cy.get('[id^=select2-manufacturer_id-] > li').first().click()
    })
})