describe('Вид газу field', () => {
    before(() => {
        cy.visit('/order/create?usa=1')
    })
    it('field should be visisble', () => {
        cy.get('#form')
            .find('.left_text')
            .contains('Вид газу')
            .parent()
            .should('be.visible')
            .find('span .select2-selection__arrow')
            .click()
        cy.intercept('POST', '**/autocomplete-declarant')
        cy.get('#form > div > div:nth-child(1) > div > div.row > div:nth-child(9) > div').type('LPG')
        cy.get('[id^=select2-gas_type_id-] > li').first().click()
    })
})